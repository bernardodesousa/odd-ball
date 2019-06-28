/**
 * @import { getConnection }, { getPlayer }
 * @export { shoot }
 *  - Obtenha uma referência à conexão através da função getConnection
 *  - Construa um objeto com os parâmetros type e id.
 *      o valor de type deve ser a string "shot"
 *      o valor de id deve ser fornecido por getPlayer
 *  - Use a função send da conexão para
 *    enviar a versão stringificada do objeto criado
 */

import { getConnection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function shoot() {
    // TODO
}

export { shoot };
