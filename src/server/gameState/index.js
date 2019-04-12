const evaluateShot = require("./evaluateShot.js");
const names = require("./characterNames.js");
const randBetween = require("./randBetween.js");
const broadcast = require("../WebSocketServer/broadcast.js");

let players = [];
let n = 0;

function addPlayer(connections, id) {
    players[id] = {
        id: id,
        name: names[n++],
        coordinates: [0, 0],
        radius: randBetween(2, 30),
        deaths: 0,
        kills: 0,
        alive: true,
    }
    
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
        radius: players[id].radius
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
