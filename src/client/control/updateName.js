/**
 * @import { getConnection }, { getPlayer }
 * @export updateName
 * @param {string} name
 *  - Obtenha uma referência à conexão através da função getConnection
 *  - Construa um objeto com os parâmetros "type", "id" e "name"
 *      o valor de type deve ser a string "update-name"
 *      o valor do id deve ser fornecido por getPlayer
 *      o valor de name deve ser o que foi fornecido pelo caller
 *  - Envie a versão stringificada do objeto criado através da função
 *      send da conexão
 */

import { getConnection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function updateName(name) {
    if (name.length > 20) return;
    let connection = getConnection();
    let instruction = {
        type: "update-name",
        id: getPlayer(),
        name: name
    }

    connection.send(JSON.stringify(instruction));
}

export default updateName;
