const evaluateShot = require("./evaluateShot.js");

let players = [];

function addPlayer(id, name) {
    players[id] = {
        name: name,
        coordinates: [0, 0],
        radius: 20,
        hunter: false,
        deaths: 0,
        kills: 0,
        status: "ready"
    }
}

function removePlayer(id) {
    players[id] = {};
}

function getPlayer(id) {
    return players[id];
}

module.exports = { addPlayer, removePlayer, getPlayer, evaluateShot };
