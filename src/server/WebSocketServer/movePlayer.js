const broadcast = require('./broadcast.js');

function movePlayer(connections, players, playerId, input) {
    players[playerId].coordinates = input.coordinates;

    let output = {
        id: playerId,
        type: "move-player",
        coordinates: input.coordinates
    }

    broadcast(connections, output);
}

module.exports = movePlayer;
