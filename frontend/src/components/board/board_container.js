import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import BoardIndex from './board_index.jsx';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';

const mapStateToProps = state => {
    console.log("state", state);
    return {
        loggedIn: state.session.isAuthenticated,
        boards: Object.values(state.boards.all),
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        // fetchUserBoards: id => dispatch(fetchUserBoards(id)),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchBoard: id => dispatch(fetchBoard(id)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BoardIndex);
