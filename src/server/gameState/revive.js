const broadcast = require("../WebSocketServer/broadcast.js");

function revive(connections, player) {
    player.alive = true;

    broadcast(connections, {
        type: "revive-player",
        id: player.id
    });
}

module.exports = revive;
