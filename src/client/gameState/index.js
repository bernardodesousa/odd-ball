import { updateName } from '../control/updateName.js';

let arena;
let board;
let playerId;
let players = [];
let nameInput;
let updateNameButton;

function setDOMPointers(){
    board = document.getElementById("scoreBoard");
    arena = document.getElementById("arena");
    nameInput = document.getElementById("changeNameInput");
    updateNameButton = document.getElementById("changeNameButton");
}

function setEventListeners () {
    updateNameButton.onclick = () => { updateName(nameInput.value) };
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
    let id = player.id
    if (!isPresent(id)){

        players[id] = player;
        
        players[id].element = document.createElement("div");
        players[player.id].element.setAttribute("id", id);
        players[player.id].element.classList.add("player");

        if (!players[player.id].alive){
            players[player.id].element.classList.add("dead");
        }

        players[player.id].element.style.width = players[player.id].element.style.height = players[player.id].radius*2 + "px";

        // create player label
        players[id].label = document.createElement("p");
        players[id].label.innerText = players[id].name;
        players[player.id].element.appendChild(players[id].label);

        // add score board entry
        players[id].boardEntry = document.createElement("p");
        players[id].boardEntry.innerText = `${players[id].name}: ${players[id].kills - players[id].deaths}`;
        board.appendChild(players[id].boardEntry);

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
        players[i].alive = p.alive;
        if (!players[i].alive){
            players[i].element.classList.add("dead");
        }

        players[i].boardEntry.innerText = `${players[i].name}: ${players[i].kills - players[i].deaths}`;
    });
}

function getStatus(){
    if (players[playerId].alive) return "ready";
    return "dead";
}

function revivePlayer(id){
    players[id].alive = true;
    players[id].element.classList.remove("dead");
}

function resizePlayer(id, radius) {
    players[id].radius = radius;
    players[id].element.style.width = players[id].element.style.height = radius*2 + "px";
}

function setPlayerName(id, name) {
    players[id].name = name;
    players[id].label.innerText = name;
    players[id].boardEntry.innerText = `${players[id].name}: ${players[id].kills - players[id].deaths}`;
}

function setArenaSize(size) {
    arena.style.width = arena.style.height = size+"px";
}

export {
    setPlayer,
    getPlayer,
    setPlayerPosition,
    setPlayers,
    addPlayer,
    removePlayer,
    setDOMPointers,
    getPlayers,
    updateScores,
    getStatus,
    revivePlayer,
    resizePlayer,
    setEventListeners,
    setPlayerName,
    setArenaSize
};
