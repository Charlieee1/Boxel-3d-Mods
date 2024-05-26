// ==UserScript==
// @name         Boxel 3d Modding API
// @namespace    http://tampermonkey.net/
// @version      v1.1
// @description  Adding a modding API to boxel 3d
// @author       Charlieee1
// @match        *dopplercreative.com/test/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

var addUpdateFunction;
var removeUpdateFunction;
var addJumpFunction;
var removeJumpFunction;
var getPlayer = () => {return app.player};
var getPlayerBody = () => {return app.player.body};
var getPlayerSpeed = () => {return getPlayerBody().speed};
var isDead = app.player.isFrozen();
var canJump = () => {return app.player.allowJump};
var getLevel = () => {return app.level};
var getEngine = () => {return app.engine};
var getWorld = () => {return app.engine.world};
var getGravity = () => {return app.engine.world.gravity};
var getTimer = () => {return app.timer.toString()};
var getVelocity = () => {return app.player.body.velocity};
var setVelocity;
var setVelocityX;
var setVelocityY;
var addVelocity;
var appElement = document.getElementById("app");
var addModToList;

(function() {
    'use strict';

    app.engine.events.afterUpdate = [];

    addUpdateFunction = function(func) {
        app.engine.events.afterUpdate.push(func);
    }

    removeUpdateFunction = function(func) {
        if (func in app.engine.events.afterUpdate) {
            app.engine.events.afterUpdate.splice(app.engine.events.afterUpdate.indexOf(func), 1);
        }
    }

    var jumpFunctions = [];
    app.player.actualJump = app.player.jump;
    app.player.jump = function() {
        app.player.actualJump();
        jumpFunctions.forEach((func)=>{func();});
    }

    addJumpFunction = function(func) {
        jumpFunctions.push(func);
    }

    removeJumpFunction = function(func) {
        if (func in jumpFunctions) {
            jumpFunctions.splice(jumpFunctions.indexOf(func), 1);
        }
    }

    setVelocity = function(vX, vY) {
        let player = getPlayerBody();
        player.velocity.x = vX;
        player.velocity.y = vY;

        let pos = player.position;
        player.positionPrev.x = pos.x - vX;
        player.positionPrev.y = pos.y - vY;
    }

    setVelocityX = function(vX) {
        let player = getPlayerBody();
        player.velocity.x = vX;

        let pos = player.position;
        player.positionPrev.x = pos.x - vX;
    }

    setVelocityY = function(vY) {
        let player = getPlayerBody();
        player.velocity.y = vY;

        let pos = player.position;
        player.positionPrev.y = pos.y - vY;
    }

    addVelocity = function(dx, dy) {
        let v = getVelocity();
        if (dy == 0) {
            setVelocityX(v.x + dx);
        } else if (dx == 0) {
            setVelocityY(v.y + dy);
        } else {
            setVelocity(v.x + dx, v.y + dy);
        }
    }

    // Mod list
    var modList = document.createElement("div");
    modList.style.position = "absolute";
    modList.style.bottom = 0;
    modList.style.right = 0;
    modList.style.paddingRight = 0;
    modList.style.paddingBottom = 0;
    modList.style.opactiy = "10%";
    modList.style.fontSize = "5px";
    appElement.appendChild(modList);

    // Convention is to have the first letter of the mod name lowercase
    addModToList = function(text) {
        let newP = document.createElement("p");
        newP.style.margin = 0;
        newP.appendChild(document.createTextNode(text));
        modList.appendChild(newP);
    }

    addModToList("modding API");
})();
