const evaluateShot = require("./evaluateShot.js");

let players = [];

function addPlayer(id, name) {
    players[id] = {
        id: id,
        name: name,
        coordinates: [0, 0],
        radius: 10,
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

function getPlayers() {
    return players;
}

function setCoordinates(id, coordinates){
    players[id].coordinates = coordinates;
}

module.exports = { addPlayer, removePlayer, getPlayer, evaluateShot, getPlayers, setCoordinates };
