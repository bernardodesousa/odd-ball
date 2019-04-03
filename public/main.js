console.log("Hello, JS");

window.WebSocket = window.WebSocket || window.MozWebSocket;
let connection = new WebSocket('ws://127.0.0.1:3000');

connection.onopen = () => {
    console.log("OPEN!");
};

connection.onerror = error => {
    console.error(error);
};

connection.onmessage = msg => {
    console.log(msg);
};

setInterval(() => {
    let msg = "Hello, socket " + new Date();
    console.log(msg);
    connection.send(msg);
}, 1000);

setInterval(() => {
    if (connection.readyState !== 1) {
        console.error("Server not reachable.");
    }
}, 3000);
