import { connect } from 'react-redux';
// import { logout } from '../../actions/session_actions';

import LandingPage from './landing_page';

const mapStateToProps = ({ session, entities: { users } }) => {
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    // logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);