import { connection } from '../connection/index.js';

function shoot(e) {
    console.log(e);
    let x = (event.pageX - event.currentTarget.offsetLeft) / event.currentTarget.clientWidth
    let y = (event.pageY - event.currentTarget.offsetTop) / event.currentTarget.clientHeight

    let instruction = {
        type: "shot",
        coordinates: [x, y]
    }

    connection.send(JSON.stringify(instruction));
}

export { shoot };
