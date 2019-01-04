import { getBoards, getUserBoards, createBoard } from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";
export const RECEIVE_NEW_BOARD = "RECEIVE_NEW_BOARD";

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveUserBoards = boards => ({
  type: RECEIVE_USER_BOARDS,
  boards
});

export const receiveNewBoard = board => ({
  type: RECEIVE_NEW_BOARD,
  board
})

export const fetchBoards = () => dispatch => (
  getBoards()
    .then(boards => dispatch(receiveBoards(boards)))
    .catch(err => console.log(err))
);

export const fetchUserBoards = id => dispatch => (
  getUserBoards(id)
    .then(boards => dispatch(receiveUserBoards(boards)))
    .catch(err => console.log(err))
);

export const postBoard = data => dispatch => (
  createBoard(data)
    .then(board => dispatch(receiveNewBoard(board)))
    .catch(err => console.log(err))
);