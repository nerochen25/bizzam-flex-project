import { combineReducers } from 'redux';

import BoardsReducer from './boards_reducer';
import ThemeReducer from './themes_reducer';

export default combineReducers({
    boards: BoardsReducer,
    themes: ThemeReducer
});