import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Search from './Search';

const LoggedInRouter = () => (
  <Switch>
    {/* <Route exact path="/" component={Feed} />
    <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} />
    <Redirect from="*" to="/" /> */}
  </Switch>
);

const LoggedOutRouter = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = () => (
  <Switch>
    <LoggedOutRouter />
  </Switch>
);

export default AppRouter;
