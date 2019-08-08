import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Gallery from './Gallery';
import Search from './Search';

const LoggedInRouter = () => (
  <Switch>
    <Route path="/" component={Gallery} />
    {/* {galleryParams.main.concat(galleryParams.sub).map(route => (
      <Route
        path={`/${route}`}
        key={route}
        render={() => <Main navItems={galleryParams} />}
      />
    ))} */}

    {/* <Route path="/explore" component={Explore} />
    <Route path="/search" component={Search} />
    <Route path="/:username" component={Profile} /> */}
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
