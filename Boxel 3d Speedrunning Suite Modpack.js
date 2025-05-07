// ==UserScript==
// @name         Boxel 3d Modding API
// @namespace    http://tampermonkey.net/
// @version      v1.3.3
// @description  Adding a modding API to boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var addUpdateFunction;
var removeUpdateFunction;
var nextFrameUpdateFunction;
var addJumpFunction;
var removeJumpFunction;
var addGrappleFunction;
var removeGrappleFunction;
var addGrappleReleaseFunction;
var removeGrappleReleaseFunction;
var getPlayer = () => {return app.player};
var getPlayerBody = () => {return app.player.body};
var getPlayerSpeed = () => {return getPlayerBody().speed};
var isDead = app.player.isFrozen();
var canJump = () => {return app.player.allowJump};
var getLevel = () => {return app.level};
var getEngine = () => {return app.engine};
var getWorld = () => {return app.engine.world};
var getGravity = () => {return app.engine.world.gravity};
var getTimer = () => {return app.timer.toString()};
var getVelocity = () => {return app.player.body.velocity};
var setVelocity;
var setVelocityX;
var setVelocityY;
var addVelocity;
var appElement = document.getElementById("app");
var addModToList;

(function() {
    'use strict';

    app.engine.events.afterUpdate = [];

    addUpdateFunction = function(func) {
        app.engine.events.afterUpdate.push(func);
    }

    removeUpdateFunction = function(func) {
        app.engine.events.afterUpdate.splice(app.engine.events.afterUpdate.indexOf(func), 1);
    }

    nextFrameUpdateFunction = function(func) {
        addUpdateFunction(function() {
            func();
            removeUpdateFunction(func);
        });
    };

    var jumpFuncs = [];
    app.player.jumpOriginal = app.player.jump;
    app.player.jump = function() {
        let canJump_ = canJump();
        app.player.jumpOriginal();
        if ((app.player.mode == 'jump' || app.player.mode == 'control') && canJump_) {
            jumpFuncs.forEach((func) => {func();});
        }
    }

    addJumpFunction = function(func) {
        jumpFuncs.push(func);
    }

    removeJumpFunction = function(func) {
        if (func in jumpFuncs) {
            jumpFuncs.splice(jumpFuncs.indexOf(func), 1);
        }
    }

    var grappleFuncs = [];
    app.player.grappleOriginal = app.player.addRope;
    app.player.addRope = function(pos) {
        app.player.grappleOriginal(pos);
        if (app.player.mode == 'grapple') {
            grappleFuncs.forEach((func) => {func(pos);});
        }
    }

    addGrappleFunction = function(func) {
        grappleFuncs.push(func);
    }

    removeGrappleFunction = function(func) {
        if (func in grappleFuncs) {
            grappleFuncs.splice(grappleFuncs.indexOf(func), 1);
        }
    }

    var grappleReleaseFuncs = [];
    app.player.grappleReleaseOriginal = app.player.removeRope;
    app.player.removeRope = function() {
        app.player.grappleReleaseOriginal();
        if (app.player.mode == 'grapple') {
            grappleReleaseFuncs.forEach((func) => {func();});
        }
    }

    addGrappleReleaseFunction = function(func) {
        grappleReleaseFuncs.push(func);
    }

    removeGrappleReleaseFunction = function(func) {
        if (func in grappleReleaseFuncs) {
            grappleReleaseFuncs.splice(grappleReleaseFuncs.indexOf(func), 1);
        }
    }

    setVelocity = function(vX, vY) {
        let player = getPlayerBody();
        Matter.Body.setVelocity(player, {x: vX, y: vY});
    }

    setVelocityX = function(vX) {
        let vY = getVelocity().y;
        setVelocity(vX, vY);
    }

    setVelocityY = function(vY) {
        let vX = getVelocity().x;
        setVelocity(vX, vY);
    }

    addVelocity = function(dx, dy) {
        let v = getVelocity();
        if (dy == 0) {
            setVelocityX(v.x + dx);
        } else if (dx == 0) {
            setVelocityY(v.y + dy);
        } else {
            setVelocity(v.x + dx, v.y + dy);
        }
    }
    
    document.head.innerHTML += "<style>.ui-bubble .popup .container .content .title {font-size: 1em;} .ui-bubble .popup .container .content .title span {font-size: 2em;}</style>";

    // Mod list
    var modList = document.createElement("div");
    modList.style.position = "absolute";
    modList.style.bottom = 0;
    modList.style.right = 0;
    modList.style.paddingRight = 0;
    modList.style.paddingBottom = 0;
    modList.style.opactiy = "10%";
    modList.style.fontSize = "5px";
    appElement.appendChild(modList);

    addModToList = function(text) {
        let newP = document.createElement("p");
        newP.style.margin = 0;
        newP.appendChild(document.createTextNode(text));
        modList.appendChild(newP);
    }

    // Convention is to have the first letter of the mod name lowercase
    addModToList("modding API");
})();
// ==UserScript==
// @name         Boxel 3d Speed Indicator
// @namespace    http://tampermonkey.net/
// @version      v1.0.1
// @description  Adding a speed indicator to boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Indicator
    let indicator = document.createElement("div");
    var text = document.createTextNode("0");
    indicator.appendChild(text);
    indicator.style.position = "absolute";
    indicator.style.bottom = 0;
    indicator.style.left = "50px";
    indicator.style.paddingLeft = 0;
    indicator.style.paddingBottom = 0;
    indicator.style.fontSize = "20px";
    indicator.style.backgroundColor = "white";
    appElement.appendChild(indicator);

    addUpdateFunction(function() {
      text.textContent = getPlayerSpeed().toFixed(3).toString();
    });

    // Mod list
    addModToList("speed indicator");
})();
// ==UserScript==
// @name         Boxel 3d Time Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.2.1
// @description  Time manipulator library for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

// Level starting (entering or restarting a level)
var beforeLevelStart = [];
var afterLevelStart = [];
// Level restart (pressing "r" or dying/pressing "c" without a checkpoint)
//var beforeLevelRestart = [];
//var afterLevelRestart = [];
// Respawning at checkpoint (pressing "c" or dying with a checkpoint)
var beforeCheckpointRespawn = [];
var afterCheckpointRespawn = [];
// Finishing a level
var beforeFinish = [];
var afterFinish = [];

function setTime(time) {
    app.timer.playTime = Date.now() - app.timer.startTime - 1e3 * time;
}
function addTime(time) {
    app.timer.playTime += time;
}
function pause() {
    app.pauseLevel();
}
function resume() {
    app.resumeLevel();
}
function pauseTime() {
    app.timer.pause();
}
function resumeTime() {
    app.timer.resume();
}
function resetTime() {
    app.timer.reset();
}

(function() {
    'use strict';

    app.timer.reset = function() {
        beforeLevelStart.forEach((func) => func());

        // START Doppler's code
        var e = Date.now();
        app.timer.startTime = e,
        app.timer.pauseTime = e,
        app.timer.playTime = 0
        // END Doppler's code

        afterLevelStart.forEach((func) => func());
    }

    // HELP I can't figure out how to detect level restart
    // This implementation detects level starts (above function) and checkpoint respawns (next function) - so it's useless
    //app.level.resetLevel = function() {
    //    beforeLevelRestart.forEach((func) => func());
    //
    //    // START Doppler's code
    //    for (var e = 0; e < app.level.children.length; e++) {
    //        var t = app.level.children[e];
    //        t.resetToOrigin()
    //    }
    //    // END Doppler's code
    //
    //    afterLevelRestart.forEach((func) => func());
    //}

    var originalSetPositionToCheckpoint = app.player.setPositionToCheckpoint;
    app.player.setPositionToCheckpoint = function() {
        if (app.player.checkpoint != null) {
            beforeCheckpointRespawn.forEach((func) => func());

            // START Doppler's code
            app.player.checkpoint != null &&
            app.player.setPosition({
              x: app.player.position.x = app.player.checkpoint.x,
              y: app.player.position.y = app.player.checkpoint.y,
              z: app.player.position.z = app.player.checkpoint.z
            }, !1)
            // END Doppler's code

            afterCheckpointRespawn.forEach((func) => func());
        }
    }

    let originalFinish = app.player.finish;
    app.player.finish = function() {
        beforeFinish.forEach((func) => func());
        originalFinish();
        afterFinish.forEach((func) => func());
    }

    // Mod list
    addModToList("time manipulator");
})();
// ==UserScript==
// @name         Boxel 3d Accurate Timer
// @namespace    http://tampermonkey.net/
// @version      v1.3.4
// @description  Accurate timer for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var getFrameCount;
var setFrameCount;

(function() {
    'use strict';

    var frameCount = -1;

    getFrameCount = function() {
        return frameCount;
    }

    setFrameCount = function(count) {
        frameCount = count;
    }

    function reset() {
        frameCount = -1;
    }

    afterLevelStart.push(reset);

    addUpdateFunction(function () {
        frameCount++;
    });

    afterFinish.push(async function() {
        setTimeout(function() {
            let textBox;
            if (document.getElementsByClassName("popup").length > 0) {
                textBox = document.getElementsByClassName("popup")[1].children[1].children[0].children[0];
            } else {
                textBox = document.getElementsByClassName("wrapper")[0].children[0];
            }
            textBox.appendChild(document.createElement("br"));
            textBox.appendChild(document.createTextNode(frameCount + " " + (frameCount / 60).toFixed(3)));
        }, 1000);
    });

    // Mod list
    addModToList("accurate timer");
})();
// ==UserScript==
// @name         Boxel 3d Input Recorder
// @namespace    http://tampermonkey.net/
// @version      v1.2.2
// @description  A mod that records all inputs in a run for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

var getInputs;

(function() {
    'use strict';

    var inputs = [];
    getInputs = () => {return [...inputs];}

    var aLock = false;
    var dLock = false;
    var grappleReleaseEnabled = false;

    var time = 0;
    afterLevelStart.push(function() {
        time = 0;
        inputs = [];
        aLock = false;
        dLock = false;
    });

    addUpdateFunction(function() {
        time++;

        if (app.player.controls.left == 0) {
            aLock = false;
        } else if (aLock == false) {
            inputs.push(time);
            time = 0;
            inputs.push("a");
            aLock = true;
        }

        if (app.player.controls.right == 0) {
            dLock = false;
        } else if (dLock == false) {
            inputs.push(time);
            time = 0;
            inputs.push("d");
            dLock = true;
        }
    });

    addJumpFunction(function() {
        inputs.push(time);
        time = 0;
        inputs.push("j");
    });

    addGrappleFunction(function(pos) {
        inputs.push(time);
        time = 0;
        
        let dx = pos.x - app.player.position.x;
        let dy = pos.y - app.player.position.y;
        let angle = Math.atan2(dy, dx) * 180 / Math.PI;
        inputs.push("g" + angle);
    });

    addGrappleReleaseFunction(function() {
        grappleReleaseEnabled = !grappleReleaseEnabled
        if (grappleReleaseEnabled) return;

        inputs.push(time);
        time = 0;
        inputs.push("G");
    });

    // Mod list
    addModToList("input recorder");
})();
// ==UserScript==
// @name         Boxel 3d Player Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.1.1
// @description  A library mod for player manipulations and creation in boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var createPlayer;

(function() {
    'use strict';

    createPlayer = function(isStatic=true, skinUrl="../../png/pink.png") {
        let newPlayer = app.level.entityFactory.createObject("player");
        newPlayer.setStatic(isStatic);
        newPlayer.addTexture({url: skinUrl});
        newPlayer.setPositionLib = function(pos) {
            if (!pos.x) {
                pos.x = newPlayer.position.x;
            }
            if (!pos.y) {
                pos.y = newPlayer.position.y;
            }
            if (!pos.z) {
                pos.z = newPlayer.position.z;
            }
            newPlayer.setPosition(pos);
            newPlayer.positionOrigin = pos;
        }
        newPlayer.addToGame = function(x=0, y=0, tangible=false) {
            app.level.addObject(newPlayer, app);
            if (!tangible) {
                newPlayer.body.collisionFilter.category = 0;
            }
            newPlayer.setPositionLib({x: x, y: y});
        }
        newPlayer.removeFromGame = () => {
            app.level.removeObject(newPlayer, app, true);
        };
        return newPlayer;
    }

    // Mod list
    addModToList("player manipulator");
})();
// ==UserScript==
// @name         Boxel 3d Replay Mod
// @namespace    http://tampermonkey.net/
// @version      v2.0.2
// @description  A mod that records and plays back runs in boxel 3d (position, rotation, scale, inputs)
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
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
// ==UserScript==
// @name         Boxel 3d Clean Thumbnails
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A mod that temporarily sets the player skin to pink when saving thumbnails
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

(function() {
    originalSaveThumbnail = app.storage.saveThumbnail;
    app.storage.saveThumbnail = t => {
        const s = app.player.skin.url;
        app.player.setSkin({ url: "../png/pink.png" });
        app.updateRender(0, 0);
        setTimeout(() => {
            originalSaveThumbnail(t);
            app.player.setSkin({ url: s });
        }, 2);
    };
    
    addModToList("clean thumbnails");
})();
