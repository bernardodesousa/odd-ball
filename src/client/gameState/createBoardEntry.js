/**
 * @param board
 * @param player
 *  - Criar elemento "p" no DOM
 *  - Setar o atributo innerText do elemento criado para "<nome_do_jogado>: <score>"
 *    em que o score é igual a player.kills menos player.deaths
 *  - Adicionar o elemento criado ao painel de pontos, usando a referência
 *    recebida.
 * @return uma referência para o elemento criado no DOM
 */

function createBoardEntry (board, player) {
    let boardEntry = document.createElement("p");
    boardEntry.innerText = `${player.name}: ${player.kills - player.deaths}`;
    board.appendChild(boardEntry);

    return boardEntry;
}

export default createBoardEntry;
