import addPlayer from './addPlayer.js';

function setPlayers(players){
    players.forEach(p => {
        if (p != undefined) addPlayer(p);
    });
}

export default setPlayers;
