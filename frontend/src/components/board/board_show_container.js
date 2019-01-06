import { connect } from 'react-redux';
import BoardShow from './board_show'
import { fetchBoard } from '../../actions/board_actions'

const mapStateToProps = (state) => ({
    loggedIn: state.session.isAuthenticated,
    currentUser: state.session.user
    // needs games / boards
})

const mapDispatchToProps = dispatch => ({
    fetchBoard: id => dispatch(fetchBoard(id)),
})


export default connect(mapStateToProps, mapDispatchToProps)(BoardShow)