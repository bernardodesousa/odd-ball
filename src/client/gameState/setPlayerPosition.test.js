// Mock players
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
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;
global.Element = dom.Element;
let arena = document.createElement("div");
arena.id = "arena";
arena.style.width = arena.style.height = "500px";
arena.getBoundingClientRect = jest.fn(() => {
    return {
        width: 500,
        height: 500,
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});

document.body.appendChild(arena);

mockPlayers.forEach(p => {
    p.avatar = document.createElement("div");
    p.avatar.id = p.id;
    p.avatar.style.width = p.avatar.style.height = p.radius*2;
    p.avatar.style.top = ((500 * 0.5 + arena.getBoundingClientRect().top) - p.avatar.clientHeight/2) + "px";
    p.avatar.style.left = ((500 * 0.5 + arena.getBoundingClientRect().left) - p.avatar.clientHeight/2) + "px";
});

// Mock GameState module
import * as GameState from './index.js';
GameState.getPlayers = jest.fn(() => { return mockPlayers });
GameState.getArena = jest.fn(() => { return arena });
jest.mock('./index.js');

// tested function
import setPlayerPosition from './setPlayerPosition.js';

describe("Set player position", () => {
    test("Move Aayla to up left corner", () => {
        setPlayerPosition(0, [0, 0]);
        expect(mockPlayers[0].avatar.style.top).toBe("0px");
        expect(mockPlayers[0].avatar.style.left).toBe("0px");
    });

    test("Move River Tam to bottom right corner", () => {
        setPlayerPosition(1, [1, 1]);
        expect(mockPlayers[1].avatar.style.top).toBe("500px");
        expect(mockPlayers[1].avatar.style.left).toBe("500px");
    });

    test("Move Padmé to bottom left corner", () => {
        setPlayerPosition(5, [0, 1]);
        expect(mockPlayers[5].avatar.style.top).toBe("500px");
        expect(mockPlayers[5].avatar.style.left).toBe("0px");
    });
});
