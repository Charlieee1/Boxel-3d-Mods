// ==UserScript==
// @name         Boxel 3d Celeste Dash
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A mod that rebinds jumping to "c" and allows pressing "x" to dash in any of the 8 directions in platformer mode
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.com
// @grant        none
// ==/UserScript==

// You are allowed to change this
const keybinds = {
    up: "arrowup",
    down: "arrowdown",
    left: "arrowleft",
    right: "arrowright",
    jump: "c",
    respawn: "g",
    dash: "x",
};
// You are not allowed to change this
const settings = {
    up: 8,
    down: 4,
    x: 6,
};

(function() {
    app.player.controls.up = 0;
    app.player.controls.down = 0;
    app.player.jumpReady2 = false;
    app.player.dashReady = false;
    app.player.controls.dash = false;
    app.player.controls.dashLock = false;
    app.player.controls.jumpLock = false;

    const originalJump = app.player.jump;
    app.player.jump = () => {
        if (app.player.mode != "control")
            originalJump();
    };
    const fancyJump = () => {
        if (app.player.isFrozen()) return;
        app.player.dashReady |= app.player.jumpReady;
        app.player.jumpReady = app.player.jumpReady2;
        originalJump();
        app.player.jumpReady2 = false;
        app.player.jumpReady = false;
    }
    const originalPlayerRestart = app.player.restart;
    app.player.restart = () => {
        if (app.player.mode != "control" || app.player.isFrozen())
            originalPlayerRestart();
    };

    window.addEventListener("keydown", e => {
        if (app.player.mode != "control") return;
        const k = e.key.toLowerCase();
        if (k == keybinds.up) {
            app.player.controls.up = -settings.up;
        } else if (k == keybinds.down) {
            app.player.controls.down = settings.down;
        } else if (k == keybinds.left) {
            app.player.controls.left = -1;
        } else if (k == keybinds.right) {
            app.player.controls.right = 1;
        } else if (k == keybinds.jump) {
            fancyJump();
        } else if (k == keybinds.respawn) {
            originalPlayerRestart();
        } else if (k == keybinds.dash) {
            if (!app.player.controls.dashLock && app.player.dashReady) {
                app.player.controls.dash = true;
                app.player.controls.dashLock = true;
                app.player.dashReady = false;
            }
        }
    });
    window.addEventListener("keyup", e => {
        const k = e.key.toLowerCase();
        if (k == keybinds.up) {
            app.player.controls.up = 0;
        } else if (k == keybinds.down) {
            app.player.controls.down = -0;
        } else if (k == keybinds.left) {
            app.player.controls.left = -0;
        } else if (k == keybinds.right) {
            app.player.controls.right = 0;
        } else if (k == keybinds.dash) {
            app.player.controls.dashLock = false;
        }
    });

    addUpdateFunction(() => {
        if (app.player.mode != "control") return;
        if (app.player.jumpReady) {
            app.player.jumpReady = false;
            app.player.jumpReady2 = true;
            app.player.dashReady = true;
        }
        if (app.player.controls.dash) {
            let dashVelocity = {
                x: settings.x * (app.player.controls.left + app.player.controls.right),
                y: (app.player.controls.up + app.player.controls.down)
            };
            Matter.Body.setVelocity(app.player.body, {
                x: app.engine.gravity.y * dashVelocity.x + app.engine.gravity.x * dashVelocity.y,
                y: app.engine.gravity.y * dashVelocity.y - app.engine.gravity.x * dashVelocity.x
            });
            app.player.controls.dash = false;
        }
    });

    // Mod List
    addModToList("celeste");
})();
