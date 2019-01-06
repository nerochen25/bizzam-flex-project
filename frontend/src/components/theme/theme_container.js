import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import Theme from './theme.jsx';
import {postTheme, postThemeItem, postThemeItems} from '../../actions/theme_actions';


const mapStateToProps = state => {
    
    return {
        // loggedIn: state.session.isAuthenticated
        themes: Object.values(state.entities.themes)
        // formThemeTitle: state.entities.themes.newTheme.name,
        // formThemeBody: state.entities.themes.newTheme.description
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: data => dispatch(postTheme(data)),
        postThemeItem: data => dispatch(postThemeItem(data)),
        postThemeItems: data => dispatch(postThemeItems(data)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);