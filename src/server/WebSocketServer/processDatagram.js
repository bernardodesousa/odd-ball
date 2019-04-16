/**
 * @import movePlayer, processShot, updateName
 * @param connections - vetor de ponteiros para conexões de WebSocket
 * @param playerId - índice da conexão de um dos jogadores
 * @param datagram - datagrama recebido por um WebSocket
 *  - Se a propriedade type do datagrama recebido não for "utf8", retorne
 *  - Extraia a carga útil do datagrama, contido na propriedade utf8Data
 *  - O conteúdo dessa propriedade é uma string. Não se esqueça de
 *    transformá-la em um objeto.
 *  - Avalie a propriedade type do objeto obtido, e para cada caso, chame
 *    a função correspondente:
 *      "pointer-enter" -> não faça nada
 *      "coordinates"   -> movePlayer
 *      "shot"          -> processShot
 *      "update-name"   -> updateName
 *  - Se a propriedade type não corresponder a nenhum desses casos,
 *    imprima"Unknown message type."
 *  - A função movePlayer recebe o vetor de conexões, o id do jogador e a mensagem
 *  - A função processShot recebe o vetor de conexões e a propriedade id da mensagem
 *  - A função updateName recebe o vetor de conexões, a propriedade id da mensagem,
 *    e a propriedade name da mensagem
 * @export processDatagram
 */
