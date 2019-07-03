/**
 * --> Use the WebSocket browser API: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket
 * @imports processDatagram
 * @global connection
 * @exports connect
 *      - create a new websocket
 *      - store a reference to it in connection
 *      - attach anonymous function to "onopen" connection event; have it print "OPEN!"
 *      - attach anonymous function to "onerror" connection event; have it print the error received
 *      - attach processDatagram to "onmessage" connection event
 *      - verify if connection.readyState is different than 1 every 5 seconds
 *        in which case print "Server not reachable."
 * @exports getConnection - function that returns the connection
 */

import processDatagram from './processDatagram.js';

let connection;

function getConnection() { return connection };

function connect() {
    connection = new WebSocket(`ws://${window.location.hostname}:${window.location.port}`);

    connection.onopen = () => {
        console.log("OPEN!");
    }

    connection.onerror = (e) => {
        console.error(e);
    }

    connection.onmessage = processDatagram;

    setInterval(() => {
        if (connection.readyState !== connection.OPEN) {
            console.error("Server not reachable.");
        }
    }, 5000);
}

export { connect, getConnection };
