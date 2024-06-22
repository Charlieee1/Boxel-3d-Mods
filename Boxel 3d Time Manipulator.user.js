// ==UserScript==
// @name         Boxel 3d Time Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.1
// @description  Time manipulator library for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var beforeLevelStart = [];
var afterLevelStart = [];
var beforeLevelRestart = [];
var afterLevelRestart = [];
var beforeFinish = [];
var afterFinish = [];
var beforeCheckpointRespawn = [];
var afterCheckpointRespawn = [];

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

    app.playLevel = function() {
        beforeLevelStart.forEach((func) => func());
        beforeLevelRestart.forEach((func) => func());

        // START Doppler's code
        app.play = true, app.timer.start()
        // END Doppler's code

        afterLevelStart.forEach((func) => func());
        afterLevelRestart.forEach((func) => func());
    }

    app.level.retryLevel = function(e = app, t = false) {
        if (t == false) beforeLevelRestart.forEach((func) => func());

        // START Doppler's code
        e.updateGravity(), e.play = true, e.level.removeParticles(e), e.player.cancelRestart(), e.resetScene(e), window.dispatchEvent(new CustomEvent("closePopup")), t == false || e.player.checkpoint == null ? (e.timer.reset(), e.player.removeCheckpoint()) : e.player.respawn(true)
        // END Doppler's code

        if (t == false) afterLevelRestart.forEach((func) => func());
    }

    app.player.restart = function() {
        beforeCheckpointRespawn.forEach((func) => func());

        // START Doppler's code
        app.level.retryLevel(app, true);
        // END Doppler's code

        afterCheckpointRespawn.forEach((func) => func());
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
