/**
 * @import { getConnection }
 * @export enterArena
 *  - call getConnection and store it's return value
 *  - instantiate instruction object with "type" property set to "pointer-enter"
 *  - call connection.send function with the stringified instruction
 */

import { getConnection } from '../connection/index.js';

function enterArena() {
    let connection = getConnection();
    let instruction = {
        type: "pointer-enter"
    }

    connection.send(JSON.stringify(instruction));
}

export default enterArena;
