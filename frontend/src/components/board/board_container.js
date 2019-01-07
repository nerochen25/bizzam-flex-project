import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Board from './board.jsx';
import { fetchBoard, fetchUserBoards} from '../../actions/board_actions';

const mapStateToProps = state => {
    return {
        loggedIn: state.session.isAuthenticated,
        boards: state.entities.boards,
        currentUser: state.session.user,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBoard: id => dispatch(fetchBoard(id)),
        fetchUserBoards: id => dispatch(fetchUserBoards(id)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
