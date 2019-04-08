const HTTPServer = require('./src/server/HTTPServer');
const socketServer = require('./src/server/WebSocketServer');
const port = process.argv[2] || 4242;

socketServer(HTTPServer(port));
