const GameState = require("../gameState");
const broadcast = require("../WebSocketServer/broadcast.js");

GameState.setName = jest.fn();

const connections = "mock_connections";
const id = 19;
const name = "River Tam";

jest.mock("../gameState");
jest.mock("../WebSocketServer/broadcast");

// tested function
const updateName = require("./updateName.js");

test("Update name", () => {
    updateName(connections, id, name);
    expect(GameState.setName).toHaveBeenCalledTimes(1);
    expect(GameState.setName).toHaveBeenCalledWith(id, name);
    expect(broadcast).toHaveBeenCalledTimes(1);
    expect(broadcast).toHaveBeenCalledWith(connections, {
        "type": "update-name",
        "id": id,
        "name": name
    });
});
