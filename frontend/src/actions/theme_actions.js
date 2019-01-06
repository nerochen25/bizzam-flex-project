import { createTheme, createThemeItem, createThemeItems } from '../util/theme_api_util';

export const RECEIVE_NEW_THEME = "RECEIVE_NEW_THEME";
export const RECEIVE_NEW_THEME_ITEM = "RECEIVE_NEW_THEME_ITEM";
export const RECEIVE_NEW_THEME_ITEMS = "RECEIVE_NEW_THEME_ITEMS";

export const receiveNewTheme = theme => ({
  type: RECEIVE_NEW_THEME,
  theme
});

export const receiveNewThemeItem = themeItem => ({
  type: RECEIVE_NEW_THEME_ITEM,
  themeItem
});

export const receiveNewThemeItems = themeItems => ({
  type: RECEIVE_NEW_THEME_ITEMS,
  themeItems
});

export const postTheme = data => dispatch => (
  createTheme(data)
    .then(theme => dispatch(receiveNewTheme(theme)))
    .catch(err => console.log(err))
);

export const postThemeItem = data => dispatch => (
  createThemeItem(data)
    .then(themeItem => dispatch(receiveNewThemeItem(themeItem)))
    .catch(err => console.log(err))
);

export const postThemeItems = data => dispatch => (
  createThemeItems(data)
    .then(themeItems => dispatch(receiveNewThemeItems(themeItems)))
    .catch(err => console.log(err))
);
