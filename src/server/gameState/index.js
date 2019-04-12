const evaluateShot = require("./evaluateShot.js");
const randBetween = require("./randBetween.js");
const broadcast = require("../WebSocketServer/broadcast.js");
const createPlayer = require("./createPlayer.js");

let players = [];

function addPlayer(connections, id) {
    players[id] = createPlayer(id, players.length);

    let timer;
    resizePlayer(connections, id, timer);

    return players[id].name;
}

function resizePlayer(connections, id, timer) {
    if (timer) clearInterval(timer);

    players[id].radius = randBetween(2, 30);
    broadcast(connections, {
        type: "resize-player",
        id: id,
        radius: players[id].radius,
        coordinates: players[id].coordinates
    });

    timer = setInterval(() => {
        resizePlayer(connections, id, timer)
    }, randBetween(8000, 10000));
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

module.exports = { addPlayer, removePlayer, getPlayer, evaluateShot, getPlayers, setCoordinates, setName };
