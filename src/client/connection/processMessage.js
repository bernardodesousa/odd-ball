import {
    setPlayer,
    setPlayers,
    setPlayerPosition,
    addPlayer,
    removePlayer,
    updateScores,
    revivePlayer,
    resizePlayer
} from '../gameState/index.js';

let instruction = {};

function processMessage(msg) {
    instruction = JSON.parse(msg.data);

    switch (instruction.type) {
        case "move-player":
            setPlayerPosition(instruction.id, instruction.coordinates);
            break;
        case "enter-player":
            console.log("enter-player??");
            // addPlayer(instruction.id);
            break;
        case "player-left":
            console.log(instruction.id);
            removePlayer(instruction.id);
            break;
        case "new-player":
            addPlayer(instruction.player);
            break;
        case "welcome":
            console.log("Welcome! Your id is "+instruction.id);
            setPlayer(instruction.id);
            setPlayers(instruction.players);
            break;
        case "update-score":
            console.log("Update Score!");
            updateScores(instruction.players);
            break;
        case "revive-player":
            console.log("Revive player!");
            console.log(instruction);
            revivePlayer(instruction.id);
            break;
        case "resize-player":
            console.log("Resize player!");
            console.log(instruction);
            resizePlayer(instruction.id, instruction.radius);
            break;
    }
}

export { processMessage };