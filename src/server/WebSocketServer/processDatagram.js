const movePlayer = require("./movePlayer.js");
const processShot = require("./processShot.js");
const updateName = require("./updateName.js");

function processDatagram(connections, playerId, datagram) {
    if (datagram.type !== 'utf8') return;

    let message = JSON.parse(datagram.utf8Data);

    switch (message.type) {
        case "pointer-enter":
            break;
        case "coordinates":
            movePlayer(connections, playerId, message);
            break;
        case "shot":
            processShot(connections, message.id);
            break;
        case "update-name":
            updateName(connections, message.id, message.name);
            break;
        default:
            console.error("Unknown message type.");
    }
}

module.exports = processDatagram;
