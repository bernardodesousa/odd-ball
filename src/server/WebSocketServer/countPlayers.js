/**
 * @param {*} connections - referência ao vetor de conexões
 *  - conte quantas conexões no vetor recebido tem
 *    o atributo connected igual a true
 * @return {Number} total de conexões ativas
 * @export countPlayers
 */

function countPlayers(connections) {
    
    //defined counter integer for counting connections.length
    var counter = 0;
    //conn = integer that allocates indexes numbers
    for (let conn = 0; conn < connections.length; conn++) {
        //if conn index number connection is true, then it adds 1+ to the counter
        if (connections[conn].connected) {
            counter++;
        }
    }
    //returns counter number
    return counter;
}

module.exports = countPlayers;