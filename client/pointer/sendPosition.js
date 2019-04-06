import { connection } from '../connection/index.js';

function sendPosition(event) {
    let x = (event.pageX - event.currentTarget.offsetLeft) / event.currentTarget.clientWidth
    let y = (event.pageY - event.currentTarget.offsetTop) / event.currentTarget.clientHeight

    let instruction = {
        type: "pointer-coordinates",
        coordinates: [x, y]
    }

    connection.send(JSON.stringify(instruction));
}

export { sendPosition };
