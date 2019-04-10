const evaluateShot = require("./evaluateShot.js");

let players = [];

// temp
let first = true;

function addPlayer(id, name) {
    if (first){
        players[id] = {
            id: id,
            name: "Mary",
            coordinates: [0, 0],
            radius: 50,
            hunter: true,
            deaths: 0,
            kills: 0,
            status: "ready"
        }

        first = false;
    } else {
        players[id] = {
            id: id,
            name: "John",
            coordinates: [0, 0],
            radius: 10,
            hunter: false,
            deaths: 0,
            kills: 0,
            status: "ready"
        }
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
