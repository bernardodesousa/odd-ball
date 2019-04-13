import { getPlayers } from './index.js';

function setPlayerPosition(id, coordinates) {
    let players = getPlayers();
    if (id != undefined && coordinates){
        players[id].avatar.style.top = ((arena.clientHeight * coordinates[1] + arena.getBoundingClientRect().top) - players[id].avatar.clientHeight/2) + "px";
        players[id].avatar.style.left = ((arena.clientWidth * coordinates[0] + arena.getBoundingClientRect().left) - players[id].avatar.clientWidth/2) + "px";
    }
}

export default setPlayerPosition;
