import { RECEIVE_BOARDS, RECEIVE_NEW_BOARD } from '../actions/board_actions';

  
const BoardsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch(action.type) {
        case RECEIVE_BOARDS:
        console.log('inside the board reducer');

        newState.all = action.boards.data;
        return newState;
        
        case RECEIVE_NEW_BOARD:
        newState.new = action.board.data
        return newState;
        default:
        return state;
    }
};

export default BoardsReducer;