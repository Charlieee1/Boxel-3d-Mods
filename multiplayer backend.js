// Print IP address
const os = require("os");
const networkInterfaces = os.networkInterfaces();
let ipAddress = "";
for (let interface in networkInterfaces) {
    for (let address of networkInterfaces[interface]) {
        if (address.family === "IPv4" && !address.internal) {
            ipAddress = address.address;
            break;
        }
    }
}
console.log(`IP address of server: ${ipAddress}`);

// Web socket
const { WebSocketServer } = require("ws");
const sockserver = new WebSocketServer({ port: 443 });

var nextID = 0;

var playerPos = {};

// Self explanatory
function sendDataToEachClient(data) {
	console.log(`Distributing message: ${data}`);
	sockserver.clients.forEach(client => {
		client.send(`${data}`);
	});
}
function sendPosToEachClient(data, id) {
	console.log(`Distributing position: ${data}`);
	sockserver.clients.forEach(client => {
		if (client.id != id) {
			client.send(`${data}`);
		}
	});
}

sockserver.on("connection", async ws => {
	ws.id = nextID++;
	console.log(`New client connected! Id: ${ws.id}`);
	ws.send("id " + ws.id);
	ws.send("player_pos " + JSON.stringify(playerPos));
	sendPosToEachClient("new_player " + ws.id, ws.id);
	ws.on("close", () => {
		console.log(`Client has disconnected! ID: ${ws.id}`);
		delete playerPos[ws.id];
		sendDataToEachClient(`disconnect ${ws.id}`);
	});
	ws.onerror = () => {
		console.log("websocket error");
		delete playerPos[ws.id];
		sendDataToEachClient(`disconnect ${ws.id}`);
	}
    ws.on("message", message => {
		message = JSON.parse(message);
		playerPos[ws.id] = message;
		sendPosToEachClient(message, ws.id);
	});
});
