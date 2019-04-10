let doc = document;
let arena;
let player;
let players = [];

function setDocument(d){
    doc = d;
    arena = doc.getElementById("arena");
}

function setPlayer(id){
    player = id;
}

function getPlayer(){
    return player;
}

function getPlayers(){
    return players;
}

function addPlayer(id, coordinates){
    if (!isPresent(id)){
        let p = doc.createElement("div");
        p.setAttribute("id", id);
        p.classList.add("player");
        players[id] = p;
        arena.appendChild(p);
        setPlayerPosition(id, coordinates);
    }
}

function setPlayers(pls){
    if (pls) {
        pls.forEach((p, index) => {
            if (p != undefined && p.coordinates != undefined){
                addPlayer(index, p.coordinates);
            }
        });
    }
}

function setPlayerPosition(id, coordinates) {
    if (id != undefined && coordinates){
        players[id].style.top = (arena.clientHeight * coordinates[1] - players[id].clientHeight/2) + "px";
        players[id].style.left = (arena.clientWidth * coordinates[0] - players[id].clientWidth/2) + "px";
    }
}

function isPresent(id){
    for (let i=0; i<players.length; i++) {
        if (players[i].id == id) return true;
    }

    return false;
}

function removePlayer(id){
    document.getElementById(id).remove();
    players.slice(id, 1);
}

export {
    setPlayer,
    getPlayer,
    setPlayerPosition,
    setPlayers,
    addPlayer,
    removePlayer,
    setDocument,
    getPlayers
};
