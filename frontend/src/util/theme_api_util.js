import axios from 'axios';

export const createTheme = data => {
  return axios.post('/api/themes/', data);
};

export const createThemeItem = data => {
  return axios.post('/api/themes/item', data);
};

export const createThemeItems = data => {
  return axios.post('/api/themes/items', data);
};

export const createThemeWithItems = data => {

};

//Get all themes for a user
export const getThemes = () => {
  return axios.get('/api/themes/');
};


// delete a theme
// delete a theme item