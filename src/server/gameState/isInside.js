function isInside(a, b) {
    let distancia;
    if(a.center[1] >= b.center[1])
        distancia = Math.sqrt(Math.pow((a.center[0] - b.center[0]),2) + Math.pow(a.center[1] - b.center[1],2));
    else
        distancia = Math.sqrt(Math.pow((b.center[0] - a.center[0]),2) + Math.pow(b.center[1] - a.center[1],2)); 
    
    if(a.radius >= b.radius){
        if((a.radius - b.radius) >=  distancia)
            return true;  
            else return false;
        }
    else{
        if((b.radius - a.radius) >=  distancia)
            return true;  
        else return false;
        }    

}

module.exports = isInside;
