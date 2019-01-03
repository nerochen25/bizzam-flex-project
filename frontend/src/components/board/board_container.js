import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Board from './board.jsx';

const mapStateToProps = state => {
    debugger
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
