const staticServer = require('./static_server');
const socketServer = require('./socket_server');
const staticPort = process.argv[2] || 3001;

socketServer(staticServer(staticPort));
