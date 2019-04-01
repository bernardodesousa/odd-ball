const staticServer = require('./static_server');
const port = process.argv[2] || 3000;

staticServer(port);
