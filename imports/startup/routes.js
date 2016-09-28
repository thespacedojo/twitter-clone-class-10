import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { TweetStream } from '/imports/ui/components/TweetStream.js';
import { Profile } from '/imports/ui/components/Profile.js';
import { Notifications } from '/imports/ui/components/Notifications.js';
import AppLayout from '/imports/ui/components/AppLayout.js';
import { Accounts, STATES } from 'meteor/std:accounts-ui';

Accounts.config({
  sendVerificationEmail: true,
  forbidClientAccountCreation: false
});

Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_EMAIL',
  loginPath: '/signin',
  signUpPath: '/signup',
  resetPasswordPath: '/reset-password',
  profilePath: '/profile',
  minimumPasswordLength: 6
});

const renderRoutes = () => (
  <Router history={browserHistory} >
    <Route path="/" component={ AppLayout } >
      <IndexRoute component={ TweetStream } />
      <Route path="/profile" component={ Profile } />
      <Route path="/notifications" component={ Notifications } />
      <Route path="/signin" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_IN } />
      <Route path="/signup" component={ Accounts.ui.LoginForm } formState={ STATES.SIGN_UP } />
    </Route>
  </Router>
)

export { renderRoutes };
