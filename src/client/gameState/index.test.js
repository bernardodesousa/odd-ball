let mockPlayers = [
    {id: 0, kills: 1, deaths: 0, radius: 10, alive: true, coordinates: [0.5, 0.5], name: "Aayla"},
    {id: 1, kills: 2, deaths: 1, radius: 20, alive: true, coordinates: [0.1, 0.1], name: "River Tam"},
    {id: 2, kills: 3, deaths: 0, radius: 15, alive: true, coordinates: [0.2, 0.2], name: "Ripley"},
    {id: 3, kills: 4, deaths: 3, radius: 12, alive: false, coordinates: [0.3, 0.3], name: "Trinity"},
    {id: 4, kills: 5, deaths: 6, radius: 18, alive: true, coordinates: [0.4, 0.4], name: "Spock"},
    {id: 5, kills: 6, deaths: 3, radius: 7, alive: true, coordinates: [0.5, 0.1], name: "Padmé"}
];

// tested module
import * as GameState from './index.js';

// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM();
global.document = dom.window.document;
global.window = dom.window;

// set player avatars
mockPlayers.forEach((p, i) => {
    let avatar = document.createElement("div");
    avatar.id = i;
    avatar.classList.add("player");
    if (!p.alive)
        avatar.classList.add("dead");
    
    p.avatar = avatar;
});

// mock control/updateName function
// @in name:string
import updateName from '../control/updateName.js';
jest.mock('../control/updateName.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock addPlayer function
// @in player
import addPlayer from './addPlayer.js';
jest.mock('./addPlayer.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock setPlayerPosition function
// @in id, coordinates
import setPlayerPosition from './setPlayerPosition.js';
jest.mock('./setPlayerPosition.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock updateScores function
// @in scores:player[]
import updateScores from './updateScores.js';
jest.mock('./updateScores.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock setPlayerName function
// @in id:number, name:string
import setPlayerName from './setPlayerName.js';
jest.mock('./setPlayerName.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock setPlayers function
// @in players:player[]
import addPlayers from './addPlayers.js';
jest.mock('./addPlayers.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

describe('GameState', () => {
    let arena = document.createElement("div");
    let board = document.createElement("div");
    let changeNameButton = document.createElement("button");
    arena.id = "arena";
    board.id = "board";
    changeNameButton.id = "changeNameButton";
    document.body.appendChild(arena);
    document.body.appendChild(board);
    document.body.appendChild(changeNameButton);

    test('Exports', () => {
        expect(GameState.setPlayer).toBeInstanceOf(Function);
        expect(GameState.getPlayer).toBeInstanceOf(Function);
        expect(GameState.setPlayerPosition).toBe(setPlayerPosition);
        expect(GameState.setPlayers).toBeInstanceOf(Function);
        expect(GameState.addPlayers).toBe(addPlayers);
        expect(GameState.addPlayer).toBe(addPlayer);
        expect(GameState.removePlayer).toBeInstanceOf(Function);
        expect(GameState.setDOMPointers).toBeInstanceOf(Function);
        expect(GameState.getPlayers).toBeInstanceOf(Function);
        expect(GameState.updateScores).toBe(updateScores);
        expect(GameState.getStatus).toBeInstanceOf(Function);
        expect(GameState.revivePlayer).toBeInstanceOf(Function);
        expect(GameState.resizePlayer).toBeInstanceOf(Function);
        expect(GameState.setEventListeners).toBeInstanceOf(Function);
        expect(GameState.setPlayerName).toBe(setPlayerName);
        expect(GameState.setArenaSize).toBeInstanceOf(Function);
        expect(GameState.getBoard).toBeInstanceOf(Function);
        expect(GameState.getArena).toBeInstanceOf(Function);
    });

    test('Set references to DOM', () => {
        const spy = jest.spyOn(document, 'getElementById');

        GameState.setDOMPointers();

        expect(spy).toHaveBeenCalledTimes(3);
        expect(spy).toHaveBeenCalledWith("scoreBoard");
        expect(spy).toHaveBeenCalledWith("arena");
        expect(spy).toHaveBeenCalledWith("changeNameInput");
    });
    
    test("Get board", () => {
        expect(GameState.getBoard()).toBe(document.getElementById("scoreBoard"));
    });
    
    test("Get arena", () => {
        expect(GameState.getArena()).toBe(document.getElementById("arena"));
    });

    test('Set event listeners', () => {
        const spy = jest.spyOn(document, 'getElementById');
        GameState.setEventListeners();
        expect(spy).toHaveBeenCalledTimes(6);
        expect(document.getElementById("changeNameButton").onclick).toBeInstanceOf(Function);
    });

    test('Set/get player index', () => {
        GameState.setPlayer(0);
        expect(GameState.getPlayer()).toBe(0);

        GameState.setPlayer(7);
        expect(GameState.getPlayer()).toBe(7);

        GameState.setPlayer(9);
        expect(GameState.getPlayer()).toBe(9);
    });

    test('Get players', () => {
        expect(GameState.getPlayers()).toEqual([]);
    });

    test("Remove player individually", () => {
        document.body.innerHTML = `<div id="arena"><div id="0"></div><div id="1"></div><div id="2"></div></div>`;
        GameState.removePlayer("2");
        expect(document.getElementById("arena").childNodes.length).toBe(2);
    });

    test('Get ready player status', () => {
        GameState.setPlayers(mockPlayers);
        GameState.setPlayer(0);
        expect(GameState.getStatus()).toBe("ready");
    });

    test('Get dead player status', () => {
        GameState.setPlayer(3);
        expect(GameState.getStatus()).toBe("dead");
    });

    test('Revive player', () => {
        expect(mockPlayers[3].avatar.classList).toContain("dead");
        GameState.revivePlayer(3);
        expect(GameState.getStatus()).toBe("ready");
        expect(mockPlayers[3].avatar.classList).not.toContain("dead");
    });

    test('Resize player', () => {
        expect(mockPlayers[3].radius).toBe(12);
        GameState.resizePlayer(3, 9);
        expect(mockPlayers[3].radius).toBe(9);
        expect(mockPlayers[3].avatar.style.width).toBe("18px");
        expect(mockPlayers[3].avatar.style.height).toBe("18px");
    });

    test('Set arena size', () => {
        GameState.setArenaSize(500);
        expect(arena.style.width).toBe("500px");
        GameState.setArenaSize(1000);
        expect(arena.style.width).toBe("1000px");
    });
});
