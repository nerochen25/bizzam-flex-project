import axios from 'axios';

export const createTheme = data => {
  return axios.post('/api/themes/', data);
};

export const getAllThemes = () => {
  return axios.get('/api/themes?includeAll=true');
};

export const getAllPlayableThemes = () => {
  return axios.get('/api/themes');
};

export const getThemeById = id => {
  return axios.get(`/api/themes/${id}`);
};

// delete a theme
// delete a theme item