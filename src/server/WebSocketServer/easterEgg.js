const broadcast = require("./broadcast.js");
const getPlayers = require("../gameState/index.js").getPlayers
let l, s, p, c = false;

function easterEgg(connections) {
    getPlayers().forEach(player => {
        if (player.name == "Elias") l = true;
        if (player.name == "Esther") s = true;
        if (player.name == "Pedro") p = true;
        if (player.name == "Cecília") c = true;
    });

    if (l && s && p && c) {
        broadcast(connections, {
            type: "happy-birthday",
            fn: "console.log('HAPPY BIRTHDAY, CECÍLIA!')"
        });
    }
}

module.exports = easterEgg;
