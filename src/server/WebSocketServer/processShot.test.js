const GameState = require("../gameState");
const broadcast = require("./broadcast.js");

jest.mock("../gameState");
jest.mock("./broadcast.js");

const players = [
    {id: 0, name: "Aayla"},
    {id: 1, name: "Padmé"},
    {id: 2, name: "Leia"},
]

GameState.evaluateShot = jest.fn();
GameState.getPlayers = jest.fn(() => {return players});

const connections = "mock_connections";

GameState.evaluateShot.mockReturnValueOnce(false);
GameState.evaluateShot.mockReturnValueOnce(true);

// tested function
const processShot = require("./processShot.js");

describe("Process shot", () => {
    test("At least one kill", () => {
        processShot(connections, 0);
        expect(GameState.getPlayers).toHaveBeenCalledTimes(1);
        expect(GameState.getPlayers).toHaveBeenCalledWith();
        expect(GameState.evaluateShot).toHaveBeenCalledTimes(1);
        expect(GameState.evaluateShot).toHaveBeenCalledWith(connections, players, 0);
        expect(broadcast).not.toHaveBeenCalled();
    });

    test("Miss", () => {
        processShot(connections, 1);
        expect(GameState.getPlayers).toHaveBeenCalledTimes(3);
        expect(GameState.getPlayers).toHaveBeenCalledWith();
        expect(GameState.evaluateShot).toHaveBeenCalledTimes(2);
        expect(GameState.evaluateShot).toHaveBeenCalledWith(connections, players, 1);
        expect(broadcast).toHaveBeenCalledTimes(1);
        expect(broadcast).toHaveBeenCalledWith(connections, {
            "type": "update-score",
            "players": players
        });
    });
});
