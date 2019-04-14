// mock addPlayer function
import addPlayer from './addPlayer.js';
jest.mock('./addPlayer.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// tested function
import addPlayers from './addPlayers.js';

let players = [
    undefined,
    { object: 1 },
    { object: 2 },
    { object: 3 },
    undefined
];

test("Add defined players", () => {
    addPlayers(players);
    expect(addPlayer).toHaveBeenCalledTimes(3);
    expect(addPlayer).toHaveBeenCalledWith(players[1]);
    expect(addPlayer).toHaveBeenCalledWith(players[2]);
    expect(addPlayer).toHaveBeenCalledWith(players[3]);
    expect(addPlayer).not.toHaveBeenCalledWith(players[0]);
    expect(addPlayer).not.toHaveBeenCalledWith(players[4]);

    expect(addPlayers).toBeInstanceOf(Function);
});
