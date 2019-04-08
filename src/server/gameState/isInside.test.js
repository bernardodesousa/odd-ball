const isInside = require("./isInside.js");

describe('Is circle A inside circle B?', () => {
    test('Equal circles', () => {
        expect(isInside(
            {
                center: [0, 0],
                radius: 1
            },
            {
                center: [0, 0],
                radius: 1
            }
        )).toBe(true);
    });

    test('Same size, different positions 1', () => {
        expect(isInside(
            {
                center: [0, 0.5],
                radius: 1
            },
            {
                center: [0, 0],
                radius: 1
            }
        )).toBe(false);
    });

    test('Same size, different positions 2', () => {
        expect(isInside(
            {
                center: [0.5, 0],
                radius: 1
            },
            {
                center: [0, 0],
                radius: 1
            }
        )).toBe(false);
    });

    test('Different sizes, inside', () => {
        expect(isInside(
            {
                center: [1, 1],
                radius: 1
            },
            {
                center: [1, 1],
                radius: 2
            }
        )).toBe(true);
    });

    test('Different sizes, outside', () => {
        expect(isInside(
            {
                center: [4, 4],
                radius: 1
            },
            {
                center: [1, 1],
                radius: 3
            }
        )).toBe(false);
    });

    test('Different sizes, crossing', () => {
        expect(isInside(
            {
                center: [4, 3],
                radius: 1
            },
            {
                center: [1, 1],
                radius: 3
            }
        )).toBe(false);
    });

    test('Different sizes, inside, touching lines', () => {
        expect(isInside(
            {
                center: [0, 2],
                radius: 1
            },
            {
                center: [0, 0],
                radius: 3
            }
        )).toBe(true);
    });
});
