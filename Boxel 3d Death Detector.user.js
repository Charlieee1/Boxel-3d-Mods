// ==UserScript==
// @name         Boxel 3d Death Detector
// @namespace    http://tampermonkey.net/
// @version      v1.1
// @description  A script to detect death in boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    addUpdateFunction(function() {
        if (isDead()) {
            alert(getTimer());
        }
    });

    // Mod list
    addModToList("death detector");
})();
