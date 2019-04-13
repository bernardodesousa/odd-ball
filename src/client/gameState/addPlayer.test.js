import addPlayer from './addPlayer.js';

let players = [
    {id: 0, coordinates: [0, 0]},
    {id: 1, coordinates: [0, 0]},
    {id: 2, coordinates: [0, 0]},
    {id: 3, coordinates: [0, 0]},
    {id: 4, coordinates: [0, 0]},
    {id: 5, coordinates: [0, 0]}
];

test("Add players individually", () => {
    document.body.innerHTML = `<div id="arena"></div>`;
    setDocument(document);
    players.forEach(player => {
        addPlayer(player);
    })

    expect(document.getElementById("arena").childNodes.length).toBe(players.length);
});
