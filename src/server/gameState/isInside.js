function isInside(a, b) {
    let d = Math.sqrt((a.center[0] - b.center[0])**2 + (a.center[1] - b.center[1])**2);

    if (b.radius >= d+a.radius) return true;
    return false;
}

module.exports = isInside;
