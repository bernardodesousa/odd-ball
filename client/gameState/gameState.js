
let arena = document.getElementById("arena");
let player; // index to players
let players = [];

function setPlayer(id){
    if (!player){
        player = id;
    }
}

function addPlayer(id, coordinates){
    if (!isPresent(id)){
        let p = document.createElement("div");
        p.id = id;
        p.classList.add("player");
        players[id] = p;
        document.getElementById("arena").appendChild(p);
        setPlayerPosition(id, coordinates);
    }
}

function setPlayers(pls){
    if (pls) {
        pls.forEach((p, index) => {
            addPlayer(index, p.coordinates);
        });
    }
}

function setPlayerPosition(id, coordinates) {
    if (id != undefined && coordinates){
        players[id].style.top = (arena.clientHeight * coordinates[1]) + "px";
        players[id].style.left = (arena.clientWidth * coordinates[0]) + "px";
    }
}

function isPresent(id){
    for (let i=0; i<players.length; i++) {
        if (players[i].id == id) return true;
    }

    return false;
}

function removePlayer(id){
    players[id].remove();
    players.slice(id, 1);
}

export { player, players, setPlayer, setPlayerPosition, setPlayers, addPlayer, removePlayer };
