// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

// tested function
import createBoardEntry from './createBoardEntry.js';

describe('Add board entry to DOM', () => {
    let board = document.createElement("div");
    board.id = "board";
    document.body.appendChild(board);

    let testPlayers = [
        {id: 0, kills: 1, deaths: 0, radius: 10, alive: true, coordinates: [0.5, 0.5], name: "Aayla"},
        {id: 1, kills: 2, deaths: 1, radius: 20, alive: true, coordinates: [0.1, 0.1], name: "River Tam"},
        {id: 2, kills: 3, deaths: 0, radius: 15, alive: true, coordinates: [0.2, 0.2], name: "Ripley"},
        {id: 3, kills: 4, deaths: 3, radius: 12, alive: false, coordinates: [0.3, 0.3], name: "Trinity"},
        {id: 4, kills: 5, deaths: 6, radius: 18, alive: true, coordinates: [0.4, 0.4], name: "Spock"},
        {id: 5, kills: 6, deaths: 3, radius: 7, alive: true, coordinates: [0.5, 0.1], name: "Padmé"}
    ];

    let entries = [];

    test("Add several board entries", () => {

        testPlayers.forEach((player, i) => {
            let result = createBoardEntry(board, player);
            if (result) entries[i] = result;
        });

        expect(entries[0].innerText).toBe("Aayla: 1");
        expect(entries[1].innerText).toBe("River Tam: 1");
        expect(entries[2].innerText).toBe("Ripley: 3");
        expect(entries[3].innerText).toBe("Trinity: 1");
        expect(entries[4].innerText).toBe("Spock: -1");
        expect(entries[5].innerText).toBe("Padmé: 3");

        expect(document.getElementById("board").childNodes.length).toBe(6);
    });
});
