import { createGame } from '../util/game_api_util';


export const RECEIVE_NEW_GAME = "RECEIVE_NEW_GAME";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveNewGame = game => ({
  type: RECEIVE_NEW_GAME,
  game
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const postGame = data => dispatch => (
  createGame(data)
    .then(game => dispatch(receiveNewGame(game)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
);