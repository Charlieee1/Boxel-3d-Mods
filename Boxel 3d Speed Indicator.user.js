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
    indicator.style.left = 0;
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
