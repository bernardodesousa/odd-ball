function createBoardEntry (board, player) {
    let boardEntry = document.createElement("p");
    boardEntry.innerText = `${player.name}: ${player.kills - player.deaths}`;
    board.appendChild(boardEntry);

    return boardEntry;
}

export default createBoardEntry;
