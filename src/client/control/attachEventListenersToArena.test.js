// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window
let arena = document.createElement("div")
arena.id = "arena";
document.body.appendChild(arena);
arena.addEventListener = jest.fn();

import enterArena from './enterArena.js';
jest.mock('./enterArena.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

import * as s from './sendPosition.js';
s.sendPosition = jest.fn();

import * as Sh from './shoot.js';
Sh.shoot = jest.fn();

// tested function
import attachEventListenersToArena from './attachEventListenersToArena.js';

test("Verify client control index", () => {
    attachEventListenersToArena();
    expect(arena.addEventListener).toHaveBeenCalledTimes(3);
    expect(arena.addEventListener).toHaveBeenCalledWith("pointerenter", enterArena);
    expect(arena.addEventListener).toHaveBeenCalledWith("pointermove", s.sendPosition);
    expect(arena.addEventListener).toHaveBeenCalledWith("click", Sh.shoot);
});
