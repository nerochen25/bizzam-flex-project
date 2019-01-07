import { connect } from 'react-redux';
import { postGame } from '../../actions/game_actions';
import CreateGame from './create_game';
import {fetchBoards, fetchBoard} from '../../actions/board_actions';
import {getThemes} from '../../actions/theme_actions';



const mapStateToProps = (state) => {
    let themes = Object.values(state.entities.themes);
    return {
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
        createGame: data => dispatch(postGame(data)),
        fetchBoards: () => dispatch(fetchBoards()),
        fetchBoard: id => dispatch(fetchBoard(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);


