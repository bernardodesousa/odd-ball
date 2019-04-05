import { enterArena } from './enterArena.js';
import { sendPosition } from './sendPosition.js';

let arena = document.getElementById("arena");

arena.addEventListener("pointerenter", enterArena);
arena.addEventListener("pointermove", sendPosition);
