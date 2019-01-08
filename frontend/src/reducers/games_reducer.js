import { RECEIVE_NEW_GAME, RECEIVE_GAMES } from '../actions/game_actions';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

  
const GamesReducer = (state = {}, action) => {
    switch(action.type) {
        
        case RECEIVE_NEW_GAME:
          
          return Object.assign({}, state, {[action.game._id]: action.game});
        case RECEIVE_CURRENT_USER:
          return {};
        case RECEIVE_GAMES:
          
          return Object.assign({}, state, action.games)
        default:
          return state;
    }
};

export default GamesReducer;
