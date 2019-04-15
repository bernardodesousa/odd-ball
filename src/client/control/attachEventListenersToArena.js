import enterArena from './enterArena.js';
import { sendPosition } from './sendPosition.js';
import { shoot } from './shoot.js';

function attachEventListenersToArena() {
    let arena = document.getElementById("arena");
    
    arena.addEventListener("pointerenter", enterArena);
    arena.addEventListener("pointermove", sendPosition);
    
    arena.addEventListener("click", shoot);
}

export default attachEventListenersToArena;
