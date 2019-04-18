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
 * 
 * @export socketServer
 */

let WebSocketServer = require('websocket').server;
let welcomePlayer = require("./welcomePlayer.js");

let connections = [];

function socketServer(HTTPServer) {
    let wss = new WebSocketServer({
        httpServer: HTTPServer
    });

    wss.on("request", (r) => {
        welcomePlayer(connections, r);
    });
}

module.exports = socketServer;
