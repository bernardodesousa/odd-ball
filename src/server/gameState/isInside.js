function isInside(a, b) {
    let distancia = Math.sqrt(Math.pow((b.center[0] - a.center[0]),2) + Math.pow(b.center[1] - a.center[1],2));

    if((b.radius - a.radius) >=  distancia)
        return true;
        else return false;
    
}

module.exports = isInside;
