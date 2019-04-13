const GameState = require("../gameState");
const broadcast = require("../WebSocketServer/broadcast.js");

function updateName(connections, id, name) {
    GameState.setName(id, name);
    broadcast(connections, {
        "type": "update-name",
        "id": id,
        "name": name
    });
}

module.exports = updateName;
