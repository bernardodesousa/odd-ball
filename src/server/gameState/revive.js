const broadcast = require("../WebSocketServer/broadcast.js");

function revive(connections, player) {
    console.log("REVIVE!", player);
    player.alive = true;

    broadcast(connections, {
        type: "revive-player",
        id: player.id
    });

    console.log("REVIVE!", player);
}

module.exports = revive;
