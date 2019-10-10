import React from 'react';
import { useInput } from '../../lib/hooks';
import { AuthForm } from '../../components/organisms';

export default function SignUp() {
  const username = useInput('');
  const email = useInput('');
  const password = useInput('');

  function handleSignUp() {
    if (email.value !== '' && password.value !== '' && username.value !== '')
      console.log('SIGNUP ACTION');
  }

  return (
    <AuthForm.SignUp
      email={email}
      username={username}
      password={password}
      onSubmit={handleSignUp}
    />
  );
}
