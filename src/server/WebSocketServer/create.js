/**
 * @import WebSocketServer, welcomePlayer
 * @global connections - vetor de ponteiros para conexões de WebSocket
 * @param HTTPServer - ponteiro para o servidor estático
 *  - Instancie um novo WebSocket através do construtor server provido pelo 
 *    módulo websocket, de @theturtle32
 *  - O construtor server recebe um objeto com a propriedade "httpServer".
 *  - Use o parâmetro recebido hTTPServer no objeto entregue ao construtor server
 *  - Atribua a função welcomePlayer ao evento "request", emitido pelo servidor
 *    WebSocket, através da sua função "on"
 *  - A função welcomePlayer recebe o vetor de conexões e a requisição 
 *    fornecida pelo evento "request" do servidor
 * @export socketServer
 */

const WebSocketServer = require('websocket').server;
const welcomePlayer = require("./welcomePlayer.js");

let connections = [];

function socketServer(HTTPServer) {
    let wsServer = new WebSocketServer({
        httpServer: HTTPServer
    });

    wsServer.on('request', (c) => {
        welcomePlayer(connections, c);
    });
}

module.exports = socketServer;
