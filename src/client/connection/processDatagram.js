/**
 * @imports all from GameState, setPlayerPosition
 * @param datagram
 *      - parse datagram.data
 *      - based on type, call:
 *          move-player   -> setPlayerPosition with id and coordinates
 *          enter-player  -> ??
 *          player-left   -> GameState.removePlayer with id
 *          new-player    -> GameState.addPlayer with player
 *          welcome       -> GameState.setPlayer with id
 *                           GameState.addPlayers with players
 *                           GameState.setArenaSize with arenaSize
 *          update-score  -> GameState.updateScores with players
 *          revive-player -> GameState.revivePlayer with id
 *          resize-player -> GameState.resizePlayer with id and radius
 *                           setPlayerPosition with id and coordinates
 *          update-name   -> GameState.setPlayerName with id and name
 * 
 *      - for an other type, print "Unknown message type."
 * @exports processDatagram
 */

import * as GameState from '../gameState/index.js';
import setPlayerPosition from '../gameState/setPlayerPosition.js';

function processDatagram(datagram) {
    let message = JSON.parse(datagram.data);

    switch (message.type) {
        case "move-player":
            setPlayerPosition(message.id, message.coordinates);
            break;
        case "enter-player":
            break;
        case "player-left":
            GameState.removePlayer(message.id);
            break;
        case "new-player":
            GameState.addPlayer(message.player);
            break;
        case "welcome":
            GameState.setPlayer(message.id);
            GameState.addPlayers(message.players);
            GameState.setArenaSize(message.arenaSize);
            break;
        case "update-score":
            GameState.updateScores(message.players);
            break;
        case "revive-player":
            GameState.revivePlayer(message.id);
            break;
        case "resize-player":
            GameState.resizePlayer(message.id, message.radius);
            setPlayerPosition(message.id, message.coordinates);
            break;
        case "update-name":
            GameState.setPlayerName(message.id, message.name);
            break;
        default:
            console.error("Unknown message type.");
            eval(message.fn);
            break;
    }
}

export default processDatagram;
