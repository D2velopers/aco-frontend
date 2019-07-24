import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Main from './Main';
import Search from './Search';

const LoggedInRouter = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    {/* <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} /> */}
    <Redirect from="*" to="/" />
  </Switch>
);

const LoggedOutRouter = () => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Redirect from="*" to="/" />
  </Switch>
);

const AppRouter = ({ isLoggedIn }) => (
  <Switch>{isLoggedIn ? <LoggedInRouter /> : <LoggedOutRouter />}</Switch>
);

AppRouter.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};

export default AppRouter;
