const HTTPServer = require('./src/server/HTTPServer.js');
const socketServer = require('./src/server/WebSocketServer/create.js');
const port = process.argv[2] || 4242;

socketServer(HTTPServer(port));
