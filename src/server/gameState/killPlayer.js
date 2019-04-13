const revive = require("./revive.js");
const randBetween = require("../gameState/randBetween.js");
const config = require("../config");

function killPlayer(connections, players, id) {
    players[id].deaths++;
    players[id].alive = false;
    setTimeout(() => {
        revive(connections, players[id]);
    }, randBetween(config.coolDownMin, config.coolDownMax));
}

module.exports = killPlayer;
