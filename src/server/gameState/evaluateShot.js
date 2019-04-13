const isInside = require("./isInside.js");
const killPlayer = require("./killPlayer.js");
const absoluteCoordinates = require("./absoluteCoordinates.js");

function evaluateShot(connections, players, shooterId) {
    let atLeastOneKill = false;

    for (let i=0; i<players.length; i++) {
        if (!players[i].coordinates) continue;
        if (shooterId != i) {
            if (players[i].alive && isInside(
                {center: absoluteCoordinates(players[i].coordinates), radius: players[i].radius},
                {center: absoluteCoordinates(players[shooterId].coordinates), radius: players[shooterId].radius}
            )) {
                killPlayer(connections, players, i);
                players[shooterId].kills++;
                atLeastOneKill = true
                console.log(players[shooterId].name + " KILLS " + players[i].name);
            }
        }
    }

    return atLeastOneKill;
}

module.exports = evaluateShot;
