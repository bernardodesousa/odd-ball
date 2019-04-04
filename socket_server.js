const WebSocketServer = require('websocket').server;

let players = [];

function broadcast(players, msg){
    for (let i=0; i<players.length; i++) {
        players[i].send(msg);
    }
}

function socketServer(httpServer) {
    wsServer = new WebSocketServer({
        httpServer: httpServer
    });

    wsServer.on('request', request => {
        console.log((new Date()) + ' Connection from origin ' + request.origin);

        let connection = request.accept(null, request.origin);
        let index = players.push(connection) - 1;
        let instruction = {};

        console.log(`${players.length} players online.`);

        connection.on('message', msg => {
            if (msg.type === 'utf8') {
                instruction = JSON.parse(msg.utf8Data);
                
                switch (instruction.type) {
                    case "pointer-enter":
                        broadcast(players, JSON.stringify({type: "enter-player", id: index}));
                    case "pointer-exit":
                        // console.log("exit");
                    case "pointer-coordinates":
                        // console.log(instruction.coordinates);
                        broadcast(players, JSON.stringify({type: "move-player", id: index, coordinates: instruction.coordinates}));
                    default:
                }
            }
        });

        connection.on('close', connection => {
            players.splice(index, 1);
            console.log(`${players.length} players online.`);
        });
    });
}

module.exports = socketServer;
