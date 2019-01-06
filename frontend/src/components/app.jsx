import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch } from 'react-router-dom';
import NavBarContainer from './nav/navbar_container';

import MainPage from './main/main_page';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ProfileContainer from './profile/profile_container';
import BoardContainer from './board/board_container';
import ThemeContainer from './theme/theme_container';


const App = () => (
<<<<<<< HEAD
  <div className="splash">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/board" component={BoardContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <ProtectedRoute path="/theme" component={ThemeContainer} />
      <AuthRoute  path="/login" component={LoginFormContainer} />
      <AuthRoute  path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
||||||| merged common ancestors
  <div className="splash">
    <NavBarContainer />
    <Switch>
      <ProtectedRoute path="/board" component={BoardContainer} />
      <ProtectedRoute path="/profile" component={ProfileContainer} />
      <AuthRoute  path="/login" component={LoginFormContainer} />
      <AuthRoute  path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/" component={MainPage} />
    </Switch>
  </div>
=======
	<div className="splash">
		<NavBarContainer />
		<Switch>
			<ProtectedRoute path="/board" component={BoardContainer} />
			<ProtectedRoute path="/profile" component={ProfileContainer} />
			<AuthRoute path="/login" component={LoginFormContainer} />
			<AuthRoute path="/signup" component={SignupFormContainer} />
			<AuthRoute exact path="/" component={MainPage} />
		</Switch>
	</div>
>>>>>>> master
);

export default App;