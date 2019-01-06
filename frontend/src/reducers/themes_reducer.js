import { RECEIVE_NEW_THEME, RECEIVE_NEW_THEME_ITEM, RECEIVE_NEW_THEME_ITEMS  } from '../actions/theme_actions';

  
const ThemesReducer = (state = {}, action) => {
    
    Object.freeze(state);
    let newState = Object.assign({}, state);

    switch(action.type) {
        case RECEIVE_NEW_THEME:
            newState = action.theme.data;
            return newState;
        
        case RECEIVE_NEW_THEME_ITEM:
            newState = action.theme.data;
            return newState;

        case RECEIVE_NEW_THEME_ITEMS:
            newState = action.theme.data;
            return newState;
    
        
        default:
        return state;
    }
};

export default ThemesReducer;