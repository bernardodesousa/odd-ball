const WebSocketServer = require('websocket').server;
const newPlayer = require("./newPlayer.js");

let connections = [];

function socketServer(HTTPServer) {
    wsServer = new WebSocketServer({
        httpServer: HTTPServer
    });

    wsServer.on('request', connectionRequest => {
        newPlayer(connections, connectionRequest);
    });
}

module.exports = socketServer;
