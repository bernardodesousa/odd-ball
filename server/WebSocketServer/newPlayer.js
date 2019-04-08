const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");
const attachEventFunctionsTo = require("./attachEventFunctionsTo.js");

const acceptedProtocol = null;

function newPlayer(connections, players, connectionRequest) {
    let connection;
    let playerId;

    console.log(connectionRequest.origin);

    connection = connectionRequest.accept(acceptedProtocol, connectionRequest.origin);
    playerId = connections.push(connection) - 1;

    players[playerId] = {coordinates: [0, 0]};

    attachEventFunctionsTo(connection, connections, players, playerId);

    broadcast(connections, {"type": "new-player", "id": playerId, "players": players});
    logPartySize(connections);
}

module.exports = newPlayer;
