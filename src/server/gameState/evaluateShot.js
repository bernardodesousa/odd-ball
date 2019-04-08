const isInside = require("./isInside.js");

function evaluateShot(players, shooterId) {
    if (players[shooterId].hunter) {
        for (let i=0; i<players.length; i++) {
            if (isInside(
                {center: players[i].coordinates, radius: players[i].radius},
                {center: players[shooterId].coordinates, radius: players[shooterId].radius}
            )) {
                players[i].deaths++;
                players[i].status = "dead";
                players[shooterId].kills++;
            }
        }
    }
}

module.exports = evaluateShot;
