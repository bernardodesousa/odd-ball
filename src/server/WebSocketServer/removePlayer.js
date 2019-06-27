/**
 * @import broadcast, logPartySize, GameState
 * @param connections - vetor de ponteiros para conexões de WebSocket
 * @param playerId - índice da conexão de um dos jogadores
 *  - Delete o jogador através da função removePlayer provida pelo
 *    módulo GameState. Essa função recebe apenas o id do jogador
 *  - Informe todos os jogadores sobre a partida deste jogador, usando
 *    a função broadcast, que recebe o vetor de conexões e o objeto mensagem
 *  - Neste caso, o objeto mensagem deve ter duas propriedade: type e id.
 *    A propriedade type deve ter como valor a string "player-left"
 *    A propriedade id deve ser o id do jogador que deixou a partida
 *  - Envie o vetor de conexões à função logPartySize.
 * @export removePlayer
 */

const broadcast = require('./broadcast.js');
const logPartySize = require("./logPartySize.js");
const GameState = require("../gameState");

function removePlayer(connections, playerId) {
    // TODO
}

module.exports = removePlayer;
