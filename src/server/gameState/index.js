const evaluateShot = require("./evaluateShot.js");
const names = require("./characterNames.js");

let players = [];

// temp
let first = true;
let n = 0;

function addPlayer(id) {
    if (first){
        players[id] = {
            id: id,
            name: names[n++],
            coordinates: [0, 0],
            radius: 30,
            hunter: true,
            deaths: 0,
            kills: 0,
            status: "ready"
        }

        first = false;
    } else {
        players[id] = {
            id: id,
            name: names[n++],
            coordinates: [0, 0],
            radius: 10,
            hunter: false,
            deaths: 0,
            kills: 0,
            status: "ready"
        }
    }

    return players[id].name;
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
