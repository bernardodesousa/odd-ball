/**
 * @import getPlayers
 * @param scores
 *  - Obtenha uma referência para o vetor de jogadores
 *  - Percorra o vetor de pontos recebido e atribua ao
 *    jogador correspondente, no vetor de jogadores,
 *    os valores de kills, deaths a alive.
 *  - Quando um jogador estiver com o atributo alive
 *    igual a false, adicione à seu avatar a classe CSS "dead"
 *  - Atualize a tabela de pontos
 * @export updateScores
 */

import { getPlayers } from './index.js';

function updateScores (scores) {
    let players = getPlayers();

    scores.forEach((score, i) => {
        players[i].kills = score.kills;
        players[i].deaths = score.deaths;
        players[i].alive = score.alive;

        if (!players[i].alive){
            players[i].avatar.classList.add("dead");
        }

        players[i].boardEntry.innerText = `${players[i].name}: ${players[i].kills - players[i].deaths}`;
    });
}

export default updateScores;