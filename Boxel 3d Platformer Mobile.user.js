// ==UserScript==
// @name         Boxel 3d Platformer Mobile
// @namespace    http://tampermonkey.net/
// @version      v2.2
// @description  Adding platformer physics to boxel 3d (for mobile!)
// @author       Charlieee1
// @match        https://www.dopplercreative.com/test/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

	let appElement = document.getElementById("app");

    var left = 0;
    var right = 0;

    app.engine.events.afterUpdate = [function() {
        let velocity = app.player.body.velocity;
        let vX = velocity.x;
        let dx = 0;
        let force = .5 * (left + right);
        if (force > 0) {
            dx = vX - Math.max(vX, Math.min(vX + force, 4));
        } else {
            dx = vX - Math.min(vX, Math.max(vX + force, -4));
        }
        app.player.body.positionPrev.x += dx;
        app.player.body.velocity.x -= dx;
    }];

    // Watermark
    let watermark = document.createElement("div");
    let text = document.createTextNode("platformer");
    watermark.appendChild(text);
    watermark.style.position = "absolute";
    watermark.style.bottom = 0;
    watermark.style.right = 0;
    watermark.style.paddingRight = 0;
    watermark.style.paddingBottom = 0;
    watermark.style.opactiy = "10%";
    watermark.style.fontSize = "5px";
    appElement.appendChild(watermark);

	// Buttons styling
	let leftButton = document.createElement("button");
	let rightButton = document.createElement("button");
	[leftButton, rightButton].forEach((btn) => {
		btn.style.position = "absolute";
		btn.style.bottom = "0px";
		btn.style.left = 0;
		btn.style.marginLeft = "0px";
		btn.style.marginBottom = "0px";
		btn.style.width = "80px";
		btn.style.height = "80px";
        btn.style.backgroundColor = "white";
        btn.style.opacity = "50%";
	});
	rightButton.style.marginLeft = "80px";

	// Buttons functionality
	leftButton.addEventListener("pointerdown", (e) => {
		left = -1;
        leftButton.style.backgroundColor = "grey";
        e.preventDefault();
	}, false);
	rightButton.addEventListener("pointerdown", (e) => {
		right = 1;
        rightButton.style.backgroundColor = "grey";
        e.preventDedault();
	}, false);
	leftButton.addEventListener("pointerup", (e) => {
		left = 0;
        leftButton.style.backgroundColor = "white";
        e.preventDefault();
	}, false);
	rightButton.addEventListener("pointerup", (e) => {
		right = 0;
        rightButton.style.backgroundColor = "white";
        e.preventDefault();
	}, false);

	// Adding buttons to screen
	appElement.appendChild(leftButton);
	appElement.appendChild(rightButton);
})();
