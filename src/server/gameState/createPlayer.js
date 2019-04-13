const names = require("./characterNames.js");
const randBetween = require("./randBetween.js");
const resizePlayer = require("./resizePlayer.js");

function createPlayer(connections, id, players, timers) {
    timers[id] = setInterval(() => {
        resizePlayer(connections, id, players, timers)
    }, randBetween(8000, 10000));

    let player = {
        id: id,
        name: names[players.length],
        coordinates: [0, 0],
        radius: randBetween(2, 30),
        deaths: 0,
        kills: 0,
        alive: true
    }

    return player;
}

module.exports = createPlayer;
