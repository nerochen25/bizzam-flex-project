import { combineReducers } from 'redux';

import BoardsReducer from './boards_reducer'

export default combineReducers({
    boards: BoardsReducer
})