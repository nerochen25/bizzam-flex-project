import axios from 'axios';

export const getBoards = () => {
  return axios.get('/api/boards')
};

export const createBoard = data => {
  return axios.post('/api/boards/', data)
}


// edit
// delete