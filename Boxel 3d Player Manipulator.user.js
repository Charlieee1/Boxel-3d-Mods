// ==UserScript==
// @name         Boxel 3d Player Manipulator
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  A library mod for player manipulations and creation in boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var createPlayer;

(function() {
    'use strict';

    createPlayer = function(isStatic=true) {
        let newPlayer = app.level.entityFactory.createObject("player");
        newPlayer.setStatic(isStatic);
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
            if (!tangible) {
                newPlayer.setPositionLib({z: -1});
            }
            app.level.addObject(newPlayer, app);
            newPlayer.setPositionLib({x: x, y: y});
        }
        return newPlayer;
    }

    // Mod list
    addModToList("player manipulator");
})();
