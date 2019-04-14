// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

// tested function
import createAvatar from './createAvatar.js';

describe('Add avatars to DOM', () => {
    let arena = document.createElement("div");
    arena.id = "arena";
    document.body.appendChild(arena);

    let testPlayers = [
        {id: 0, radius: 10, alive: true, coordinates: [0.5, 0.5], name: "Aayla"},
        {id: 1, radius: 20, alive: true, coordinates: [0.1, 0.1], name: "River Tam"},
        {id: 2, radius: 15, alive: true, coordinates: [0.2, 0.2], name: "Ripley"},
        {id: 3, radius: 12, alive: false, coordinates: [0.3, 0.3], name: "Trinity"},
        {id: 4, radius: 18, alive: true, coordinates: [0.4, 0.4], name: "Spock"},
        {id: 5, radius: 7, alive: true, coordinates: [0.5, 0.1], name: "Padmé"}
    ];

    let avatars = [];

    test("Create several avatars", () => {

        testPlayers.forEach((player, i) => {
            let result = createAvatar(arena, player);
            if (result) avatars[i] = result;
        });

        expect(document.getElementById("arena").childNodes.length).toBe(6);
        expect(document.getElementById("0")).toEqual(avatars[0]);
        expect(document.getElementById("0").style.width).toBe("20px");
        expect(document.getElementById("0").style.height).toBe("20px");
        expect(document.getElementById("1").style.width).toBe("40px");
        expect(document.getElementById("1").style.height).toBe("40px");
        expect(document.getElementById("2").style.width).toBe("30px");
        expect(document.getElementById("2").style.height).toBe("30px");
        expect(document.getElementById("3").style.width).toBe("24px");
        expect(document.getElementById("3").style.height).toBe("24px");
        expect(document.getElementById("4").style.width).toBe("36px");
        expect(document.getElementById("4").style.height).toBe("36px");
        expect(document.getElementById("5").style.width).toBe("14px");
        expect(document.getElementById("5").style.height).toBe("14px");
        expect(document.getElementById("6")).toBe(null);

        expect(document.getElementById("0").classList).not.toContain("dead");
        expect(document.getElementById("1").classList).not.toContain("dead");
        expect(document.getElementById("2").classList).not.toContain("dead");
        expect(document.getElementById("3").classList).toContain("dead");
        expect(document.getElementById("4").classList).not.toContain("dead");
        expect(document.getElementById("5").classList).not.toContain("dead");
        
        expect(document.getElementById("0").classList).toContain("player");
        expect(document.getElementById("1").classList).toContain("player");
        expect(document.getElementById("2").classList).toContain("player");
        expect(document.getElementById("3").classList).toContain("player");
        expect(document.getElementById("4").classList).toContain("player");
        expect(document.getElementById("5").classList).toContain("player");
    });

    test("Try adding existing avatar", () => {

        let result = createAvatar(arena, testPlayers[0]);

        expect(result).toBe(avatars[0]);
        expect(document.getElementById("arena").childNodes.length).toBe(6);
        expect(document.getElementById("0")).toEqual(avatars[0]);
    });
});
