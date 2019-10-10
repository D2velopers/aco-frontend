import React from 'react';
import { RouteComponentProps, Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/modules';
import { ArtistProfile } from '../../components/organisms';
import Layout from '../../layouts/NavLayout';
import Bookmark from './Bookmark';
import Works from './Works';
import Commissions from './Commissions';
import Support from './Support';

interface Params {
  user: string;
}

export default function Artist({ match }: RouteComponentProps<Params>) {
  const URL = match.url;
  const artistLinks = {
    main: [
      {
        to: `${URL}`,
        localeId: 'nav.works',
      },
      {
        to: `${URL}/commissions`,
        localeId: 'nav.commissions',
      },
      {
        to: `${URL}/support`,
        localeId: 'nav.support',
      },
      {
        to: `${URL}/bookmark`,
        localeId: 'nav.bookmark',
      },
    ],
  };
  const { data, loading, error } = useSelector(
    (state: RootState) => state.auth.userProfile
  );
  const dispatch = useDispatch();

  return (
    <Layout Feature={() => <ArtistProfile user={data} />} links={artistLinks}>
      <Switch>
        <Route exact path={`${URL}`} component={Works} />
        <Route path={`${URL}/commissions`} component={Commissions} />
        <Route path={`${URL}/support`} component={Support} />
        <Route path={`${URL}/bookmark`} component={Bookmark} />
      </Switch>
    </Layout>
  );
}
