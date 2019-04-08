function calculatePosition(event) {
    let x = (event.pageX - event.currentTarget.offsetLeft) / event.currentTarget.clientWidth;
    let y = (event.pageY - event.currentTarget.offsetTop) / event.currentTarget.clientHeight;

    return [x, y];
}

export { calculatePosition };
