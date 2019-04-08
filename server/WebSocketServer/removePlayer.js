const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");

function removePlayer(connections, players, playerId) {
    players[playerId] = {};
    broadcast(connections, {type: "player-left", id: playerId});
    logPartySize(connections);
}

module.exports = removePlayer;
