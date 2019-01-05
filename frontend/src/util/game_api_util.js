import axios from 'axios';

export const createGame = data => {
  return axios.post('/api/games/', data)
}

// edit
// delete