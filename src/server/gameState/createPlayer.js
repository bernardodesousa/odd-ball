const randBetween = require("./randBetween.js");
const resizePlayer = require("./resizePlayer.js");
const config = require("../config.js");

function createPlayer(connections, id, players, resizeTimers) {
    resizeTimers[id] = setInterval(() => {
        resizePlayer(connections, id, players, resizeTimers)
    }, randBetween(config.resizeIntervalMin, config.resizeIntervalMax));

    let player = {
        id: id,
        name: config.names[players.length],
        coordinates: config.initialCoordinates,
        radius: randBetween(config.playerMinRadius, config.playerMaxRadius),
        deaths: 0,
        kills: 0,
        alive: true
    }

    return player;
}

module.exports = createPlayer;
