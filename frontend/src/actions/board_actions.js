import { getBoards, createBoard, getBoardById, toggleSquare } from '../util/board_api_util';

export const RECEIVE_BOARDS = "RECEIVE_BOARDS";
export const RECEIVE_USER_BOARDS = "RECEIVE_USER_BOARDS";
export const RECEIVE_BOARD = "RECEIVE_BOARD";

export const receiveBoards = boards => ({
  type: RECEIVE_BOARDS,
  boards
});

export const receiveUserBoards = boards => ({
  type: RECEIVE_USER_BOARDS,
  boards
});

export const receiveBoard = board => ({
  type: RECEIVE_BOARD,
  board
});

export const fetchBoards = () => dispatch => (
  getBoards()
    .then(boards => dispatch(receiveBoards(boards)))
    .catch(err => console.log(err))
);

export const fetchBoard = id => dispatch => (
  getBoardById(id)
    .then(board => dispatch(receiveBoard(board)))
    .catch(err => console.log(err))
);

export const postBoard = data => dispatch => (
  createBoard(data)
    .then(board => dispatch(receiveBoard(board)))
    .catch(err => console.log(err))
);

export const selectSquare = (id, position) => dispatch => (
  toggleSquare(id, position)
    .then(board => dispatch(receiveBoard(board)))
    .catch(err => console.log(err))
)




