import { processDatagram } from './processDatagram.js';

window.WebSocket = window.WebSocket || window.MozWebSocket;
let connection = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

connection.onopen = () => {
    console.log("OPEN!");
};

connection.onerror = error => {
    console.error(error);
};

connection.onmessage = processDatagram;

setInterval(() => {
    if (connection.readyState !== 1) {
        console.error("Server not reachable.");
    }
}, 5000);

export { connection };
