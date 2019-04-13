const WebSocketServer = require('websocket').server;
const welcomePlayer = require("./welcomePlayer.js");

let connections = [];

function socketServer(HTTPServer) {
    wsServer = new WebSocketServer({
        httpServer: HTTPServer
    });

    wsServer.on('request', connectionRequest => {
        welcomePlayer(connections, connectionRequest);
    });
}

module.exports = socketServer;
