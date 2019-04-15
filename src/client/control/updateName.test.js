// mock send function
const send = jest.fn();

// mock getConnection
import * as m from '../connection/index.js';
m.getConnection = jest.fn(() => {return { send }});

// mock GameState.getStatus
import * as GameState from '../gameState/index.js';
GameState.getPlayer = jest.fn(() => {return 0});

// tested function
import updateName from './updateName.js';

describe("Update name", () => {
    test("Rey", () => {
        let name = "Rey";
        let instruction = JSON.stringify({
            type: "update-name",
            id: 0,
            name: name
        });

        updateName(name);
        expect(m.getConnection).toHaveBeenCalledTimes(1);
        expect(m.getConnection).toHaveBeenCalledWith();
        expect(GameState.getPlayer).toHaveBeenCalledTimes(1);
        expect(GameState.getPlayer).toHaveBeenCalledWith();
        expect(send).toHaveBeenCalledTimes(1);
        expect(send).toHaveBeenCalledWith(instruction);
    });

    test("Chewbacca", () => {
        let name = "Chewbacca";
        let instruction = JSON.stringify({
            type: "update-name",
            id: 0,
            name: name
        });

        updateName(name);
        expect(m.getConnection).toHaveBeenCalledTimes(2);
        expect(m.getConnection).toHaveBeenCalledWith();
        expect(GameState.getPlayer).toHaveBeenCalledTimes(2);
        expect(GameState.getPlayer).toHaveBeenCalledWith();
        expect(send).toHaveBeenCalledTimes(2);
        expect(send).toHaveBeenCalledWith(instruction);
    });
});
