/**
 * @import broadcast, GameState
 * @param connections - vetor de ponteiros para conexões de WebSocket
 * @param playerId - índice da conexão de um dos jogadores
 * @param input - objeto contendo as novas coordenadas de um jogador
 *  - Use a função setCoordinates, provida por GameState, para atualizar a posição do jogador
 *  - A função setCoordinates recebe o id do jogador e as coordenadas.
 *  - Construa um objeto com os atributos id, type e coordinates, contendo os seguintes valores
 *     id          -> o id recebido em playerId
 *     type        -> a string "move-player"
 *     coordinates -> o valor do parâmetro coordinates, recebido no objeto input
 *  - Envie o objeto construído para todas as conexões através da função broadcast
 *  - A função broadcast recebe o vetor de conexões e um objeto contendo a mensagem
 * @exports movePlayer
 */

 const broadcast = require('./broadcast.js');
const GameState = require("../gameState");

function movePlayer(connections, playerId, input) {
    // TODO
}

module.exports = movePlayer;
