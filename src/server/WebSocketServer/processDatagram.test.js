const movePlayer = require("./movePlayer.js");
const processShot = require("./processShot.js");
const updateName = require("./updateName.js");

jest.mock("./movePlayer.js");
jest.mock("./processShot.js");
jest.mock("./updateName.js");

const connections = "mock_connections";
const playerId = 0;
const datagram1 = {
    utf8Data: JSON.stringify({
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2,
        type: "pointer-enter"
    }),
    type: "utf8"
}
const datagram2 = {
    utf8Data: JSON.stringify({
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2,
        type: "coordinates"
    }),
    type: "utf8"
}
const datagram3 = {
    utf8Data: JSON.stringify({
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2,
        type: "shot",
        id: 7
    }),
    type: "utf8"
}
const datagram4 = {
    utf8Data: JSON.stringify({
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2,
        type: "update-name",
        id: 42,
        name: "Aayla Secura"
    }),
    type: "utf8"
}
const invalidDatagram1 = {
    utf8Data: JSON.stringify({
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2,
        type: "update-name"
    }),
    type: "utf8"
}
const invalidDatagram2 = {
    utf8Data: {
        at1: "at1",
        at2: "at2",
        number1: 1,
        number2: 2
    },
    type: "some_other_type"
}

// tested function
const processDatagram = require("./processDatagram.js");

describe("Test datagram processing", () => {
    test("Invalid datagram type", () => {
        processDatagram(connections, playerId, invalidDatagram2);
        expect(movePlayer).not.toHaveBeenCalled();
        expect(processShot).not.toHaveBeenCalled();
        expect(updateName).not.toHaveBeenCalled();
    });

    test("Type pointer-enter", () => {
        processDatagram(connections, playerId, datagram1);
        expect(movePlayer).not.toHaveBeenCalled();
        expect(processShot).not.toHaveBeenCalled();
        expect(updateName).not.toHaveBeenCalled();
    });

    test("Type coordinates", () => {
        processDatagram(connections, playerId, datagram2);
        expect(movePlayer).toHaveBeenCalledTimes(1);
        expect(movePlayer).toHaveBeenCalledWith(connections, playerId, JSON.parse(datagram2.utf8Data));
        expect(processShot).not.toHaveBeenCalled();
        expect(updateName).not.toHaveBeenCalled();
    });

    test("shot", () => {
        processDatagram(connections, playerId, datagram3);
        expect(movePlayer).toHaveBeenCalledTimes(1);
        expect(processShot).toHaveBeenCalledTimes(1);
        expect(processShot).toHaveBeenCalledWith(connections, 7);
        expect(updateName).not.toHaveBeenCalled();
    });

    test("update-name", () => {
        processDatagram(connections, playerId, datagram4);
        expect(movePlayer).toHaveBeenCalledTimes(1);
        expect(processShot).toHaveBeenCalledTimes(1);
        expect(updateName).toHaveBeenCalledTimes(1);
        expect(updateName).toHaveBeenCalledWith(connections, 42, "Aayla Secura");
    });

    test("Invalid message type", () => {
        processDatagram(connections, playerId, invalidDatagram2);
        expect(movePlayer).toHaveBeenCalledTimes(1);
        expect(processShot).toHaveBeenCalledTimes(1);
        expect(updateName).toHaveBeenCalledTimes(1);
    });
});
