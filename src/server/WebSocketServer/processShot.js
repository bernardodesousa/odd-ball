/**
 * @import GameState, broadcast
 * @param connections - vetor de ponteiros para conexões de WebSocket
 * @param id - id do player que atirou
 *  - Se a função GameState.evaluateShot retornar true, transmita o vetor de
 *    jogadores para todos os jogadores
 *  - A função GameState.evaluateShot recebe o vetor de conexões, o vetor de
 *    jogadores e o id do jogador que atirou.
 *  - A função GameState.getPlayers não recebe nada e retorna vetor
 *    de jogadores
 *  - A função broadcast recebe o vetor de conexões e o objeto mensagem, que
 *    neste caso deve conter duas propriedades: type e players
 *    O valor da propriedade type deve ser a string "update-score"
 *    O valor da propriedade players deve ser o vetor de jogadores.
 * @export processShot
 */

const GameState = require("../gameState");
const broadcast = require("../WebSocketServer/broadcast.js");

function processShot(connections, id) {
    if (GameState.evaluateShot(connections, GameState.getPlayers(), id)) {
        broadcast(connections, {
            "type": "update-score",
            "players": GameState.getPlayers()
        });
    }
}

module.exports = processShot;
