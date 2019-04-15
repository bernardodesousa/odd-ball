// mock send function
const send = jest.fn();

// mock getConnection
import * as m from '../connection/index.js';
m.getConnection = jest.fn(() => {return { send }});

// mock GameState.getStatus
import * as GameState from '../gameState/index.js';
GameState.getPlayer = jest.fn(() => {return 0});

// tested function
import * as s from './shoot.js';

describe("Shooting", () => {
    test("Player shoots", () => {

        let instruction = JSON.stringify({
            type: "shot",
            id: 0
        });
        
        s.shoot();
        expect(m.getConnection).toHaveBeenCalledTimes(1);
        expect(m.getConnection).toHaveBeenCalledWith();
        expect(GameState.getPlayer).toHaveBeenCalledTimes(1);
        expect(GameState.getPlayer).toHaveBeenCalledWith();
        expect(send).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledWith(instruction);
    });
});
