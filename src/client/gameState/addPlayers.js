import addPlayer from './addPlayer.js';

function addPlayers(players){
    players.forEach(p => {
        if (p != undefined) addPlayer(p);
    });
}

export default addPlayers;
