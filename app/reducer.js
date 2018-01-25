import { combineReducers } from 'redux';

import { reducer as headerReducer } from './component/header/';
const reducer = combineReducers({
    userInfo: headerReducer
})

export default reducer