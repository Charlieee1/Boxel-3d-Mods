// ==UserScript==
// @name         Boxel 3d Modding API
// @namespace    http://tampermonkey.net/
// @version      v1.3.1
// @description  Adding a modding API to boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
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
        player.velocity.x = vX;
        player.velocity.y = vY;

        let pos = player.position;
        player.positionPrev.x = pos.x - vX;
        player.positionPrev.y = pos.y - vY;
    }

    setVelocityX = function(vX) {
        let player = getPlayerBody();
        player.velocity.x = vX;

        let pos = player.position;
        player.positionPrev.x = pos.x - vX;
    }

    setVelocityY = function(vY) {
        let player = getPlayerBody();
        player.velocity.y = vY;

        let pos = player.position;
        player.positionPrev.y = pos.y - vY;
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
// @version      v1.0
// @description  Adding a speed indicator to boxel 3d
// @author       Charlieee1
// @match        https://www.dopplercreative.com/test/
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
// @version      v1.2
// @description  Time manipulator library for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
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

    app.player.finish = function() {
        beforeFinish.forEach((func) => func());

        // START Doppler's code
        var e = app.level.name,
            t = app.timer.toString(),
            n = app.storage.saveScore(e, t),
            s = "Finished!<br>Score: " + t;
        app.timer.render(t), n == true && (s += "<br><em>New record!</em>"), app.play = false, window.dispatchEvent(new CustomEvent("openPopup", {
            detail: {
                text: s,
                inputs: [{
                    value: "Retry",
                    type: "button",
                    callback: function() {
                        app.level.retryLevel(app), window.dispatchEvent(new CustomEvent("closePopup"))
                    }
                }, {
                    value: "Continue",
                    type: "button",
                    callback: function() {
                        app.level.exitLevel(app), window.dispatchEvent(new CustomEvent("closePopup"))
                    }
                }]
            }
        }))
        // END Doppler's code

        afterFinish.forEach((func) => func());
    }

    // Mod list
    addModToList("time manipulator");
})();
// ==UserScript==
// @name         Boxel 3d Accurate Timer
// @namespace    http://tampermonkey.net/
// @version      v1.3.2
// @description  (not so) Accurate timer for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
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
                textBox = document.getElementsByClassName("popup")[0].children[1].children[0].children[0];
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
// @version      v1.2.1
// @description  A mod that records all inputs in a run for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
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

    addModToList("input recorder");
})();
