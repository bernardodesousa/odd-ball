const isInside = require("./isInside.js");
const revive = require("./revive.js");
const randBetween = require("../gameState/randBetween.js");

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
                console.log(players[shooterId].name + " KILLS " + players[i].name);
                players[i].deaths++;
                players[i].alive = false;
                players[shooterId].kills++;
                setTimeout(() => {
                    revive(connections, players[i]);
                }, randBetween(2000, 2500));

                atLeastOneKill = true
            }
        }
    }

    return atLeastOneKill;
}

module.exports = evaluateShot;
