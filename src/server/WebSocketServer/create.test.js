
const WS = require('websocket');
jest.mock("websocket");

const on = jest.fn();
WS.server = jest.fn(() => {return {"on": on}});

const WebSocketServer = WS.server;
const HTTPServer = "mock_HTTPServer";

let welcomePlayer = require("./welcomePlayer.js");
jest.mock("./welcomePlayer.js");
welcomePlayer = jest.fn();

// tested module
const socketServer = require("./create.js");

test("Create socket", () => {
    socketServer(HTTPServer);
    expect(WebSocketServer).toHaveBeenCalled();
    expect(WebSocketServer).toHaveBeenCalledWith({"httpServer": "mock_HTTPServer"});
    expect(on).toHaveBeenCalled();
    expect(on).toHaveBeenCalledWith("request", expect.any(Function));
});
