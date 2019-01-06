import axios from 'axios';

//Create a game
export const createGame = data => {
  return axios.post('/api/games/', data)
}

// Edit a game, coming soon
// Delete a game, coming soon