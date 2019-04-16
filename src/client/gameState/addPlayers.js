/**
 * @import addPlayer
 * @param players
 * @export addPlayers
 *  - Chamar a função addPlayer com cada jogador do vetor recebido
 */

import addPlayer from './addPlayer.js';

function addPlayers(players){
    players.forEach(p => {
        if (p != undefined) addPlayer(p);
    });
}

export default addPlayers;
