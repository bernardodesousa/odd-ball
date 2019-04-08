import { connection } from '../connection/index.js';
import { calculatePosition } from './calculatePosition.js';

function shoot(e) {
    let instruction = {
        type: "shot",
        coordinates: calculatePosition(e)
    }

    connection.send(JSON.stringify(instruction));
}

export { shoot };
