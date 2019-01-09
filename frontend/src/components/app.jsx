import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import BoardContainer from './board/board_container';
import ThemeIndexContainer from './theme/theme_index_container';
import ThemeContainer from './theme/theme_container';
import EditThemeContainer from './theme/edit_theme_container';
import CreateGameContainer from './game/create_game_container';
import PinPageContainer from './pin_page/pin_page_container';
import GameIndexContainer from './game/game_index_container';
import LandingPage from './main/landing_page';

const App = () => (
  <div className="splash">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/board" component={BoardContainer} />
      <ProtectedRoute path="/games/:id" component={GameIndexContainer} />
      <ProtectedRoute path="/landing" component={LandingPage} />
      <ProtectedRoute path = '/create-game' component={CreateGameContainer} />
      <ProtectedRoute path="/allThemes" component={ThemeIndexContainer} />
      <ProtectedRoute exact path='/pin-page/:pin' component={PinPageContainer}/>
      <ProtectedRoute path='/newTheme' component={ThemeContainer} />
      <ProtectedRoute path='/theme/:themeId/edit' component={EditThemeContainer} />
      <AuthRoute  path="/login" component={LoginFormContainer} />
      <AuthRoute  path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
);

export default App;