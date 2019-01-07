import { combineReducers } from 'redux';
import ThemeReducer from './themes_reducer';

import BoardsReducer from './boards_reducer';
import GamesReducer from './games_reducer';

export default combineReducers({
    boards: BoardsReducer,
    games: GamesReducer,
    themes: ThemeReducer
    
})
