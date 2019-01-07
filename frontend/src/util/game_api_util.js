import axios from 'axios';

//Create a game
export const createGame = data => {
  return axios.post('/api/games/', data)
}

export const getUsersGames = id => {
  return axios.get(`/api/games/user?creator_id=${id}`)
}
// Edit a game, coming soon
// Delete a game, coming soon