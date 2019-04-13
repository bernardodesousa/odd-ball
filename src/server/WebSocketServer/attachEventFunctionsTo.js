const processDatagram = require("./processDatagram.js");
const removePlayer = require("./removePlayer.js");

function attachEventFunctionsTo(connections, playerId) {
    connections[playerId].on('message', datagram => {
        processDatagram(connections, playerId, datagram);
    });

    connections[playerId].on('close', () => {
        removePlayer(connections, playerId);
    });
}

module.exports = attachEventFunctionsTo;
