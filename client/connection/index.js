import { processMessage } from './processMessage.js';

window.WebSocket = window.WebSocket || window.MozWebSocket;
let connection = new WebSocket(`ws://${window.location.hostname}:3001`);

connection.onopen = () => {
    console.log("OPEN!");
};

connection.onerror = error => {
    console.error(error);
};

connection.onmessage = processMessage;

setInterval(() => {
    if (connection.readyState !== 1) {
        console.error("Server not reachable.");
    }
}, 5000);

export { connection };
