import { connect } from 'react-redux';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';
import GameIndex from './game_index';
import {fetchUserGames} from '../../actions/game_actions';

const mapStateToProps = (state) => {
    let themes = Object.values(state.entities.themes);
    let games = Object.values(state.entities.games)
    return {
        games: games,
        themes: themes,
        currentUser: state.session.user,
        boards: state.entities.boards,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUserGames: () => dispatch(fetchUserGames()),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchBoard: id => dispatch(fetchBoard(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameIndex);


