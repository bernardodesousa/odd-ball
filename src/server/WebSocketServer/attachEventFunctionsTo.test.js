const processDatagram = require("./processDatagram.js");
const removePlayer = require("./removePlayer.js");

jest.mock("./processDatagram.js");
jest.mock("./removePlayer.js");

const on = jest.fn();

const connections = [
    {connected: true, on: on},
    {connected: true, on: on},
    {connected: false, on: on},
    {connected: true, on: on},
    {connected: true, on: on}
];

// tested function
const attachEventFunctionsTo = require("./attachEventFunctionsTo.js");

test("Attach event functions to connection", () => {
    attachEventFunctionsTo(connections, 3);
    expect(on).toHaveBeenCalledTimes(2);
    expect(on).toHaveBeenCalledWith('message', expect.any(Function));
    expect(on).toHaveBeenCalledWith('close', expect.any(Function));
});
