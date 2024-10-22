// ==UserScript==
// @name         Boxel 3d Input Recorder
// @namespace    http://tampermonkey.net/
// @version      1.2
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
    afterLevelRestart.push(function() {
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
