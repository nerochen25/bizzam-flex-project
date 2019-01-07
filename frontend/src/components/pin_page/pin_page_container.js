import { connect } from 'react-redux';
import PinPage from './pin_page';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';
import {getThemes} from '../../actions/theme_actions';

const mapStateToProps = (state) => {
    let game = Object.values(state.entities.games)[0];
    let themes = Object.values(state.entities.themes);
    return {
        game: game,
        themes: themes,
        currentUser: state.session.user,
        gameType: '',
        boards: state.entities.boards,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getThemes: () => dispatch(getThemes()),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchBoard: id => dispatch(fetchBoard(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinPage);


