// ==UserScript==
// @name         Boxel 3d Dash
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  An extension to platforming that allows for dashing
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var canDash = true;
    var DASH_SPEED = 10;

    window.addEventListener("keydown", function(e) {
        if (app.player.mode == "control" && canDash && (e.key == "s" || e.key == "ArrowDown" || e.key == "x")) {
            if (-app.player.controls.left && app.player.controls.right) {
                return;
            }

            let velocity = getVelocity();
            let gravity = getGravity();
            let direction = {x: gravity.y, y: -gravity.x};
			let dashDir;

            if (-app.player.controls.left) {
                dashDir = -DASH_SPEED;
                canDash = false;
            } else if (app.player.controls.right) {
				dashDir = DASH_SPEED;
                canDash = false;
            } else {
                let v = getVelocity().x * direction.x
                        + getVelocity().y * direction.y;
				canDash = false;
                if (v > 0) {
					dashDir = DASH_SPEED;
				} else if (v < 0) {
					dashDir = -DASH_SPEED;
				} else {
					canDash = true;
					return;
				}
            }

            let d = {x: dashDir * direction.x, y: dashDir * direction.y};
			setVelocity(d.x, d.y);
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
