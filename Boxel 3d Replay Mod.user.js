// ==UserScript==
// @name         Boxel 3d Replay Mod
// @namespace    http://tampermonkey.net/
// @version      v2.0.2
// @description  A mod that records and plays back runs in boxel 3d (position, rotation, scale, inputs)
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

var getPrevReplay;
var getReplay;
var watchReplay;
var loadReplay;
var deleteReplay;
var clearReplays;
var getReplays;

(function() {
    // Recording replays
    var prevReplay;
    var currReplay = {positions:[]};
    var lastScale = {};
    var lastAngle = {};

    // Playing back a replay
    var replayBeingWatched;
    var watchingReplay = false;

    // Playing alongside replays
    var currReplayIndex = 0; // The index for the next replay to add
    var replays = {}; // Object instead of array so keys don't change (unlike indices) when elements are removed

    getPrevReplay = () => {return prevReplay;};
    getReplay = () => {return currReplay;};
    watchReplay = function(replay) {
        app.level.retryLevel();
        pause();
        replayBeingWatched = replay;
        watchingReplay = true;
        app.level.children.forEach((child) => {
            Matter.Body.setStatic(child.body, true);
        });
        let playReplayBack;
        playReplayBack = () => {
            if (getFrameCount() == replayBeingWatched.positions.length - 1) {
                removeUpdateFunction(playReplayBack);
                app.level.children.forEach((child) => {
                    Matter.Body.setStatic(child.body, child.isStaticOrigin);
                });
                return;
            }
            let currPosition = replayBeingWatched.positions[getFrameCount() + 1];
            Object.keys(currPosition).forEach((key) => {
                let num = Number(key);
                if (currPosition[key].hasOwnProperty("scale"))
                    app.level.children[num].setScale(currPosition[key].scale, false);
                Matter.Body.setPosition(app.level.children[num].body, {x: currPosition[key].x, y: currPosition[key].y});
                if (currPosition[key].hasOwnProperty("angle"))
                    Matter.Body.setAngle(app.level.children[num].body, currPosition[key].angle, false);
            });
        };
        addUpdateFunction(playReplayBack);
    }

    loadReplay = function(replay, skin="../../png/pink.png") {
        // Discard everything but the player's position, rotation, and scale
        let newReplay = {positions: {}};
        for (let i = 0; i < replay.positions.length; i++) {
            newReplay.positions[i] = replay.positions[i][0];
        }
        replays[currReplayIndex] = newReplay;

        // Create new player for this replay
        newReplay.player = createPlayer(true, skin);
        newReplay.player.addToGame(0, 0, false);
        newReplay.player.light.visible = false;
        newReplay.player.setPositionLib({z: -1});
        return currReplayIndex++;
    };

    deleteReplay = function(idx) {
        if (!replays.hasOwnProperty(idx)) return;
        replays[idx].player.removeFromGame();
        delete replays[idx];
    };

    clearReplays = function() {
        Object.keys(replays).forEach((key) => {
            let replay = replays[key];
            replay.player.removeFromGame();
        });
        replays = {};
        currReplayIndex = 0;
    };

    getReplays = function() {
        return replays;
    }

    // Before the replay positions and inputs are cleared, store them
    beforeLevelStart.push(() => {
        prevReplay = {};
        prevReplay.positions = currReplay.positions;
        prevReplay.speed = currReplay.speed;
        prevReplay.inputs = getInputs();
    });
    afterLevelStart.push(() => {
        currReplay = {
            positions: [],
            inputs: []
        };
        watchingReplay = false;
    });

    // Ensure the fake players remain intangible (this code should probably be in player manipulator. ah well)
    afterLevelStart.push(() => {
        Object.keys(replays).forEach((key) => {
            replays[key].player.body.collisionFilter.category = 0;
        });
    });

    // During the level playing, record the positions (inputs are being recorded by input recorder)
    addUpdateFunction(() => {
        let newPosition = {};
        for (let i = 0; i < app.level.children.length; i++) {
            let child = app.level.children[i];
            if (!child.body) continue;
            if (child.body.isStatic) continue;
            let angleChanged = false;
            let scaleChanged = false;
            if (currReplay.positions.length != 0) {
                if (child.body.angle != lastAngle[i]) {
                    angleChanged = true;
                }
                if (!lastScale.hasOwnProperty(i)) {
                    scaleChanged = true;
                } else if (child.scale.x != lastScale[i].x) {
                    scaleChanged = true;
                } else if (child.scale.y != lastScale[i].y) {
                    scaleChanged = true;
                } else if (child.scale.z != lastScale[i].z) {
                    scaleChanged = true;
                }
            } else {
                angleChanged = true;
                scaleChanged = true;
            }
            newPosition[i] = {
                x: child.body.position.x,
                y: child.body.position.y
            };
            if (angleChanged) {
                newPosition[i].angle = child.body.angle;
                lastAngle[i] = child.body.angle;
            }
            if (scaleChanged) {
                newPosition[i].scale = {
                    x: child.scale.x,
                    y: child.scale.y,
                    z: child.scale.z
                };
                lastScale[i] = newPosition[i].scale
            }
        }
        currReplay.positions.push(newPosition);
    });

    // Update the positions of the fake players in the loaded replays
    addUpdateFunction(() => {
        Object.keys(replays).forEach((key) => {
            let replay = replays[key];
            let positions = replay.positions;
            if (!positions.hasOwnProperty(getFrameCount())) return;
            let position = positions[getFrameCount()];
            if (position.hasOwnProperty("scale")) {
                replay.player.setScale(position.scale, false);
            }
            replay.player.setPositionLib({x: position.x, y: -position.y});
            if (position.hasOwnProperty("angle")) {
                replay.player.setRotation(-position.angle, false);
            }
        });
    });

    // After the level finishes, store the inputs
    afterFinish.push(() => {
        currReplay.inputs = getInputs();
        currReplay.speed = app.loop.speed;
    });

    afterFinish.push(async function() {
        if (!watchingReplay) return;
        setTimeout(function() {
            let textBox;
            if (document.getElementsByClassName("popup").length > 0) {
                textBox = document.getElementsByClassName("popup")[0].children[1].children[0].children[0];
            } else {
                textBox = document.getElementsByClassName("wrapper")[0].children[0];
            }
            textBox.appendChild(document.createElement("br"));
            textBox.appendChild(document.createTextNode("Replay Mod Playback"));
        }, 1000);
    });

    // Mod list
    addModToList("replay");
})();
