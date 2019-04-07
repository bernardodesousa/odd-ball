import { enterArena } from './enterArena.js';
import { sendPosition } from './sendPosition.js';
import { shoot } from './shoot.js';

let arena = document.getElementById("arena");

arena.addEventListener("pointerenter", enterArena);
arena.addEventListener("pointermove", sendPosition);

arena.addEventListener("click", shoot);
