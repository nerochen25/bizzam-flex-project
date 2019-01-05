import { createGame } from '../util/game_api_util';


export const RECEIVE_NEW_GAME = "RECEIVE_NEW_GAME";


export const receiveNewGame = game => ({
  type: RECEIVE_NEW_GAME,
  game
})

export const postGame = data => dispatch => (
  createGame(data)
    .then(game => dispatch(receiveNewGame(game)))
    .catch(err => console.log(err))
);