import { RECEIVE_BOARDS, RECEIVE_NEW_BOARD, RECEIVE_USER_BOARDS } from '../actions/board_actions';

  
const BoardsReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_BOARDS:
       
        newState.all = action.boards.data;
        return newState;

        case RECEIVE_USER_BOARDS:
            // console.log('>>>>>>>>>> inside the receive_user_boards >>>>>>>>>');
            newState.user = action.boards.data;
            return newState;
        
        case RECEIVE_NEW_BOARD:
            // console.log('>>>>>>>>>> inside the receive_new_board >>>>>>>>>');
            newState.new = action.board.data;
            return newState;

        default:
            return state;
    }
};

export default BoardsReducer;