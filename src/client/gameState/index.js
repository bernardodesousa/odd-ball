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

function addPlayer(id, player){
    console.log(player);
    if (!isPresent(id)){
        players[id] = player;
        players[id].element = doc.createElement("div");

        players[id].element.setAttribute("id", id);
        players[id].element.classList.add("player");
        players[id].element.style.width = players[id].element.style.height = players[id].radius*2 + "px";
        arena.appendChild(players[id].element);
        setPlayerPosition(id, player.coordinates);
    }
}

function setPlayers(pls){
    if (pls) {
        pls.forEach((p, index) => {
            if (p != undefined){
                addPlayer(index, p);
            }
        });
    }
}

function setPlayerPosition(id, coordinates) {
    if (id != undefined && coordinates){

        players[id].element.style.top = ((arena.clientHeight * coordinates[1] + arena.getBoundingClientRect().top) - players[id].element.clientHeight/2) + "px";
        players[id].element.style.left = ((arena.clientWidth * coordinates[0] + arena.getBoundingClientRect().left) - players[id].element.clientWidth/2) + "px";
        // players[id].element.style.top = (arena.clientHeight * coordinates[1] - players[id].element.clientHeight/2) + "px";
        // players[id].element.style.left = (arena.clientWidth * coordinates[0] - players[id].element.clientWidth/2) + "px";
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
    players[id] = {};
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
