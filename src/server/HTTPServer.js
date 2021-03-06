/** 
 * Static file server
 * @param { Number } port - from which the game will be served.
 * @returns { Object } - reference to the server
*/

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

let httpServer;

const mimeType = {
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.css': 'text/css'
};

function staticServer (port) {
    httpServer = http.createServer(function (req, res) {
        const parsedUrl = url.parse(req.url);

        const sanitizePath = path.normalize(parsedUrl.pathname).replace(/^(\.\.[\/\\])+/, '');
        let pathname = path.join(`${__dirname}/../client/`, sanitizePath);

        fs.exists(pathname, exist => {
            if(!exist) {
                res.statusCode = 404;
                res.end(`File ${pathname} not found!`);
                return;
            }

            if (fs.statSync(pathname).isDirectory()) {
                pathname += '/index.html';
            }

            fs.readFile(pathname, (err, data) => {
                if(err){
                    res.statusCode = 500;
                    res.end(`Error getting the file: ${err}.`);
                } else {
                    const ext = path.parse(pathname).ext;
                    res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
                    res.end(data);
                }
            });
        });
    }).listen(parseInt(port));

    console.log(`Server listening on port ${port}`);
    return httpServer;
}

module.exports = staticServer;
