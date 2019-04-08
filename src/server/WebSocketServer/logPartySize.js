const countPlayers = require('./countPlayers.js');

function logPartySize(connections){
    let n = countPlayers(connections);
    if (n > 1) console.log(`${n} players`);
    else if (n === 1) console.log(`1 player`);
    else console.log(`No players`);
}

module.exports = logPartySize;
