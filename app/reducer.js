import { combineReducers } from 'redux';

import { reducer as homeReducer } from './home/';
import { reducer as headerReducer } from './component/header/';
const reducer = combineReducers({
    home: homeReducer,
    userInfo: headerReducer
})

export default reducer