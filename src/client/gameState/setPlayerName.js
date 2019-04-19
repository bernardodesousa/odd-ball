import { getPlayers } from './index.js';

function setPlayerName(id, name) {
    let players = getPlayers();

    players[id].name = name;
    players[id].label.innerText = name;
    players[id].boardEntry.innerText = `${players[id].name}: ${players[id].kills - players[id].deaths}`;
}

export default setPlayerName;
