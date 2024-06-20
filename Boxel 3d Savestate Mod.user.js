// ==UserScript==
// @name         Boxel 3d Savestate Mod
// @namespace    http://tampermonkey.net/
// @version      alpha 1.0
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
        }
        savestate.gravity = {
            x: app.engine.world.gravity.x,
            y: app.engine.world.gravity.y
        };

        return savestate;
    }

    setSaveState = function(savestate) {
        pause();

        // TODO

        resume();
    }

    addModToList("savestate");
})();