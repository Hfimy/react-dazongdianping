import { combineReducers } from 'redux';
import { reducer as headerReducer } from './component/Header/';

const reducer = combineReducers({
    userInfo: headerReducer
})

export default reducer