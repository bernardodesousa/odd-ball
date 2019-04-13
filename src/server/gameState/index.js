const evaluateShot = require("./evaluateShot.js");
const createPlayer = require("./createPlayer.js");

let players = [];
let resizeTimers = [];

function addPlayer(connections, id) {
    players[id] = createPlayer(connections, id, players, resizeTimers);
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

function setName(id, name) {
    players[id].name = name;
}

module.exports = {
    addPlayer,
    removePlayer,
    getPlayer,
    evaluateShot,
    getPlayers,
    setCoordinates,
    setName
};
