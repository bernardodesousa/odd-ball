import { getConnection } from '../connection/index.js';
import { getPlayer } from '../gameState/index.js';

function updateName(name) {
    let connection = getConnection();
    let instruction = {
        type: "update-name",
        id: getPlayer(),
        name: name
    }

    connection.send(JSON.stringify(instruction));
}

export default updateName;
