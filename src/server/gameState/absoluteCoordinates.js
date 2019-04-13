const arenaSize = require("../config.js").arenaSize;

function absoluteCoordinates(relative) {
    return [
        relative[0] * arenaSize,
        relative[1] * arenaSize
    ];
}

module.exports = absoluteCoordinates;
