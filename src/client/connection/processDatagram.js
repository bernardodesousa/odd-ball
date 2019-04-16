/**
 * @imports all from GameState, setPlayerPosition
 * @param datagram
 *      - parse datagram.data
 *      - based on type, call:
 *          move-player   -> setPlayerPosition with id and coordinates
 *          enter-player  -> ??
 *          player-left   -> GameState.removePlayer with id
 *          new-player    -> GameState.addPlayer with player
 *          welcome       -> GameState.setPlayer with id
 *                           GameState.addPlayers with players
 *                           GameState.setArenaSize with arenaSize
 *          update-score  -> GameState.updateScores with players
 *          revive-player -> GameState.revivePlayer with id
 *          resize-player -> GameState.resizePlayer with id and radius
 *                           setPlayerPosition with id and coordinates
 *          update-name   -> GameState.setPlayerName with id and name
 * 
 *      - for an other type, print "Unknown message type."
 * @exports processDatagram
 */
