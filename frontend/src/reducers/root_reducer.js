import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
<<<<<<< HEAD
import boards from './boards_reducer';
import themes from './themes_reducer';
||||||| merged common ancestors
import boards from './boards_reducer';
=======
import entities from './entities_reducer'
>>>>>>> master

const RootReducer = combineReducers({
  session,
  errors,
<<<<<<< HEAD
  boards,
  themes
||||||| merged common ancestors
  boards
=======
  entities
>>>>>>> master
});

export default RootReducer;