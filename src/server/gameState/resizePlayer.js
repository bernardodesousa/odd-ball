const { playerMinRadius, playerMaxRadius, resizeIntervalMin, resizeIntervalMax } = require("../config.js");
let randBetween = require("./randBetween.js");
let broadcast = require("../WebSocketServer/broadcast.js");

function resizePlayer(connections, id, players, resizeTimers) {
    if (resizeTimers[id]) clearInterval(resizeTimers[id]);

    players[id].radius = randBetween(playerMinRadius, playerMaxRadius);
    broadcast(connections, {
        type: "resize-player",
        id: id,
        radius: players[id].radius,
        coordinates: players[id].coordinates
    });

    resizeTimers[id] = setInterval(() => {
        resizePlayer(connections, id, players, resizeTimers)
    }, randBetween(resizeIntervalMin, resizeIntervalMax));
}

module.exports = resizePlayer;
