import { createStore } from 'redux';
import reducer from './reducer';

const win = window;

export default createStore(reducer, {},
    win.devToolsExtension ? win.devToolsExtension() : (f) => f
)