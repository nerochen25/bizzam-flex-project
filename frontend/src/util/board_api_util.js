import axios from 'axios';

//Get all boards
export const getBoards = () => {
  return axios.get('/api/boards/');
};

//Create a board
export const createBoard = data => {
  return axios.post('/api/boards/', data);
};

//Fetch a board by its id
export const getBoardById = id => {
  return axios.get('/api/boards/', {id: id});
};

// //Fetch User boards
// export const getUserBoards = id => {
//   return axios.get(`/api/boards/${id}`);
// };




// edit
// delete