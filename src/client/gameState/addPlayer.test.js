let testPlayers = [
    {id: 0, coordinates: [0, 0], name: "A"},
    {id: 1, coordinates: [0, 0], name: "B"},
    {id: 2, coordinates: [0, 0], name: "C"},
    {id: 3, coordinates: [0, 0], name: "D"},
    {id: 4, coordinates: [0, 0], name: "E"},
    {id: 5, coordinates: [0, 0], name: "F"}
];

import * as GameState from './index.js';

GameState.getPlayers = jest.fn(() => {return testPlayers});
GameState.getArena = jest.fn(() => {return "mock_arena"});
GameState.getBoard = jest.fn(() => {return "mock_board"});

jest.mock('./index.js');

// mock isPresent function
import isPresent from './isPresent.js';
jest.mock('./isPresent.js', () => ({
    __esModule: true,
    default: jest.fn(() => {return false})
}));

// mock createAvatar function
import createAvatar from './createAvatar.js';
jest.mock('./createAvatar.js', () => ({
    __esModule: true,
    default: jest.fn(() => {return "mock_avatar"})
}));

// mock createLabel function
import createLabel from './createLabel.js';
jest.mock('./createLabel.js', () => ({
    __esModule: true,
    default: jest.fn(() => {return "mock_label"})
}));

// mock createBoardEntry function
import createBoardEntry from './createBoardEntry.js';
jest.mock('./createBoardEntry.js', () => ({
    __esModule: true,
    default: jest.fn(() => {return "mock_boardEntry"})
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

    let newPlayer = {
        id: 6,
        coordinates: [0.5, 0.6],
        name: "Aayla"
    }

    addPlayer(newPlayer);

    expect(GameState.getPlayers).toHaveBeenCalledTimes(1);
    expect(GameState.getArena).toHaveBeenCalledTimes(1);
    expect(isPresent).toHaveBeenCalledTimes(1);
    expect(isPresent).toHaveBeenCalledWith(6);
    expect(createAvatar).toHaveBeenCalledTimes(1);
    expect(createAvatar).toHaveBeenCalledWith("mock_arena", newPlayer);
    expect(createLabel).toHaveBeenCalledTimes(1);
    expect(createLabel).toHaveBeenCalledWith("mock_avatar", "Aayla");
    expect(GameState.getBoard).toHaveBeenCalledTimes(1);
    expect(createBoardEntry).toHaveBeenCalledTimes(1);
    expect(createBoardEntry).toHaveBeenCalledWith("mock_board", newPlayer);
    expect(setPlayerPosition).toHaveBeenCalledTimes(1);
    expect(setPlayerPosition).toHaveBeenCalledWith(6, newPlayer.coordinates);

    expect(testPlayers.length).toBe(7);
    expect(testPlayers[6].name).toBe("Aayla");
    expect(testPlayers[6].coordinates).toEqual([0.5, 0.6]);
    expect(testPlayers[6].avatar).toBe("mock_avatar");
    expect(testPlayers[6].label).toBe("mock_label");
    expect(testPlayers[6].boardEntry).toBe("mock_boardEntry");
});
