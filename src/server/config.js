const names = require("./characterNames.js");
const arenaSize = 600;
const playerMinRadius = 5;
const playerMaxRadius = 30;
const coolDownMin = 2000;
const coolDownMax = 2600;
const resizeIntervalMin = 8000;
const resizeIntervalMax = 10000;
const initialCoordinates = [0.5, 0.5];

module.exports = {
    arenaSize,
    playerMinRadius,
    playerMaxRadius,
    coolDownMin,
    coolDownMax,
    names,
    initialCoordinates,
    resizeIntervalMin,
    resizeIntervalMax
};
