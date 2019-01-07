import { connect } from 'react-redux'
import { postBoard } from '../../actions/board_actions'
import JoinGame from './join_game'


const mapStateToProps = (state) => ({
  currentUser: state.session.user,
})

const mapDispatchToProps = dispatch => ({
  postBoard: data => dispatch(postBoard(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(JoinGame);