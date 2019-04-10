const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");
const attachEventFunctionsTo = require("./attachEventFunctionsTo.js");
const GameState = require("../gameState");

const acceptedProtocol = null;

function newPlayer(connections, connectionRequest) {
    let connection;
    let playerId;

    console.log(connectionRequest.origin);

    connection = connectionRequest.accept(acceptedProtocol, connectionRequest.origin);
    playerId = connections.push(connection) - 1;

    console.log(playerId);

    GameState.addPlayer(playerId, "Mary");
    GameState.setCoordinates(playerId, [0, 0]);

    attachEventFunctionsTo(connection, connections, playerId);
    
    connection.send(JSON.stringify({"type": "welcome", "id": playerId, "players": GameState.getPlayers()}));
    broadcast(connections, {"type": "new-player", "player": GameState.getPlayer(playerId)});
    logPartySize(connections);
}

module.exports = newPlayer;
