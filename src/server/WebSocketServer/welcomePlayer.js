const arenaSize = require("../config.js").arenaSize;
const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");
const attachEventFunctionsTo = require("./attachEventFunctionsTo.js");
const GameState = require("../gameState");

const acceptedProtocol = null;

function welcomePlayer(connections, connectionRequest) {
    let connection;
    let playerId;
    let playerName;

    connection = connectionRequest.accept(acceptedProtocol, connectionRequest.origin);
    playerId = connections.push(connection) - 1;

    playerName = GameState.addPlayer(connections, playerId);
    GameState.setCoordinates(playerId, [0.5, 0.5]);

    attachEventFunctionsTo(connections, playerId);

    connection.send(JSON.stringify({
        "type": "welcome",
        "id": playerId,
        "players": GameState.getPlayers(),
        "arenaSize": arenaSize
    }));

    broadcast(connections, {"type": "new-player", "player": GameState.getPlayer(playerId)});

    console.log("Welcome, " + playerName + " from " + connectionRequest.remoteAddress);
    logPartySize(connections);
}

module.exports = welcomePlayer;
