import axios from 'axios';

export const getBoards = () => {
  return axios.get('/api/boards')
};

export const createBoard = data => {
  return axios.post('/api/boards/', data)
}

export const getUserBoards = id => {
  return axios.get(`/api/boards/${id}`)
};

// edit
// delete