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
    // TODO
    for (var index = 0; index < connections.length; index++) {
        if (connections[index].connected == true)
             connections[index].send(JSON.stringify(msg));
    }
    return ;
}

module.exports = broadcast;
