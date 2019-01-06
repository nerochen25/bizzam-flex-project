import { 
        RECEIVE_BOARDS, 
        RECEIVE_BOARD
        } from '../actions/board_actions';

  
const BoardsReducer = (state = {}, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_BOARDS:
            return action.boards;
        
        case RECEIVE_BOARD:
            return Object.assign({}, state, action.board);

        default:
            return state;
    }
};

export default BoardsReducer;


