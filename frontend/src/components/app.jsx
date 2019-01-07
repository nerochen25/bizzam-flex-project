import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import BoardContainer from './board/board_container';
import ThemeMenuContainer from './theme/theme_menu_container';
import ThemeIndexContainer from './theme/theme_index_container';
import ThemeContainer from './theme/theme_container';


const App = () => (
  <div className="splash">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/board" component={BoardContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/theme" component={ThemeMenuContainer} />
      <ProtectedRoute path="/allThemes" component={ThemeIndexContainer} />
      <ProtectedRoute path='/newTheme' component={ThemeContainer} />
      <AuthRoute  path="/login" component={LoginFormContainer} />
      <AuthRoute  path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;