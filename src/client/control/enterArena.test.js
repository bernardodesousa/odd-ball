// mock send function
const send = jest.fn();

// mock getConnection
import * as m from '../connection/index.js';
m.getConnection = jest.fn(() => {return { send }});

// tested function
import enterArena from './enterArena.js';

test("Enter arena", () => {
    enterArena();
    expect(m.getConnection).toHaveBeenCalledTimes(1);
    expect(send).toHaveBeenCalledWith(JSON.stringify({
        type: "pointer-enter"
    }));
});
