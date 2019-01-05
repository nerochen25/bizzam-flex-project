import { connect } from 'react-redux';
import { postGame } from '../../actions/game_actions';
import CreateGame from './create_game';

const mapStateToProps = (state) => {
    return {
        currentUser: state.session.user,
        newGame: state.games.new
    };
};

const mapDispatchToProps = dispatch => {
    return {
        createGame: data => dispatch(postGame(data))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGame);