import { connection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function updateName(name) {
    let instruction = {
        type: "update-name",
        id: getPlayer(),
        name: name
    }

    connection.send(JSON.stringify(instruction));
}

export { updateName };
