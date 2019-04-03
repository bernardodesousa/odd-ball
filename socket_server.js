var WebSocketServer = require('websocket').server;

function socketServer(httpServer) {
    wsServer = new WebSocketServer({
        httpServer: httpServer
    });

    wsServer.on('request', function(request) {
        console.log((new Date()) + ' Connection from origin ' + request.origin);

        var connection = request.accept(null, request.origin);

        // This is the most important callback for us, we'll handle
        // all messages from users here.
        connection.on('message', msg => {
            if (msg.type === 'utf8') {
                console.log(msg)
            }
        });

        connection.on('close', connection => {
            console.log("DISCONNECTED -> ", connection);
        });
    });
}

module.exports = socketServer;
