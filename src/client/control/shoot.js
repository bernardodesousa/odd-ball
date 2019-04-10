import { connection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function shoot(e) {
    let instruction = {
        type: "shot",
        id: getPlayer()
    }

    connection.send(JSON.stringify(instruction));
}

export { shoot };
