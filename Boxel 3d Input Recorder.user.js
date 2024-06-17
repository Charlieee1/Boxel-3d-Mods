// ==UserScript==
// @name         Boxel 3d Input Recorder
// @namespace    http://tampermonkey.net/
// @version      1.0
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
    getInputs = () => {return inputs;}

    var time = 0;
    afterLevelStart.push(function() {
        time = 0;
        inputs = [];
    });

    addUpdateFunction(function() {
        time++;

        if (app.player.controls.left != 0) {
            inputs.push(time);
            time = 0;
            inputs.push("a");
        } else if (app.player.controls.right != 0) {
            inputs.push(time);
            time = 0;
            inputs.push("d");
        }
    });

    addJumpFunction(function() {
        inputs.push(time);
        time = 0;
        inputs.push("j");
    });

    addModToList("input recorder");
})();
