import { connection } from './connection.js';

let arena = document.getElementById("arena");

arena.addEventListener("pointerenter", e => {
    let instruction = {
        type: "pointer-enter"
    }

    connection.send(JSON.stringify(instruction));
});

arena.addEventListener("pointermove", e => {

    let x = (e.pageX - e.currentTarget.offsetLeft) / e.currentTarget.clientWidth
    let y = (e.pageY - e.currentTarget.offsetTop) / e.currentTarget.clientHeight

    let instruction = {
        type: "pointer-coordinates",
        coordinates: [x, y]
    }

    connection.send(JSON.stringify(instruction));
});

arena.addEventListener("pointerleave", e => {
    
    let instruction = {
        type: "pointer-exit"
    }

    connection.send(JSON.stringify(instruction));
});

function pointer (x) {
    console.log(x);
}

export { pointer };