import { setDOMPointers, setEventListeners } from './gameState/index.js';
import { connect } from './connection/index.js';

setDOMPointers();
setEventListeners();
connect();
