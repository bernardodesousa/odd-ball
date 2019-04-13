import * as GameState from './index.js';
import isPresent from './isPresent.js';

GameState.getPlayers = jest.fn();
jest.mock('./index.js');

const testPlayers = [
    {id: 0, coordinates: [0, 0]},
    {id: 1, coordinates: [0, 0]},
    {id: 2, coordinates: [0, 0]},
    {id: 3, coordinates: [0, 0]},
    {id: 4, coordinates: [0, 0]},
    {id: 5, coordinates: [0, 0]}
];

GameState.getPlayers.mockReturnValue(testPlayers);

describe("Check if player is present", () => {
    test("Present player", () => {
        expect(isPresent(0)).toBe(true);
        expect(GameState.getPlayers).toHaveBeenCalledTimes(1);
    });

    test("Absent player", () => {
        expect(isPresent(6)).toBe(false);
        expect(GameState.getPlayers).toHaveBeenCalledTimes(2);
    });

    test("Test a bunch", () => {
        testPlayers.forEach(player => {
            expect(isPresent(player.id)).toBe(true);
        });

        expect(GameState.getPlayers).toHaveBeenCalledTimes(8);
    });
});
