import { getConnection } from '../connection/index.js';

function enterArena() {
    let connection = getConnection();
    let instruction = {
        type: "pointer-enter"
    }

    connection.send(JSON.stringify(instruction));
}

export default enterArena;
