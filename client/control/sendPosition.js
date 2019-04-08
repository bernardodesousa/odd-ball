import { connection } from '../connection/index.js';
import { calculatePosition } from './calculatePosition.js';

function sendPosition(event) {
    let instruction = {
        type: "coordinates",
        coordinates: calculatePosition(event)
    }

    connection.send(JSON.stringify(instruction));
}

export { sendPosition };
