// tested function
import setPlayerName from './setPlayerName.js';

// mock players
let mockPlayers = [
    {id: 0, kills: 1, deaths: 0, radius: 10, alive: true, coordinates: [0.5, 0.5], name: "Aayla"},
    {id: 1, kills: 2, deaths: 1, radius: 20, alive: true, coordinates: [0.1, 0.1], name: "River Tam"},
    {id: 2, kills: 3, deaths: 0, radius: 15, alive: true, coordinates: [0.2, 0.2], name: "Ripley"},
    {id: 3, kills: 4, deaths: 3, radius: 12, alive: false, coordinates: [0.3, 0.3], name: "Trinity"},
    {id: 4, kills: 5, deaths: 6, radius: 18, alive: true, coordinates: [0.4, 0.4], name: "Spock"},
    {id: 5, kills: 6, deaths: 3, radius: 7, alive: true, coordinates: [0.5, 0.1], name: "Padmé"}
];

// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

// mock DOM elements
mockPlayers.forEach(p => {
    p.label = document.createElement("p");
    p.boardEntry = document.createElement("p");
});

// mock getPlayers
import * as GameState from './index.js';
GameState.getPlayers = jest.fn(() => {return mockPlayers});
jest.mock('./index.js');

describe("Set player name", () => {
    test("Change name", () => {
        setPlayerName(0, "Ada Lovelace");
        setPlayerName(5, "Albert Einstein");
        expect(mockPlayers[0].name).toBe("Ada Lovelace");
        expect(mockPlayers[0].label.toString()).toBe("[object HTMLParagraphElement]");
        expect(mockPlayers[0].label.innerText).toBe("Ada Lovelace");
        expect(mockPlayers[0].boardEntry.innerText).toBe("Ada Lovelace: 1");
        expect(mockPlayers[5].boardEntry.innerText).toBe("Albert Einstein: 3");

        expect(setPlayerName).toBeInstanceOf(Function);
    });
});
