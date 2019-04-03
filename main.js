const staticServer = require('./static_server');
const socketServer = require('./socket_server');
const staticPort = process.argv[2] || 3000;
const socketPort = process.argv[3] || 3001;

socketServer(staticServer(staticPort));
