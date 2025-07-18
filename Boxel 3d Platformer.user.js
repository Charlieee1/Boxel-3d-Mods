// ==UserScript==
// @name         Boxel 3d Platformer
// @namespace    http://tampermonkey.net/
// @version      v2.2
// @description  Adding platformer physics to boxel 3d
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var left = 0;
var right = 0;

(function() {
    'use strict';

    window.addEventListener("keydown", function(e) {
        if (e.key == "a" || e.key == "ArrowLeft") {
            left = -1;
        } else if (e.key == "d" || e.key == "ArrowRight") {
            right = 1;
        }
        //app.player.frictionOrigin = .2;
    });

    window.addEventListener("keyup", function(e) {
        if (e.key == "a" || e.key == "ArrowLeft") {
            left = 0;
        } else if (e.key == "d" || e.key == "ArrowRight") {
            right = 0;
        }
    });

    function dot(v1, v2) {
        return v1.x * v2.x + v1.y * v2.y;
    }

    addUpdateFunction(function() {
        let velocity = getVelocity();
        let gravity = getGravity();
        let direction = {x: gravity.y, y: -gravity.x};
        let vX = dot(direction, velocity);
        let dx = 0;
        let force = .5 * (left + right);
        if (force > 0) {
            dx = Math.max(vX, Math.min(vX + force, 4)) - vX;
        } else {
            dx = Math.min(vX, Math.max(vX + force, -4)) - vX;
        }
        let d = {x: dx * direction.x, y: dx * direction.y};
        addVelocity(d.x, d.y);
    });

    // Mod list
    addModToList("platformer");
})();
