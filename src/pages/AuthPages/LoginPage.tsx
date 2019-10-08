import React from 'react';
import { useInput } from '../../lib/hooks';
import { AuthForm } from '../../components/organisms';

export default function Auth() {
  const email = useInput('');
  const password = useInput('');

  function handleLogin() {
    if (email.value !== '' && password.value !== '')
      console.log('LOGIN ACTION');
  }
  function handleSkip() {
    localStorage.setItem('token', 'Not available');
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
