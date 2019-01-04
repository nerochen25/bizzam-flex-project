import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Board from './board.jsx';
import {fetchBoards, fetchUserBoards} from '../../actions/board_actions';

const mapStateToProps = state => {
    
    return {
        loggedIn: state.session.isAuthenticated,
        boards: Object.values(state.boards.user),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserBoards: id => dispatch(fetchUserBoards(id)),
        fetchBoards: () => dispatch(fetchBoards()),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
