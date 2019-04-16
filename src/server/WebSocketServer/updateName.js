/**
 * @import GameState, broadcast
 * @param connections
 * @param id
 * @param name
 *  - Defina o nome do jogador em GameState, através da função
 *    GameState.setName, que recebe o id e o novo nome.
 *  - Informe os jogadores sobre a atualização através da função
 *    broadcast, que recebe o vetor de conexões e o objeto mensagem
 *  - Neste caso, o objeto mensagem deve ter 3 propriedades:
 *    type, id e nome.
 *    A propriedade type deve ter como valor a string "update-name"
 *    A propriedade id e name devem conter os valores respectivos
 *    recebidos como parâmetros pelo caller
 * @export updateName
 */
