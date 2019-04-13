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
