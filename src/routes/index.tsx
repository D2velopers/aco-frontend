import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Auth from './Auth';
import Gallery from './Gallery';

interface Props {
  isLoggedIn: boolean;
}

function LoggedInRouter() {
  return (
    <Switch>
      <Route path="/" component={Gallery} />
    </Switch>
  );
}
function LoggedOutRouter() {
  return (
    <Switch>
      <Route path="/" component={Auth} />
      <Redirect from="*" to="/" />
    </Switch>
  );
}

export default function AppRouter({ isLoggedIn }: Props) {
  if (isLoggedIn) return <LoggedInRouter />;
  return <LoggedOutRouter />;
}
