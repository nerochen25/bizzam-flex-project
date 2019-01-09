import { createTheme, getAllPlayableThemes, getAllThemes, getThemeById } from '../util/theme_api_util';

export const RECEIVE_NEW_THEME = "RECEIVE_NEW_THEME";
export const RECEIVE_NEW_THEME_ITEM = "RECEIVE_NEW_THEME_ITEM";
export const RECEIVE_NEW_THEME_ITEMS = "RECEIVE_NEW_THEME_ITEMS";
export const RECEIVE_THEMES = "RECEIVE_THEMES";

export const receiveNewTheme = theme => ({
  type: RECEIVE_NEW_THEME,
  theme
});

export const receiveNewThemeItem = themeItem => ({
  type: RECEIVE_NEW_THEME_ITEM,
  themeItem
});

export const receiveNewThemeItems = theme => ({
  type: RECEIVE_NEW_THEME_ITEMS,
  theme
});

export const receiveThemes = themes => ({
  type: RECEIVE_THEMES,
  themes
});

export const getAllPlayThemes = data => dispatch => (
  getAllPlayableThemes(data)
    .then(themes => dispatch(receiveThemes(themes)))

);

export const getThemes = () => dispatch => (
  getAllThemes()
    .then(themes => dispatch(receiveThemes(themes)))

);

export const postTheme = data => dispatch => (
  createTheme(data)
    .then(theme => dispatch(receiveNewTheme(theme)))

);

export const readThemeById = (id) => dispatch => (
  getThemeById(id)
    .then(theme => dispatch(receiveNewTheme(theme)))

);

