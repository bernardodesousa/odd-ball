/**
 * Called ever time the player moves the mouse inside the arena
 * @import { getConnection }, calculatePosition, { getStatus }
 * @export { sendPosition }
 * @param event
 *  - Se o status do player for "dead", retorne
 *  - construa um objeto com as propriedades type e coordinates
 *    type deve ser a string "coordinates"
 *    coordinates deve ser o valor de retorno de calculatePosition
 *  - calculatePosition deve ser chamada com o parâmetro recebido event
 *  - chame a função send, disponível no objeto connection, recebido de getConnection
 *  - 
 *  - a função connection.send deve ser chamada com o objeto construído.
 */
