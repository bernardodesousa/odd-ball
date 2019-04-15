import processDatagram from './processDatagram.js';

let connection;

function getConnection() { return connection };

function connect() {
    connection = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

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
}

export { connect, getConnection };
