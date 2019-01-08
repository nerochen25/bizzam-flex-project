import { connect } from 'react-redux';
import PinPage from './pin_page';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';
import {getThemes} from '../../actions/theme_actions';
import {fetchUserGames} from '../../actions/game_actions';

const mapStateToProps = (state) => {
    let games = Object.values(state.entities.games);
    let themes = Object.values(state.entities.themes);
    return {
        games: games,
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
        fetchBoard: id => dispatch(fetchBoard(id)),
        fetchUserGames: id => dispatch(fetchUserGames(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PinPage);


