// ==UserScript==
// @name         Boxel 3d Accurate Timer
// @namespace    http://tampermonkey.net/
// @version      v1.3.3
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
