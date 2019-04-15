import { getConnection } from '../connection/index.js';
import calculatePosition from './calculatePosition.js';
import { getStatus } from '../gameState/index.js';

function sendPosition(event) {
    if (getStatus() == "dead") return;

    let connection = getConnection();
    let instruction = {
        type: "coordinates",
        coordinates: calculatePosition(event)
    }

    connection.send(JSON.stringify(instruction));
}

export { sendPosition };
