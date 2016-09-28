import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { TweetStream } from '/imports/ui/components/TweetStream.js';
import { Profile } from '/imports/ui/components/Profile.js';
import { Notifications } from '/imports/ui/components/Notifications.js';
import AppLayout from '/imports/ui/components/AppLayout.js';



const renderRoutes = () => (
  <Router history={browserHistory} >
    <Route path="/" component={ AppLayout } >
      <IndexRoute component={ TweetStream } />
      <Route path="/profile" component={ Profile } />
      <Route path="/notifications" component={ Notifications } />
    </Route>
  </Router>
)

export { renderRoutes };
