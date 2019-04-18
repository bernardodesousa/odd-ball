/**
 * @import processDatagram, removePlayer
 * @param connections - vetor de ponteiros para as conexões WebSocket
 * @param playerId - índice para um dos elementos do vetor connections
 *  - Associar ao evento "message" da conexão a função processDatagram
 *  - Associar ao evento "close" da conexão a função removePlayer
 *  - A função processDatagram recebe o vetor de conexões, o id da conexão
 *    tratada e o datagrama entregue pelo evento "message"
 *  - A função removePlayer recebe o vetor de conexões e o id do jogador
 *    tratado
 * @export attachEventFunctionsTo
 */

let processDatagram = require('./processDatagram.js');
let removePlayer = require("./removePlayer.js");

function attachEventFunctionsTo(connections, playerId){

    connections[playerId].on("message", (datagram)=>{
        processDatagram(connections, playerId, datagram);

    })
    connections[playerId].on("close", ()=>{
        removePlayer(connections, playerId)

    })
    
}

module.exports = attachEventFunctionsTo;