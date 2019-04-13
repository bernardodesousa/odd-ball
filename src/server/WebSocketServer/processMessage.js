const movePlayer = require("./movePlayer.js");
const processShot = require("./processShot.js");
const updateName = require("./updateName.js");

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
            processShot(connections, input.id);
            break;
        case "update-name":
            updateName(connections, input.id, input.name);
            break;
    }
}

module.exports = processMessage;
