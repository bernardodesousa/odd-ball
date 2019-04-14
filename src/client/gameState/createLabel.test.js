// Mock browser environment
import { JSDOM } from "jsdom";
const dom = new JSDOM()
global.document = dom.window.document
global.window = dom.window

// tested function
import createLabel from './createLabel.js';

describe('Add label to avatar', function (){
    let arena = document.createElement("div");
    arena.id = "arena";
    document.body.appendChild(arena);

    let testPlayers = [
        {id: 0, kills: 1, deaths: 0, radius: 10, alive: true, coordinates: [0.5, 0.5], name: "Aayla"},
        {id: 1, kills: 2, deaths: 1, radius: 20, alive: true, coordinates: [0.1, 0.1], name: "River Tam"},
        {id: 2, kills: 3, deaths: 0, radius: 15, alive: true, coordinates: [0.2, 0.2], name: "Ripley"},
        {id: 3, kills: 4, deaths: 3, radius: 12, alive: false, coordinates: [0.3, 0.3], name: "Trinity"},
        {id: 4, kills: 5, deaths: 6, radius: 18, alive: true, coordinates: [0.4, 0.4], name: "Spock"},
        {id: 5, kills: 6, deaths: 3, radius: 7, alive: true, coordinates: [0.5, 0.1], name: "Padmé"}
    ];

    let avatars = [];
    testPlayers.forEach((player, i) => {
        avatars[i] = document.createElement("div");
        avatars[i].style.width = avatars[i].style.height = player.radius*2;
        arena.appendChild(avatars[i]);
    });

    let labels = [];

    test("Add label to several avatars", () => {

        avatars.forEach((avatar, i) => {
            let result = createLabel(avatar, testPlayers[i].name);
            if (result) labels[i] = result;
        });

        for (let i=0; i<6; i++) {
            expect(labels[i].toString()).toBe("[object HTMLParagraphElement]");
        }

        expect(labels[0].innerText).toBe("Aayla");
        expect(labels[1].innerText).toBe("River Tam");
        expect(labels[2].innerText).toBe("Ripley");
        expect(labels[3].innerText).toBe("Trinity");
        expect(labels[4].innerText).toBe("Spock");
        expect(labels[5].innerText).toBe("Padmé");

        avatars.forEach(a => {
            expect(a.childNodes.length).toBe(1);
        });
    });
});
