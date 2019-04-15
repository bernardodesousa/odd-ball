// mock GameState
import * as GameState from '../gameState/index.js';
jest.mock('../gameState/index.js');
GameState.removePlayer = jest.fn();
GameState.addPlayer = jest.fn();
GameState.setPlayer = jest.fn();
GameState.addPlayers = jest.fn();
GameState.setArenaSize = jest.fn();
GameState.updateScores = jest.fn();
GameState.revivePlayer = jest.fn();
GameState.resizePlayer = jest.fn();
GameState.setPlayerName = jest.fn();

// mock setPlayerPosition
import setPlayerPosition from '../gameState/setPlayerPosition.js';
jest.mock('../gameState/setPlayerPosition.js', () => ({
    __esModule: true,
    default: jest.fn()
}));

// tested function
import processDatagram from './processDatagram.js';

describe("Test datagram processing", () => {
    test("Test move-player case", () => {
        processDatagram({data: JSON.stringify({"type": "move-player", "id": 77, "coordinates": [0.5, 0.5]})});
        expect(setPlayerPosition).toHaveBeenCalledTimes(1);
        expect(setPlayerPosition).toHaveBeenCalledWith(77, [0.5, 0.5]);
    });

    test("Test player-left case", () => {
        processDatagram({data: JSON.stringify({"type": "player-left", "id": 60, "coordinates": [0.5, 0.5]})});
        expect(GameState.removePlayer).toHaveBeenCalledTimes(1);
        expect(GameState.removePlayer).toHaveBeenCalledWith(60);
    });

    test("Test new-player case", () => {
        let tg = {data: JSON.stringify({"type": "new-player", "id": 60, "coordinates": [0.5, 0.5], "player": "mock_player"})}
        processDatagram(tg);
        expect(GameState.addPlayer).toHaveBeenCalledTimes(1);
        expect(GameState.addPlayer).toHaveBeenCalledWith("mock_player");
    });

    test("Test welcome case", () => {
        let tg = {data: JSON.stringify({
            "type": "welcome",
            "id": 61,
            "coordinates": [0.5, 0.5],
            "player": "mock_player",
            "players": "mock_players",
            "arenaSize": "mock_arenaSize"
        })};

        processDatagram(tg);
        expect(GameState.setPlayer).toHaveBeenCalledTimes(1);
        expect(GameState.setPlayer).toHaveBeenCalledWith(61);
        expect(GameState.addPlayers).toHaveBeenCalledTimes(1);
        expect(GameState.addPlayers).toHaveBeenCalledWith("mock_players");
        expect(GameState.setArenaSize).toHaveBeenCalledTimes(1);
        expect(GameState.setArenaSize).toHaveBeenCalledWith("mock_arenaSize");
    });

    test("Test update-score case", () => {
        let tg = {data: JSON.stringify({
            "type": "update-score",
            "id": 62,
            "coordinates": [0.5, 0.5],
            "player": "mock_player",
            "players": "mock_players",
            "arenaSize": "mock_arenaSize"
        })};

        processDatagram(tg);
        expect(GameState.updateScores).toHaveBeenCalledTimes(1);
        expect(GameState.updateScores).toHaveBeenCalledWith("mock_players");
    });

    test("Test revive-player case", () => {
        let tg = {data: JSON.stringify({
            "type": "revive-player",
            "id": 63,
            "coordinates": [0.5, 0.5],
            "player": "mock_player",
            "players": "mock_players",
            "arenaSize": "mock_arenaSize"
        })};

        processDatagram(tg);
        expect(GameState.revivePlayer).toHaveBeenCalledTimes(1);
        expect(GameState.revivePlayer).toHaveBeenCalledWith(63);
    });

    test("Test resize-player case", () => {
        let tg = {data: JSON.stringify({
            "type": "resize-player",
            "id": 64,
            "coordinates": [0.5, 0.5],
            "player": "mock_player",
            "players": "mock_players",
            "arenaSize": "mock_arenaSize",
            "radius": 19
        })};

        processDatagram(tg);
        expect(GameState.resizePlayer).toHaveBeenCalledTimes(1);
        expect(GameState.resizePlayer).toHaveBeenCalledWith(64, 19);
        expect(setPlayerPosition).toHaveBeenCalledTimes(2);
        expect(setPlayerPosition).toHaveBeenCalledWith(64, [0.5, 0.5]);
    });

    test("Test update-name case", () => {
        let tg = {data: JSON.stringify({
            "type": "update-name",
            "id": 65,
            "coordinates": [0.5, 0.5],
            "player": "mock_player",
            "players": "mock_players",
            "arenaSize": "mock_arenaSize",
            "radius": 19,
            "name": "mock_name"
        })};

        processDatagram(tg);
        expect(GameState.setPlayerName).toHaveBeenCalledTimes(1);
        expect(GameState.setPlayerName).toHaveBeenCalledWith(65, "mock_name");
    });
});
