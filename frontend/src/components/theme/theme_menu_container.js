import { connect } from 'react-redux';

import ThemeMenu from './theme_menu';

const mapStateToProps = state => ({
//   loggedIn: state.session.isAuthenticated
});

export default connect(mapStateToProps)(ThemeMenu);