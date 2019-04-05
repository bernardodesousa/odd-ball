import { connection } from '../connection.js';

function enterArena() {
    let instruction = {
        type: "pointer-enter"
    }

    connection.send(JSON.stringify(instruction));
}

export { enterArena }
