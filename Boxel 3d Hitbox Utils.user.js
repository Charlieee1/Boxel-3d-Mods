// ==UserScript==
// @name         Boxel 3d Hitbox utils
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A library to manage the visibility of hitboxes for boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var showHitboxes;
var showLevel;

(function() {
    'use strict';

    showHitboxes = function(show=true) {
        app.level.traverse((obj) => {
            if (obj.helper) {
                obj.helper.visible = show;
            }
        });
    }

    showLevel = function(show=true) {
        app.level.traverse((obj) => {
            if (obj.helper) {
                obj.visible = show;
            }
        });
    }

    // Mod list
    addModToList("hitbox utils");
})();
