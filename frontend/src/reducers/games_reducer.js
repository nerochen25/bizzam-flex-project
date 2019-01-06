import { RECEIVE_NEW_GAME } from '../actions/game_actions';

  
const GamesReducer = (state = {}, action) => {
    
    switch(action.type) {
        
        case RECEIVE_NEW_GAME:
          return Object.assign({}, state, action.game);

        default:
          return state;
    }
};

export default GamesReducer;
