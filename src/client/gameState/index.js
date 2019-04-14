import updateName from '../control/updateName.js';
import addPlayer from './addPlayer.js';
import setPlayerPosition from './setPlayerPosition.js';
import updateScores from './updateScores.js';
import setPlayerName from './setPlayerName.js';
import setPlayers from './setPlayers.js';

let arena;
let board;
let playerId;
let players = [];
let nameInput;

function getBoard() { return board }
function getArena() { return arena }

function setDOMPointers(){
    board = document.getElementById("scoreBoard");
    arena = document.getElementById("arena");
    nameInput = document.getElementById("changeNameInput");
}

function setEventListeners () {
    document.getElementById("changeNameButton").onclick = () => { updateName(nameInput.value) };
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

function removePlayer(id){
    document.getElementById(id).remove();
    players[id] = {};
}

function getStatus(){
    if (players[playerId].alive) return "ready";
    return "dead";
}

function revivePlayer(id){
    players[id].alive = true;
    players[id].avatar.classList.remove("dead");
}

function resizePlayer(id, radius) {
    players[id].radius = radius;
    players[id].avatar.style.width = players[id].avatar.style.height = radius*2 + "px";
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
    setArenaSize,
    getBoard,
    getArena
};
