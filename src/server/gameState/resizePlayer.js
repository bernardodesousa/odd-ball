let randBetween = require("./randBetween.js");
let broadcast = require("../WebSocketServer/broadcast.js");

function resizePlayer(connections, id, players, timers) {
    if (timers[id]) clearInterval(timers[id]);

    players[id].radius = randBetween(2, 30);
    broadcast(connections, {
        type: "resize-player",
        id: id,
        radius: players[id].radius,
        coordinates: players[id].coordinates
    });

    timers[id] = setInterval(() => {
        resizePlayer(connections, id, players, timers)
    }, randBetween(8000, 10000));
}

module.exports = resizePlayer;
