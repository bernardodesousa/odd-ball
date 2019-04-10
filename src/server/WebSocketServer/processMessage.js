const movePlayer = require("./movePlayer.js");

function processMessage(connections, playerId, datagram) {
    if (datagram.type !== 'utf8') return;

    let input = JSON.parse(datagram.utf8Data);

    switch (input.type) {
        case "pointer-enter":
            break;
        case "coordinates":
            movePlayer(connections, playerId, input);
            break;
        case "shot":
            console.log(input.coordinates);
            break;
    }
}

module.exports = processMessage;
