import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, Route, Switch, Redirect } from 'react-router-dom';
import Layout from '../../layouts/NavLayout';
import GalleryPage from './Gallery';
import NotFound from '../NotFound';

const Test = styled.div`
  width: 100%;
  height: 15vh;
  background-color: red;
`;
const T = () => <Test />;

export default function GalleryRoute({ location }: RouteComponentProps) {
  const SORT = location.pathname.split('/')[1] || 'trending';

  function List() {
    return <GalleryPage sort={SORT} />;
  }
  return (
    <Layout Feature={T} links={galleryLinks}>
      <Switch>
        <Route path="recent" component={List} />
        <Route path="following" component={List} />
        <Route path="bookmark" component={List} />
        <Route path="recommended" component={List} />
        <Route path="history" component={List} />
        <Route exact path="/" component={List} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout>
  );
}

const galleryLinks = {
  main: [
    {
      to: '/recent',
      localeId: 'nav.recent',
    },
    {
      to: '/',
      localeId: 'nav.trending',
    },
  ],
  sub: [
    {
      to: '/following',
      localeId: 'nav.following',
    },
    {
      to: '/bookmark',
      localeId: 'nav.bookmark',
    },
    {
      to: '/recommended',
      localeId: 'nav.recommended',
    },
    {
      to: '/history',
      localeId: 'nav.history',
    },
  ],
};
