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

    GameState.addPlayer(playerId, "Mary");
    GameState.setCoordinates(playerId, [0, 0]);

    attachEventFunctionsTo(connection, connections, playerId);
    broadcast(connections, {"type": "new-player", "id": playerId, "players": GameState.getPlayers()});
    logPartySize(connections);
}

module.exports = newPlayer;
