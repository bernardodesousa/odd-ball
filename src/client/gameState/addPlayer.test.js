import * as GameState from './index.js';
GameState.getPlayers = jest.fn();
GameState.getArena = jest.fn();
GameState.getBoard = jest.fn();
jest.mock('./index.js');

let testPlayers = [
    {id: 0, coordinates: [0, 0], name: "A"},
    {id: 1, coordinates: [0, 0], name: "B"},
    {id: 2, coordinates: [0, 0], name: "C"},
    {id: 3, coordinates: [0, 0], name: "D"},
    {id: 4, coordinates: [0, 0], name: "E"},
    {id: 5, coordinates: [0, 0], name: "F"}
];

GameState.getPlayers.mockReturnValue(testPlayers);

// mock isPresent function
import isPresent from './isPresent.js';
jest.mock('./isPresent.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock createAvatar function
import createAvatar from './createAvatar.js';
jest.mock('./createAvatar.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock createLabel function
import createLabel from './createLabel.js';
jest.mock('./createLabel.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock createBoardEntry function
import createBoardEntry from './createBoardEntry.js';
jest.mock('./createBoardEntry.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// mock createBoardEntry function
import setPlayerPosition from './setPlayerPosition.js';
jest.mock('./setPlayerPosition.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// tested function
import addPlayer from './addPlayer.js';

test("Add players individually", () => {

    addPlayer({
        id: 6,
        coordinates: [0.5, 0.6],
        name: "Aayla"
    });

    expect(GameState.getPlayers).toHaveBeenCalledTimes(1);
    expect(GameState.getArena).toHaveBeenCalledTimes(1);
    expect(isPresent).toHaveBeenCalledTimes(1);
    expect(createAvatar).toHaveBeenCalledTimes(1);
    expect(createLabel).toHaveBeenCalledTimes(1);
    expect(GameState.getBoard).toHaveBeenCalledTimes(1);
    expect(createBoardEntry).toHaveBeenCalledTimes(1);
    expect(setPlayerPosition).toHaveBeenCalledTimes(1);

    expect(testPlayers.length).toBe(7);
    expect(testPlayers[6].name).toBe("Aayla");
    expect(testPlayers[6].coordinates).toEqual([0.5, 0.6]);
});
