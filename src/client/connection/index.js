/**
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

import processDatagram from "./processDatagram.js";

let connection;

function connect () {
    let domain = window.location.hostname;
    let port = window.location.port;
    connection = new WebSocket("ws://" + domain + ":" + port);

    connection.onopen = () => {
        console.log("OPEN!");
    };

    connection.onerror = (error) => {
        console.log(error);
    };

    connection.onmessage = processDatagram;

    setInterval(()=>{
        if (connection.readyState != 1) console.log("Server not reachable.");
    }, 5000);
}

function getConnection () {
    return connection;
}

export { getConnection, connect };
