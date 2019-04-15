const broadcast = require("./broadcast.js");
const logPartySize = require("./logPartySize.js");
const GameState = require("../gameState");

jest.mock("./broadcast.js");
jest.mock("./logPartySize.js");
jest.mock("../gameState")

GameState.removePlayer = jest.fn();

const connections = "mock_connections";

// tested function
const removePlayer = require("./removePlayer.js");

test("Remove player", () => {
    removePlayer(connections, 0);
    expect(GameState.removePlayer).toHaveBeenCalledTimes(1);
    expect(GameState.removePlayer).toHaveBeenCalledWith(0);
    expect(broadcast).toHaveBeenCalledTimes(1);
    expect(broadcast).toHaveBeenCalledWith(connections, {type: "player-left", id: 0});
    expect(logPartySize).toHaveBeenCalledTimes(1);
    expect(logPartySize).toHaveBeenCalledWith(connections);
});
