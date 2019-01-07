import { createTheme, createThemeItem, createThemeItems, getThemes } from '../util/theme_api_util';

export const RECEIVE_NEW_THEME = "RECEIVE_NEW_THEME";
export const RECEIVE_NEW_THEME_ITEM = "RECEIVE_NEW_THEME_ITEM";
export const RECEIVE_NEW_THEME_ITEMS = "RECEIVE_NEW_THEME_ITEMS";
//Action type for receiveThemes
export const RECEIVE_THEMES = 'RECEIVE_THEMES';

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

//Action for receiving all user themes
export const receiveThemes = themes => ({
  type: RECEIVE_THEMES,
  themes
})

export const fetchThemes = () => dispatch => (
  getThemes()
    .then(themes => dispatch(receiveThemes(themes)))
    .catch(err => console.log(err))
)

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

export const postThemeItems = (data) => dispatch => (
  createThemeItems(data)
    .then(theme => dispatch(receiveNewThemeItems(theme)))
    .catch(err => console.log(err))
);
