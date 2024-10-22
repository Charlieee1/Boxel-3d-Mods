// ==UserScript==
// @name         Boxel 3d Savestate Mod
// @namespace    http://tampermonkey.net/
// @version      b2.0
// @description  A mod that allows for retrieving and setting savestates
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var getSaveState;
var setSaveState;

(function() {
    'use strict';

    getSaveState = function() {
        let savestate = {};
        savestate.objects = {};
        savestate.tips = {};
        let children = app.level.children;
        for (let i = 0; i < children.length; i++) {
            if (!children[i].isStatic()) {
                savestate.objects[i] = {
                    position: {x: children[i].position.x, y: children[i].position.y},
                    rotation: children[i].rotation.z,
                    scale: {x: children[i].scale.x, y: children[i].scale.y, z: children[i].scale.z},
                    velocity: children[i].getVelocity(),
                    angularVelocity: children[i].body.angularVelocity
                };
            }
            if (children[i].body.class == "tip") {
                if (!children[i].visible) {
                    savestate.tips[i] = false;
                }
            }
        }
        savestate.gravity = {
            x: app.engine.world.gravity.x,
            y: app.engine.world.gravity.y
        };
        savestate.camera = app.camera.rotation.z;
        savestate.player = {
            mode: app.player.mode,
            force: app.player.force,
            allowJump: app.player.allowJump
        };
        if (app.player.checkpoint) {
            savestate.player.checkpoint = {
                x: app.player.checkpoint.x,
                y: app.player.checkpoint.y
            };
        }
        savestate.time = app.timer.getPlayTime();

        return savestate;
    }

    setSaveState = function(savestate) {
        if (typeof savestate == "string") {
            savestate = JSON.parse(savestate);
        } else {
            savestate = JSON.parse(JSON.stringify(savestate));
        }
        pause();

        Object.keys(savestate.objects).forEach((key) => {
            key = Number(key);

            let saved = savestate.objects[key];
            let original = app.level.children[key];
            original.positionOrigin.x = saved.position.x;
            original.positionOrigin.y = saved.position.y;
            original.rotationOrigin = saved.rotation;
            original.scaleOrigin = saved.scale;
        });
        //app.player.setMode("control");

        resume();
        app.level.resetLevel();
        pause();

        Object.keys(savestate.objects).forEach((key) => {
            key = Number(key);

            let saved = savestate.objects[key];
            let original = app.level.children[key];
            original.body.positionPrev.x = saved.position.x - saved.velocity.x;
            original.body.positionPrev.y = -saved.position.y - saved.velocity.y;
            original.body.anglePrev = -saved.rotation - saved.angularVelocity;
        });
        Object.keys(savestate.tips).forEach((key) => {
            key = Number(key);
            app.level.children[key].hide();
        });

        app.engine.world.gravity.x = savestate.gravity.x;
        app.engine.world.gravity.y = savestate.gravity.y;
        app.camera.rotation.z = savestate.camera;
        app.player.force = savestate.player.force;
        app.player.allowJump = savestate.player.allowJump;
        if (savestate.player.checkpoint) {
            app.player.checkpoint = savestate.player.checkpoint;
        }
        setTime(savestate.time / 1e3);

        resume();
        app.player.body.veloctiy = savestate.objects[0].velocity;
        //nextFrame(()=>app.player.setMode(savestate.player.mode));
    }

    // Requires UI Mod
    try {
        addUIButton("Get savestate", function(event) {
            navigator.clipboard.writeText(JSON.stringify(getSaveState()));
            alert("Savestate copied to clipboard!");
        });

        //addUIButton("Set savestate", function(event) {
        //    setSaveState(JSON.parse(prompt("Enter savestate:")));
        //});
    } catch {}

    addModToList("savestate");
})();
