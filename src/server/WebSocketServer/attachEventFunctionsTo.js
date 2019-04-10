const processMessage = require("./processMessage.js");
const removePlayer = require("./removePlayer.js");

function attachEventFunctionsTo(connection, connections, playerId) {
    connection.on('message', datagram => {
        processMessage(connections, playerId, datagram);
    });

    connection.on('close', () => {
        removePlayer(connections, playerId);
    });
}

module.exports = attachEventFunctionsTo;
