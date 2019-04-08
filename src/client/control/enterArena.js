import { connection } from '../connection/index.js';

function enterArena() {
    let instruction = {
        type: "pointer-enter"
    }

    connection.send(JSON.stringify(instruction));
}

export { enterArena }
