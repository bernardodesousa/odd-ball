/**
 * @param {*} connections - referência ao vetor de conexões
 * @param {*} msg - a mensagem a ser transmitida para todos os jogadores
 *  - Percorra o vetor recebido
 *  - para cada conexão cujo atributo connected for true, chame a função send
 *    da conexão.
 *  - A função send recebe o objeto msg stringuificado.
 * @export broadcast
 */

function broadcast(connections, msg){    
    for (let i=0; i<connections.length; i++) {
        if (connections[i].connected){
            connections[i].send(JSON.stringify(msg));
        }
    }
}

module.exports = broadcast;
