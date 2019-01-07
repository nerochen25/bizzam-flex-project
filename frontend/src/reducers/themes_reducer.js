import { RECEIVE_NEW_THEME, RECEIVE_THEMES  } from '../actions/theme_actions';

const ThemesReducer = (state = { all: [] }, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NEW_THEME:
            newState.newTheme = action.theme.data;
            return newState;

        case RECEIVE_THEMES:
            newState.all = action.themes.data;
            return newState;

        default:
            return state;
    }
};

export default ThemesReducer;