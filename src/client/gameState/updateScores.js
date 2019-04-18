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
import getPlayers from "./index";
function updateScores(scores){
    scores.forEach(element => {
        element.boardEntry.innerText = element.name + ": " + (element.kills - element.deaths);
        if(!element.alive)
        element.avatar.classList.add("dead");
    });
}

module.exports = updateScores;