import {
    setPlayer,
    setPlayers,
    setPlayerPosition,
    addPlayer,
    removePlayer,
    updateScores,
    revivePlayer,
    resizePlayer,
    setPlayerName,
    setArenaSize
} from '../gameState/index.js';

let instruction = {};

function processMessage(msg) {
    instruction = JSON.parse(msg.data);

    switch (instruction.type) {
        case "move-player":
            setPlayerPosition(instruction.id, instruction.coordinates);
            break;
        case "enter-player":
            // console.log("enter-player??");
            // addPlayer(instruction.id);
            break;
        case "player-left":
            // console.log(instruction.id);
            removePlayer(instruction.id);
            break;
        case "new-player":
            addPlayer(instruction.player);
            break;
        case "welcome":
            console.log("Welcome!", instruction);
            setPlayer(instruction.id);
            setPlayers(instruction.players);
            setArenaSize(instruction.arenaSize);
            break;
        case "update-score":
            // console.log("Update Score!");
            updateScores(instruction.players);
            break;
        case "revive-player":
            // console.log("Revive player!");
            // console.log(instruction);
            revivePlayer(instruction.id);
            break;
        case "resize-player":
            // console.log("Resize player!");
            // console.log(instruction);
            resizePlayer(instruction.id, instruction.radius);
            setPlayerPosition(instruction.id, instruction.coordinates);
            break;
        case "update-name":
            console.log("update-name");
            console.log(instruction);
            setPlayerName(instruction.id, instruction.name);
            break;
    }
}

export { processMessage };