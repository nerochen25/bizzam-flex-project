import { createGame, getUsersGames } from '../util/game_api_util';


export const RECEIVE_NEW_GAME = "RECEIVE_NEW_GAME";
export const RECEIVE_GAMES = "RECEIVE_GAMES";
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveNewGame = game => ({
  type: RECEIVE_NEW_GAME,
  game
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const recieveGames = games => ({
  type: RECEIVE_GAMES,
  games
})



export const postGame = data => dispatch => (
  createGame(data)
    .then(response => dispatch(receiveNewGame(response.data)))
    .catch(err => dispatch(receiveErrors(err.response.data)))
);

export const fetchUserGames = id => dispatch => (
  getUsersGames(id)
  .then(response => dispatch(recieveGames(response.data)))
)