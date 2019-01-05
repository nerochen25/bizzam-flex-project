import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';
import Theme from './theme.jsx';
import {postTheme, postThemeItem, postThemeItems} from '../../actions/theme_actions';


const mapStateToProps = state => {
    
    return {
        // loggedIn: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        postTheme: () => dispatch(postTheme()),
        postThemeItem: () => dispatch(postThemeItem()),
        postThemeItems: () => dispatch(postThemeItems()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Theme);