window.WebSocket = window.WebSocket || window.MozWebSocket;
let connection = new WebSocket(`ws://${window.location.hostname}:3001`);
let instruction;
let player = {id: undefined};
let opponents = [];
let arena = document.getElementById("arena");

function hasPlayer(opponents, id){
    for (let i=0; i<opponents.length; i++) {
        if (opponents[i].id == id) return true;
    }

    return false;
}

connection.onopen = () => {
    console.log("OPEN!");
};

connection.onerror = error => {
    console.error(error);
};

connection.onmessage = msg => {
    instruction = JSON.parse(msg.data);
    // console.log(instruction);

    if (instruction.type === "enter-player"){
        if (!player){
            player = document.createElement("div");
            player.id = instruction.id;
            player.classList.add("player");
            document.getElementById("arena").appendChild(player);
        } else if (player.id !== instruction.id) {
            if (!hasPlayer(opponents, instruction.id)){
                let opponent = document.createElement("div");
                opponent.id = instruction.id;
                opponent.classList.add("player");
                opponents.push(opponent);
                document.getElementById("arena").appendChild(opponent);
            }
        }
    } else if (instruction.type === "move-player") {
        let p = document.getElementById(instruction.id+"");

        if (instruction.coordinates){            
            p.style.top = (arena.clientHeight * instruction.coordinates[1]) + "px"
            p.style.left = (arena.clientWidth * instruction.coordinates[0]) + "px"
        }
    }
};

setInterval(() => {
    if (connection.readyState !== 1) {
        console.error("Server not reachable.");
    }
}, 3000);

export { connection };
