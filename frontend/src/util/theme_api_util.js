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

export const getAllThemes = () => {
  return axios.post('/api/themes?includeAll=true');
};

export const getAllPlayableThemes = () => {
  return axios.post('/api/themes');
};

// delete a theme
// delete a theme item