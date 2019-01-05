import { RECEIVE_NEW_GAME } from '../actions/game_actions';

  
const GamesReducer = (state = { user: {}, new: undefined }, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        
        case RECEIVE_NEW_GAME:
          newState.new = action.game.data
          return newState;

        default:
          return state;
    }
};

export default GamesReducer;