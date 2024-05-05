// ==UserScript==
// @name         Boxel 3d Accurate Timer
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  Accurate for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var frameCount = 0;

    function reset() {
        frameCount = 0;
    }

    afterLevelStart.push(reset);
    afterLevelRestart.push(reset);

    addUpdateFunction(function () {
        frameCount++;
    });

    afterFinish.push(async function() {
        setTimeout(function() {
            //let startTime = Date.now();
            //while (document.getElementsByClassName("popup").length == 0 && Date.now() - startTime <= 5e3) {}
            let textBox = document.getElementsByClassName("popup")[0].children[1].children[0].children[0];
            textBox.appendChild(document.createElement("br"));
            textBox.appendChild(document.createTextNode(frameCount + " " + (frameCount / 60).toFixed(3)));
        }, 1000);
    });

    // Mod list
    addModToList("accurate timer");
})();
