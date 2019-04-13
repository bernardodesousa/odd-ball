const isInside = require("./isInside.js");
const killPlayer = require("./killPlayer.js");

function evaluateShot(connections, players, shooterId) {
    let atLeastOneKill = false;

    for (let i=0; i<players.length; i++) {
        if (!players[i].coordinates) continue;
        if (shooterId != i) {
            let t = [
                players[i].coordinates[0] * 500,
                players[i].coordinates[1] * 500
            ];

            let h = [
                players[shooterId].coordinates[0] * 500,
                players[shooterId].coordinates[1] * 500
            ];

            if (players[i].alive && isInside(
                {center: t, radius: players[i].radius},
                {center: h, radius: players[shooterId].radius}
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
