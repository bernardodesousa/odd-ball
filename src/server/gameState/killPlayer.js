const revive = require("./revive.js");
const randBetween = require("../gameState/randBetween.js");

function killPlayer(connections, players, id) {
    players[id].deaths++;
    players[id].alive = false;
    setTimeout(() => {
        revive(connections, players[id]);
    }, randBetween(2000, 2500));
}

module.exports = killPlayer;
