const names = require("./characterNames.js");
const randBetween = require("./randBetween.js");

function createPlayer(id, n) {
    let player = {
        id: id,
        name: names[n],
        coordinates: [0, 0],
        radius: randBetween(2, 30),
        deaths: 0,
        kills: 0,
        alive: true
    }

    return player;
}

module.exports = createPlayer;
