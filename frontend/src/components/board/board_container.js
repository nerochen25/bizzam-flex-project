import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Board from './board.jsx';
import {fetchBoards, fetchUserBoards} from '../../actions/board_actions';

const mapStateToProps = state => {
    debugger
    return {
        loggedIn: state.session.isAuthenticated
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBoards: () => dispatch(fetchUserBoards()),
        fetchBoards: () =>dispatch(fetchBoards()), 
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
