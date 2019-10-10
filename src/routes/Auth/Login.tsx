import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/modules';
import { getUserProfileAsync } from '../../redux/modules/auth';
import { useInput } from '../../lib/hooks';
import { setStorage } from '../../lib/useStorage';
import { AuthForm } from '../../components/organisms';

export default function Login() {
  const email = useInput('');
  const password = useInput('');
  const { data, loading, error } = useSelector(
    (state: RootState) => state.auth.userProfile
  );
  const dispatch = useDispatch();

  function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (email.value !== '' && password.value !== '') {
      dispatch(getUserProfileAsync.request(email.value));
    }
  }
  function handleSkip() {
    setStorage('token', 'Not available');
    window.location.reload();
  }

  return (
    <AuthForm.Login
      email={email}
      password={password}
      onSubmit={handleLogin}
      onSkip={handleSkip}
    />
  );
}
