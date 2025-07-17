// ==UserScript==
// @name         Boxel 3d Time Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.2.1
// @description  Time manipulator library for boxel 3d
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
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
