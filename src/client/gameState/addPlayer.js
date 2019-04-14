import { getPlayers, getBoard, getArena } from './index.js';
import createAvatar from './createAvatar.js';
import createLabel from './createLabel.js';
import createBoardEntry from './createBoardEntry.js';
import isPresent from './isPresent.js';
import setPlayerPosition from './setPlayerPosition.js';

function addPlayer (player) {
    let players = getPlayers();
    let arena = getArena();

    if (!isPresent(player.id)){
        players[player.id] = player;
        players[player.id].avatar = createAvatar(arena, player);
        players[player.id].label = createLabel(players[player.id].avatar, player.name);
        players[player.id].boardEntry = createBoardEntry(getBoard(), player);
        setPlayerPosition(player.id, player.coordinates);
    }
}

export default addPlayer;
