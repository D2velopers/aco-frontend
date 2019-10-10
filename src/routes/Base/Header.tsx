import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { Header } from '../../components/organisms';
import { useInput } from '../../lib/hooks/useInput';

interface Props extends RouteComponentProps {
  user: any;
}

export default withRouter(({ history, user }: Props) => {
  const search = useInput('');
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const handleLogin = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <Header
      user={user}
      search={search}
      onSearchSubmit={handleSearchSubmit}
      onLogin={handleLogin}
    />
  );
});
