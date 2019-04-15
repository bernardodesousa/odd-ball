let broadcast = require('./broadcast.js');
jest.mock('./broadcast.js');

let GameState = require("../gameState");
jest.mock("../gameState");

const send = "mock_send";
const connections = "mock_connections";
const playerId = 0;
const input = {coordinates: "mock_coordinates"};

// tested function
const movePlayer = require("./movePlayer.js");

test("Move player", () => {
    expect(movePlayer(connections, playerId, input)).toBe();
    expect(GameState.setCoordinates).toHaveBeenCalledTimes(1);
    expect(GameState.setCoordinates).toHaveBeenCalledWith(playerId, input.coordinates);

    expect(broadcast).toHaveBeenCalledTimes(1);
    expect(broadcast).toHaveBeenCalledWith(connections, {
        id: playerId,
        type: "move-player",
        coordinates: input.coordinates
    });
});
