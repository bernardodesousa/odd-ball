const WebSocketServer = require('websocket').server;
const newPlayer = require("./newPlayer.js");

let connections = [];
let players = [];

function socketServer(HTTPServer) {
    wsServer = new WebSocketServer({
        httpServer: HTTPServer
    });

    wsServer.on('request', connectionRequest => {
        newPlayer(connections, players, connectionRequest);
    });
}

module.exports = socketServer;
