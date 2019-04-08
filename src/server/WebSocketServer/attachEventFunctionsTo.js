const processMessage = require("./processMessage.js");
const removePlayer = require("./removePlayer.js");

function attachEventFunctionsTo(connection, connections, players, playerId) {
    connection.on('message', datagram => {
        processMessage(connections, players, playerId, datagram)
    });

    connection.on('close', () => {
        removePlayer(connections, players, playerId)
    });
}

module.exports = attachEventFunctionsTo;
