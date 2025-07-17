// ==UserScript==
// @name         Boxel 3d Dash
// @namespace    http://tampermonkey.net/
// @version      v2.21
// @description  An extension to platforming that allows for dashing
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var canDash = true;
    var DASH_SPEED = 10;

    window.addEventListener("keydown", function(e) {
        if (canDash && (e.key == "s" || e.key == "ArrowDown")) {
            if (-left && right) {
                return;
            }
            if (-left) {
                setVelocity(-DASH_SPEED, 0);
                canDash = false;
            } else if (right) {
                setVelocity(DASH_SPEED, 0);
                canDash = false;
            }
        }
    });

    addUpdateFunction(function() {
        if (canJump()) {
            canDash = true;
        }
    });

    // Mod list
    addModToList("dash");
})();
