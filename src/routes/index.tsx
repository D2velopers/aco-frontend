import React from 'react';
import {
  Route,
  Switch,
  Redirect,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';
import Auth from './Auth';
import Gallery from './Gallery';
import Artist from './Artist';
import Works from './Works';
import Commission from './Commission';
import Upload from './Upload';
import NotFound from './NotFound';

interface Props extends RouteComponentProps {
  isLoggedIn: boolean;
}

function BasicRouter() {
  return (
    <Switch>
      <Route path="/works/:workId" component={Works} />
      <Route path="/commissions" component={Commission} />
      <Route path="/upload" component={Upload} />
      <Route path="/404" component={NotFound} />
      <Route path="/" component={Gallery} />
    </Switch>
  );
}
function ArtistRouter() {
  return (
    <Switch>
      <Route path="/:user" component={Artist} />
    </Switch>
  );
}
function LoggedOutRouter() {
  return (
    <Switch>
      <Route path="/" component={Auth} />
    </Switch>
  );
}

export default withRouter(({ isLoggedIn, location }: Props) => {
  const isArtistRoutes = location.pathname.startsWith('/@');

  if (!isLoggedIn) return <LoggedOutRouter />;
  if (!isArtistRoutes) return <BasicRouter />;
  return <ArtistRouter />;
});
