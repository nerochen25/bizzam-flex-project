import axios from 'axios';

//Create a game
export const createGame = data => {
  return axios.post('/api/games/', data)
}

export const getUsersGames = () => {
  return axios.get(`/api/games/user`)
}

// Edit a game, coming soon
// Delete a game, coming soon