import axios from 'axios';

//Get all boards
export const getBoards = () => {
  return axios.get('/api/boards');
};

//Create a board
export const createBoard = data => {
  return axios.post('/api/boards/', data);
};

//Fetch User boards
export const getUserBoards = id => {
  return axios.get(`/api/boards/user/${id}`);
};



// edit
// delete