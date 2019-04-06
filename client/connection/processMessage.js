import { setPlayer, setPlayers, setPlayerPosition, addPlayer, removePlayer } from '../gameState/gameState.js';

let instruction = {};

function processMessage(msg) {
    instruction = JSON.parse(msg.data);

    switch (instruction.type) {
        case "move-player":
            setPlayerPosition(instruction.id, instruction.coordinates);
            break;
        case "enter-player":
            addPlayer(instruction.id);
            break;
        case "player-left":
            removePlayer(instruction.id);
            break;
        case "new-player":
            setPlayers(instruction.players);
            setPlayer(instruction.id);
            break;
    }
}

export { processMessage };