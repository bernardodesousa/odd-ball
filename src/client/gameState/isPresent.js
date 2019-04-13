import { getPlayers } from './index.js';

function isPresent(id){
    let players = getPlayers();

    for (let i=0; i<players.length; i++) {
        if (players[i].id == id) return true;
    }

    return false;
}

export default isPresent;
