const isInside = require("./isInside.js");

function evaluateShot(players, shooterId) {
    if (players[shooterId].hunter) {
        let atLeastOneKill = false;

        for (let i=0; i<players.length; i++) {
            if (shooterId != i) {
                let t = [
                    players[i].coordinates[0] * 500,
                    players[i].coordinates[1] * 500
                ];

                let h = [
                    players[shooterId].coordinates[0] * 500,
                    players[shooterId].coordinates[1] * 500
                ];

                if (isInside(
                    {center: t, radius: players[i].radius},
                    {center: h, radius: players[shooterId].radius}
                )) {
                    console.log(players[shooterId].name + " KILLS " + players[i].name);
                    players[i].deaths++;
                    players[i].status = "dead";
                    players[shooterId].kills++;
                    atLeastOneKill = true
                } else {
                    console.log("MISS");
                }
            }
        }

        return atLeastOneKill;
    }
}

module.exports = evaluateShot;
