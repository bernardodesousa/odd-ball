const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");
const GameState = require("../gameState");

function removePlayer(connections, players, playerId) {
    GameState.removePlayer(playerId);

    broadcast(connections, {type: "player-left", id: playerId});
    logPartySize(connections);
}

module.exports = removePlayer;
