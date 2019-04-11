let doc = document;
let arena;
let playerId;
let players = [];

function setDocument(d){
    doc = d;
    arena = doc.getElementById("arena");
}

function setPlayer(id){
    playerId = id;
}

function getPlayer(){
    return playerId;
}

function getPlayers(){
    return players;
}

function addPlayer(player){
    // console.log(player);
    let id = player.id
    if (!isPresent(id)){

        players[id] = player;
        players[id].element = doc.createElement("div");

        players[player.id].element.setAttribute("id", id);
        players[player.id].element.classList.add("player");

        if (players[player.id].hunter == true){
            players[player.id].element.classList.add("hunter");
        }

        if (players[player.id].status == 'dead'){
            players[player.id].element.classList.add("dead");
        }

        players[player.id].element.style.width = players[player.id].element.style.height = players[player.id].radius*2 + "px";
        arena.appendChild(players[player.id].element);
        setPlayerPosition(player.id, player.coordinates);
    }
}

function setPlayers(pls){
    if (pls) {
        pls.forEach((p, index) => {
            if (p != undefined){
                addPlayer(p);
            }
        });
    }
}

function setPlayerPosition(id, coordinates) {
    if (id != undefined && coordinates){
        players[id].element.style.top = ((arena.clientHeight * coordinates[1] + arena.getBoundingClientRect().top) - players[id].element.clientHeight/2) + "px";
        players[id].element.style.left = ((arena.clientWidth * coordinates[0] + arena.getBoundingClientRect().left) - players[id].element.clientWidth/2) + "px";
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

function updateScores(ps){
    ps.forEach((p, i) => {
        players[i].kills = p.kills;
        players[i].deaths = p.deaths;
        players[i].status = p.status;
        if (players[i].status == "dead"){
            players[i].element.classList.add("dead");
        }
    });
}

function getStatus(){
    return players[playerId].status;
}

export {
    setPlayer,
    getPlayer,
    setPlayerPosition,
    setPlayers,
    addPlayer,
    removePlayer,
    setDocument,
    getPlayers,
    updateScores,
    getStatus
};
