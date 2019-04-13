import { setPlayer, getPlayer, setDocument, addPlayer, removePlayer } from './index.js';

describe('GameState', () => {
    let players = [
        {id: 0, coordinates: [0, 0]},
        {id: 1, coordinates: [0, 0]},
        {id: 2, coordinates: [0, 0]},
        {id: 3, coordinates: [0, 0]},
        {id: 4, coordinates: [0, 0]},
        {id: 5, coordinates: [0, 0]}
    ];

    test('Set/get player index', () => {
        setPlayer(0);
        expect(getPlayer()).toBe(0);

        setPlayer(7);
        expect(getPlayer()).toBe(7);

        setPlayer(9);
        expect(getPlayer()).toBe(9);
    });

    // test("Remove player individually", () => {
    //     document.body.innerHTML = `<div id="arena"><div id="0"></div><div id="1"></div><div id="2"></div></div>`;
    //     setDocument(document);
    //     removePlayer('2');
    //     expect(document.getElementById("arena").childNodes.length).toBe(2);
    // });

    // test("Remove player individually", () => {
    //     document.body.innerHTML = `<div id="arena"><div id="0"></div><div id="1"></div><div id="2"></div></div>`;
    //     setDocument(document);
    //     removePlayer('0');
    //     removePlayer('1');
    //     removePlayer('2');
    //     expect(document.getElementById("arena").childNodes.length).toBe(0);
    // });
});
