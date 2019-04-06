const WebSocketServer = require('websocket').server;

let connections = [];
let players = [];

function broadcast(connections, msg){    
    for (let i=0; i<connections.length; i++) {
        connections[i].send(JSON.stringify(msg));
    }
}

function socketServer(httpServer) {
    wsServer = new WebSocketServer({
        httpServer: httpServer
    });

    wsServer.on('request', request => {
        console.log((new Date()) + ' Connection from origin ' + request.origin);
        
        let instruction = {};

        let connection = request.accept(null, request.origin);
        let index = connections.push(connection) - 1;
        players[index] = {coordinates: [0, 0]};

        broadcast(connections, {"type": "new-player", "id": index, "players": players});

        console.log(`${connections.length} connections.`);

        connection.on('message', msg => {
            if (msg.type === 'utf8') {
                instruction = JSON.parse(msg.utf8Data);

                switch (instruction.type) {
                    case "pointer-enter":
                        broadcast(connections, {type: "enter-player", id: index});
                    case "pointer-exit":
                        // console.log("exit");
                    case "pointer-coordinates":
                        // console.log(instruction.coordinates);
                        players[index].coordinates = instruction.coordinates;
                        broadcast(connections, {type: "move-player", id: index, coordinates: instruction.coordinates});
                    default:
                }
            }
        });

        connection.on('close', (code, description) => {
            console.log(code, description);
            connections.splice(index, 1);
            players.splice(index, 1);
            broadcast(connections, {type: "player-left", id: index});
            console.log(`${connections.length} connections.`);
        });
    });
}

module.exports = socketServer;
