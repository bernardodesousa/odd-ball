let countPlayers = require('./countPlayers.js');
jest.mock('./countPlayers.js');

const connections = "mock_connections";

countPlayers.mockReturnValueOnce(0);
countPlayers.mockReturnValueOnce(1);
countPlayers.mockReturnValueOnce(2);
countPlayers.mockReturnValueOnce(3);
countPlayers.mockReturnValueOnce(4);
countPlayers.mockReturnValueOnce(5);

// tested function
const logPartySize = require("./logPartySize.js");

let outputData = "";
let storeLog = inputs => {outputData = inputs};
console["log"] = jest.fn(storeLog);

describe("Log party size", () => {
    test("No players", () => {
        logPartySize(connections);
        expect(outputData).toBe("No players");
        expect(countPlayers).toHaveBeenCalledTimes(1);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });

    test("1 player", () => {
        logPartySize(connections);
        expect(outputData).toBe("1 player");
        expect(countPlayers).toHaveBeenCalledTimes(2);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });

    test("2 players", () => {
        logPartySize(connections);
        expect(outputData).toBe("2 players");
        expect(countPlayers).toHaveBeenCalledTimes(3);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });

    test("3 players", () => {
        logPartySize(connections);
        expect(outputData).toBe("3 players");
        expect(countPlayers).toHaveBeenCalledTimes(4);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });

    test("4 players", () => {
        logPartySize(connections);
        expect(outputData).toBe("4 players");
        expect(countPlayers).toHaveBeenCalledTimes(5);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });

    test("5 players", () => {
        logPartySize(connections);
        expect(outputData).toBe("5 players");
        expect(countPlayers).toHaveBeenCalledTimes(6);
        expect(countPlayers).toHaveBeenCalledWith(connections);
    });
});
