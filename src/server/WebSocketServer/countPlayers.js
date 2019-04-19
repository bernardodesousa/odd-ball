/**
 * @param {*} connections - referência ao vetor de conexões
 *  - conte quantas conexões no vetor recebido tem
 *    o atributo connected igual a true
 * @return {Number} total de conexões ativas
 * @export countPlayers
 */

function countPlayers(connections) {
    let total = 0;
    connections.forEach(c => {
        if (c.connected) total++;
    });

    return total;
}

module.exports = countPlayers;
