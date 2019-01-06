import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';

import NavBar from './navbar';

const mapStateToProps = state => {
  let currentUser = state.session.user;
  return {
    currentUser: currentUser,
    loggedIn: state.session.isAuthenticated
  }
};

export default connect(mapStateToProps, { logout })(NavBar);