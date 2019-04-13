const GameState = require("../gameState");
const broadcast = require("../WebSocketServer/broadcast.js");

function processShot(connections, id) {
    if (GameState.evaluateShot(connections, GameState.getPlayers(), id)) {
        broadcast(connections, {
            "type": "update-score",
            "players": GameState.getPlayers()
        });
    }
}

module.exports = processShot;
