const broadcast = require('./broadcast.js');
const GameState = require("../gameState");

function movePlayer(connections, playerId, input) {
    GameState.setCoordinates(playerId, input.coordinates);

    let output = {
        id: playerId,
        type: "move-player",
        coordinates: input.coordinates
    }

    broadcast(connections, output);
}

module.exports = movePlayer;
