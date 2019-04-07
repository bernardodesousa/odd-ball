const staticServer = require('./server/static_server');
const socketServer = require('./server/socket_server');
const staticPort = process.argv[2] || 4242;

socketServer(staticServer(staticPort));
