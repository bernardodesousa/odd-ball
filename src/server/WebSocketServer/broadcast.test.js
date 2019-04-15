const broadcast = require("./broadcast.js");

const send = jest.fn();

const connections = [
    {connected: true, send: send},
    {connected: true, send: send},
    {connected: false, send: send},
    {connected: true, send: send},
    {connected: true, send: send}
];

const msg = {
    p1: "mock_1",
    p2: "mock_2",
}

test("Broadcast", () => {
    broadcast(connections, msg);

    expect(send).toHaveBeenCalledTimes(4);
    expect(send).toHaveBeenCalledWith(JSON.stringify(msg));
});
