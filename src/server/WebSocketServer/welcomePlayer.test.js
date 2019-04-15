let arenaSize = require("../config.js");
let broadcast = require('./broadcast.js');
let logPartySize = require("./logPartySize.js");
let attachEventFunctionsTo = require("./attachEventFunctionsTo.js");
let GameState = require("../gameState");

jest.mock("../config.js");
jest.mock('./broadcast.js');
jest.mock("./logPartySize.js");
jest.mock("./attachEventFunctionsTo.js");
jest.mock("../gameState");

GameState.addPlayer = jest.fn(() => {return "Yoda"});
GameState.getPlayers = jest.fn(() => {return "mock_player"});
GameState.getPlayer = jest.fn(() => {return {id: 0, name: "Yoda"}});
GameState.setCoordinates = jest.fn();
arenaSize.arenaSize = 500;

let send = jest.fn();
let accept = jest.fn(() => connection)
let connection = {send: send};
let connectionRequest = {
    accept: accept,
    origin: "mock_origin",
    remoteAddress: "mock_remoteAddress"
};

// capture console.log output
let log = "";
let storeLog = inputs => { log = inputs };
console["log"] = jest.fn(storeLog);

// tested function
const welcomePlayer = require("./welcomePlayer.js");

describe("Welcome new player", () => {
    let connections = [];

    test("First player", () => {
        welcomePlayer(connections, connectionRequest);
    
        expect(accept).toHaveBeenCalledTimes(1);
        expect(accept).toHaveBeenCalledWith(null, "mock_origin");
        expect(connections.length).toBe(1);
        expect(GameState.addPlayer).toHaveBeenCalledTimes(1);
        expect(GameState.addPlayer).toHaveBeenCalledWith(connections, 0);
        expect(GameState.setCoordinates).toHaveBeenCalledTimes(1);
        expect(GameState.setCoordinates).toHaveBeenCalledWith(0, [0.5, 0.5]);
        expect(attachEventFunctionsTo).toHaveBeenCalledTimes(1);
        expect(attachEventFunctionsTo).toHaveBeenCalledWith(connections, 0);
        expect(send).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledWith(JSON.stringify({
            "type": "welcome",
            "id": 0,
            "players": "mock_player",
            "arenaSize": 500
        }));
        expect(broadcast).toHaveBeenCalledTimes(1);
        expect(broadcast).toHaveBeenCalledWith(connections, {
            "type": "new-player",
            "player": {id: 0, name: "Yoda"}
        });
        expect(log).toBe("Welcome, Yoda from mock_remoteAddress");
        expect(logPartySize).toHaveBeenCalledTimes(1);
        expect(logPartySize).toHaveBeenCalledWith(connections);
    });
});
