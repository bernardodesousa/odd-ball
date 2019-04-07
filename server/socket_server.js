const WebSocketServer = require('websocket').server;

let connections = [];
let players = [];

function broadcast(connections, msg){    
    for (let i=0; i<connections.length; i++) {
        if (connections[i]){
            connections[i].send(JSON.stringify(msg));
        }
    }
}

function countPlayers() {
    let total = 0;
    connections.forEach(c => {
        if (c) total++;
    });

    return total;
}

function logger(){
    let n = countPlayers();
    if (n > 1) console.log(`${n} players`);
    else if (n === 1) console.log(`1 player`);
    else console.log(`No players`);
}

function socketServer(httpServer) {
    wsServer = new WebSocketServer({
        httpServer: httpServer
    });

    wsServer.on('request', request => {
        console.log(request.origin);

        let instruction = {};

        let connection = request.accept(null, request.origin);
        let index = connections.push(connection) - 1;
        players[index] = {coordinates: [0, 0]};

        broadcast(connections, {"type": "new-player", "id": index, "players": players});

        logger();

        connection.on('message', msg => {
            if (msg.type === 'utf8') {
                instruction = JSON.parse(msg.utf8Data);

                switch (instruction.type) {
                    case "pointer-enter":
                        broadcast(connections, {type: "enter-player", id: index});
                        break;
                    case "pointer-coordinates":
                        players[index].coordinates = instruction.coordinates;
                        broadcast(connections, {type: "move-player", id: index, coordinates: instruction.coordinates});
                        break;
                    case "shot":
                        console.log(instruction.coordinates);
                        break;
                    default:
                }
            }
        });

        connection.on('close', () => {
            connections[index] = undefined;
            players[index] = undefined;
            broadcast(connections, {type: "player-left", id: index});
            logger();
        });
    });

    logger();
}

module.exports = socketServer;
