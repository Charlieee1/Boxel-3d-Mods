// ==UserScript==
// @name         Boxel 3d Player Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.1.1
// @description  A library mod for player manipulations and creation in boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/boxel-3d/play/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var createPlayer;

(function() {
    'use strict';

    createPlayer = function(isStatic=true, skinUrl="../../png/pink.png") {
        let newPlayer = app.level.entityFactory.createObject("player");
        newPlayer.setStatic(isStatic);
        newPlayer.addTexture({url: skinUrl});
        newPlayer.setPositionLib = function(pos) {
            if (!pos.x) {
                pos.x = newPlayer.position.x;
            }
            if (!pos.y) {
                pos.y = newPlayer.position.y;
            }
            if (!pos.z) {
                pos.z = newPlayer.position.z;
            }
            newPlayer.setPosition(pos);
            newPlayer.positionOrigin = pos;
        }
        newPlayer.addToGame = function(x=0, y=0, tangible=false) {
            app.level.addObject(newPlayer, app);
            if (!tangible) {
                newPlayer.body.collisionFilter.category = 0;
            }
            newPlayer.setPositionLib({x: x, y: y});
        }
        newPlayer.removeFromGame = () => {
            app.level.removeObject(newPlayer, app, true);
        };
        return newPlayer;
    }

    // Mod list
    addModToList("player manipulator");
})();
