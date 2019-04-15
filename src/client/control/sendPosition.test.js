// mock send function
const send = jest.fn();

// mock getConnection
import * as m from '../connection/index.js';
m.getConnection = jest.fn(() => {return { send }});

// mock GameState.getStatus
import * as GameState from '../gameState/index.js';

import calculatePosition from './calculatePosition.js';
jest.mock('./calculatePosition.js', () => ({
    __esModule: true,
    default: jest.fn(() => { return [0.5, 0.5] })
}));

// tested function
import * as s from './sendPosition.js';

describe("Send position", () => {
    test("Ready player", () => {
        let event = {
            pageX: 300,
            pageY: 300,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };
    
        let instruction = JSON.stringify({
            type: "coordinates",
            coordinates: [0.5, 0.5]
        });
    
        GameState.getStatus = jest.fn().mockImplementationOnce(() => {return "ready"});
        s.sendPosition(event);
        expect(m.getConnection).toHaveBeenCalledTimes(1);
        expect(GameState.getStatus).toHaveBeenCalledTimes(1);
        expect(calculatePosition).toHaveBeenCalledTimes(1);
        expect(calculatePosition).toHaveBeenCalledWith(event);
        expect(send).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledWith(instruction);
    });

    test("Dead player", () => {
        let event = {
            pageX: 300,
            pageY: 300,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };
    
        let instruction = JSON.stringify({
            type: "coordinates",
            coordinates: [0.5, 0.5]
        });
    
        GameState.getStatus = jest.fn().mockImplementationOnce(() => {return "dead"});
        s.sendPosition(event);
        expect(m.getConnection).toHaveBeenCalledTimes(1);
        expect(GameState.getStatus).toHaveBeenCalledTimes(1);
        expect(calculatePosition).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledTimes(1);
    });
});
