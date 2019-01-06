import { connect } from 'react-redux';
import Profile from './profile';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router-dom';
// import { fetchUserBoards } from '../../actions/board_actions';

const mapStateToProps = (state) => {
  return {
    // username: state.session.user.username,
    currentUser: state.session.user,
    
  };
};

const mapDispatchToProps = dispatch => {
  return {
    
    logout: () => dispatch(logout())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));