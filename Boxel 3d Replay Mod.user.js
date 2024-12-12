// ==UserScript==
// @name         Boxel 3d Replay Mod
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A mod that records runs in boxel 3d (position, rotation, scale, inputs)
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

var getPrevReplay;
var getReplay;
var watchReplay;

(function() {
    var prevReplay;
    var currReplay = {positions:[]};
    var lastScale = {};
    var lastAngle = {};
    var replayBeingWatched;

    getPrevReplay = () => {return prevReplay;};
    getReplay = () => {return currReplay;};
    watchReplay = function(replay) {
        app.level.retryLevel();
        pause();
        replayBeingWatched = replay;
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
    });

    // During the level playing, record the positions (inputs are being recorded by input recorder)
    addUpdateFunction(() => {
        let newPosition = {};
        for (let i = 0; i < app.level.children.length; i++) {
            let child = app.level.children[i];
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

    // After the level finishes, store the inputs
    afterFinish.push(() => {
        currReplay.inputs = getInputs();
        currReplay.speed = app.loop.speed;
    });

    afterFinish.push(async function() {
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
