import calculatePosition from './calculatePosition.js';

describe("Calculate avatar position based on mouse event", () => {
    test("Click on up left corner", () => {
        let event = {
            pageX: 100,
            pageY: 100,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };

        expect(calculatePosition(event)).toEqual([0, 0]);
    });

    test("Click on down left corner", () => {
        let event = {
            pageX: 100,
            pageY: 500,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };

        expect(calculatePosition(event)).toEqual([0, 1]);
    });

    test("Click on up right corner", () => {
        let event = {
            pageX: 500,
            pageY: 100,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };

        expect(calculatePosition(event)).toEqual([1, 0]);
    });

    test("Click on bottom right corner", () => {
        let event = {
            pageX: 500,
            pageY: 500,
            currentTarget: {
                offsetLeft: 100,
                offsetTop: 100,
                clientWidth: 400,
                clientHeight: 400
            }
        };

        expect(calculatePosition(event)).toEqual([1, 1]);
    });

    test("Click on center", () => {
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

        expect(calculatePosition(event)).toEqual([0.5, 0.5]);
    });
});
