import { getConnection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function shoot() {
    let connection = getConnection();
    let instruction = {
        type: "shot",
        id: getPlayer()
    }

    connection.send(JSON.stringify(instruction));
}

export { shoot };
