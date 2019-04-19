/**
 * @imports enterArena, {sendPosition}, {shoot}
 *  - get a reference to the arena from the DOM
 *  - attach enterArena to its "pointerenter" mouse event
 *  - attach sendPosition to its "pointermove" mouse event
 *  - attach shoot to its "click" mouse event
 * @exports attachEventListenersToArena
 */

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
