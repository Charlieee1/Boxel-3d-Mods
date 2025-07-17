// ==UserScript==
// @name         Boxel 3d Multiplayer
// @namespace    http://tampermonkey.net/
// @version      v1.0
// @description  Boxel 3d Multiplayer. How much more of a description do you want?
// @author       Charlieee1
// @match        *charlieee1.github.io/Boxel-3d-Mods/boxel-3d/v1/index.html*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const ipAddress = prompt("Enter the ip of the server");
    console.log(ipAddress);
    let newElement = document.createElement("div");
    newElement.onclick = function() {
        const webSocket = new WebSocket('ws://'+ipAddress+':443/');
    }
    appElement.appendChild(newElement);
    newElement.click();
    var id;
    var playerPos;
    var activePlayers = {};
    var inactivePlayers = [];

    function newPlayer(newId) {
        if (inactivePlayers.length == 0) {
            activePlayers[newId] = createPlayer();
        } else {
            activePlayers[newId] = inactivePlayers.pop(0);
        }
        activePlayers[newId].addToGame();
        activePlayers[newId].visible = true;
    }

    webSocket.onmessage = (event) => {
        let message = event.data.split(" ");;
        if (message[0] == "id") {
            id = Number(message.split(" ")[1]);
            console.log(id);
        } else if (message[0] == "player_pos") {
            playerPos = JSON.parse(message.split(" ")[1]);
            Object.keys(playerPos).forEach((player) => {
                newPlayer(player);
            });
        } else if (message[0] == "new_player") {
            newPlayer(Number(message[1]));
        } else if (message[0] == "disconnect") {
            let disconnectedPlayer = Number(message[1]);
            inactivePlayers.push(activePlayers[disconnectedPlayer]);
            activePlayers[disconnectedPlayer].visible = false;
            delete activePlayers[disconnectedPlayer];
        } else {
            playerPos[Number(message[0])] = JSON.parse(message[1]);
        }
    };

    addUpdateFunction(function() {
        // Update fake players
        Object.keys(playerPos).forEach((playerId) => {
            let pos = playerPos[playerId];
            let player = activePlayers[playerId];
            player.setPositionLib(pos.position);
        });

        // Send player position to server
        let pos = {};
        pos.position = getPlayer().position;
    });

    // Mod list
    addModToList("multiplayer");
})();
