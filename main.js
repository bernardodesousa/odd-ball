const staticServer = require('./server/HTTPServer');
const socketServer = require('./server/WebSocketServer');
const staticPort = process.argv[2] || 4242;

socketServer(staticServer(staticPort));
