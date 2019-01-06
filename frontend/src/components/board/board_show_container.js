import { connect } from 'react-redux';
import BoardShow from './board_show'
import { fetchBoard, selectSquare } from '../../actions/board_actions'

const mapStateToProps = (state) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user,
    boards: state.entities.boards
    // needs games / boards
})

const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id)),
    selectSquare: (id, position) => dispatch(selectSquare(id, position))
})


export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)