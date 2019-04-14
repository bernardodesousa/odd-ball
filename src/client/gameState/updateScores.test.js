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

    p.boardEntry = document.createElement("p");
    p.boardEntry.innerText = "";
});

// Mock GameState module
import * as GameState from './index.js';
GameState.getPlayers = jest.fn(() => { return mockPlayers });
jest.mock('./index.js');

// tested function
import updateScores from './updateScores.js';
import { importDefaultSpecifier } from "@babel/types";

describe("Update scores", () => {
    test("Initial values", () => {
        updateScores(mockPlayers);
    
        expect(mockPlayers[0].boardEntry.innerText).toBe("Aayla: 1");
        expect(mockPlayers[1].boardEntry.innerText).toBe("River Tam: 1");
        expect(mockPlayers[2].boardEntry.innerText).toBe("Ripley: 3");
        expect(mockPlayers[3].boardEntry.innerText).toBe("Trinity: 1");
        expect(mockPlayers[4].boardEntry.innerText).toBe("Spock: -1");
        expect(mockPlayers[5].boardEntry.innerText).toBe("Padmé: 3");
    });

    test("+1 kill to everyone", () => {
        mockPlayers.forEach(p => {
            p.kills++;
        });

        updateScores(mockPlayers);

        expect(mockPlayers[0].boardEntry.innerText).toBe("Aayla: 2");
        expect(mockPlayers[1].boardEntry.innerText).toBe("River Tam: 2");
        expect(mockPlayers[2].boardEntry.innerText).toBe("Ripley: 4");
        expect(mockPlayers[3].boardEntry.innerText).toBe("Trinity: 2");
        expect(mockPlayers[4].boardEntry.innerText).toBe("Spock: 0");
        expect(mockPlayers[5].boardEntry.innerText).toBe("Padmé: 4");
    });

    test("+10 kills to River Tam", () => {
        mockPlayers[1].kills += 10;

        updateScores(mockPlayers);

        expect(mockPlayers[0].boardEntry.innerText).toBe("Aayla: 2");
        expect(mockPlayers[1].boardEntry.innerText).toBe("River Tam: 12");
        expect(mockPlayers[2].boardEntry.innerText).toBe("Ripley: 4");
        expect(mockPlayers[3].boardEntry.innerText).toBe("Trinity: 2");
        expect(mockPlayers[4].boardEntry.innerText).toBe("Spock: 0");
        expect(mockPlayers[5].boardEntry.innerText).toBe("Padmé: 4");
    });

    test("+5 deaths to everyone", () => {
        mockPlayers.forEach(p => {
            p.deaths += 5;
        });

        updateScores(mockPlayers);

        expect(mockPlayers[0].boardEntry.innerText).toBe("Aayla: -3");
        expect(mockPlayers[1].boardEntry.innerText).toBe("River Tam: 7");
        expect(mockPlayers[2].boardEntry.innerText).toBe("Ripley: -1");
        expect(mockPlayers[3].boardEntry.innerText).toBe("Trinity: -3");
        expect(mockPlayers[4].boardEntry.innerText).toBe("Spock: -5");
        expect(mockPlayers[5].boardEntry.innerText).toBe("Padmé: -1");
    });

    test("Spock is killed", () => {
        mockPlayers[4].alive = false;
        updateScores(mockPlayers);
        expect(mockPlayers[0].avatar.classList).not.toContain("dead");
        expect(mockPlayers[1].avatar.classList).not.toContain("dead");
        expect(mockPlayers[2].avatar.classList).not.toContain("dead");
        expect(mockPlayers[3].avatar.classList).toContain("dead");
        expect(mockPlayers[4].avatar.classList).toContain("dead");
        expect(mockPlayers[5].avatar.classList).not.toContain("dead");
    });

    test("Ripley is killed", () => {
        mockPlayers[2].alive = false;
        updateScores(mockPlayers);
        expect(mockPlayers[0].avatar.classList).not.toContain("dead");
        expect(mockPlayers[1].avatar.classList).not.toContain("dead");
        expect(mockPlayers[2].avatar.classList).toContain("dead");
        expect(mockPlayers[3].avatar.classList).toContain("dead");
        expect(mockPlayers[4].avatar.classList).toContain("dead");
        expect(mockPlayers[5].avatar.classList).not.toContain("dead");
    });
});
