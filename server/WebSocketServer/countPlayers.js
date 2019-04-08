function countPlayers(connections) {
    let total = 0;
    connections.forEach(c => {
        if (c.connected) total++;
    });

    return total;
}

module.exports = countPlayers;
