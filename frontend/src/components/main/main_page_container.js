import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import MainPage from './main_page';

const mapStateToProps = ({ session, entities: { users } }) => {
    debugger;
    return {
        currentUser: users[session.id],
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
