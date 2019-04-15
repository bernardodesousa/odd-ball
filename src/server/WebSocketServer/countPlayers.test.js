const countPlayers = require("./countPlayers.js");

const connections = [
    {connected: true},
    {connected: true},
    {connected: false},
    {connected: true},
    {connected: true}
];

test("Count 4 players, 1 disconnected", () => {
    expect(countPlayers(connections)).toBe(4);
});
