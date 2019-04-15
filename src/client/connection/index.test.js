import { WebSocket, Server } from 'mock-socket';

// Mock browser environment
import { JSDOM } from "jsdom";

// mock processDatagram function
import processDatagram from './processDatagram.js';
jest.mock('./processDatagram.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// tested function
import { connect, getConnection } from './index.js';

describe("Test WebSocket connection", () => {
    
    const dom = new JSDOM();
    global.document = dom.window.document;
    global.window = dom.window;
    // window.location.hostname = "mock_hostname";
    // window.location.port = "4242";
    global.WebSocket = WebSocket;

    const fakeURL = 'ws://localhost:4242';
    const mockServer = new Server(fakeURL);

    mockServer.on('connection', socket => {
        socket.readyState = 1;
        socket.on('message', data => {
            t.is(data, 'test message from app', 'we have intercepted the message and can assert on it');
            socket.readyState = 1;
            socket.send('test message from mock server');
        });

        socket.on('close', () => {});
        socket.send('test message');
    });
    
    test("Test connection setup", () => {
        connect();
        let c = getConnection();
        expect(c).toBeInstanceOf(WebSocket);
        expect(c.onopen[0]).toBeInstanceOf(Function);
        expect(c.onerror[0]).toBeInstanceOf(Function);
        
        expect(c.onmessage[0]).toBe(processDatagram);
    });
});
