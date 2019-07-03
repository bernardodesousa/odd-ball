/**
 * @param {*} event
 *  - Calculate relative position (float from 0 to 1),
 *    based on mouse position, arena size and arena offset
 * @returns array with x and y coordinates.
 * @exports calculatePosition
 */

function calculatePosition(event) {
    let x = (event.pageX - event.currentTarget.offsetLeft) / event.currentTarget.clientWidth;
    let y = (event.pageY - event.currentTarget.offsetTop) / event.currentTarget.clientHeight;

    return [x, y];
}

export default calculatePosition;
