function broadcast(connections, msg){    
    for (let i=0; i<connections.length; i++) {
        if (connections[i].connected){
            connections[i].send(JSON.stringify(msg));
        }
    }
}

module.exports = broadcast;
