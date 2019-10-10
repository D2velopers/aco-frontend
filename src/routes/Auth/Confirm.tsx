import React from 'react';
import { useInput } from '../../lib/hooks';
import { AuthForm } from '../../components/organisms';

export default function Confirm() {
  const secret = useInput('');

  function handleConfirm() {
    if (secret.value !== '') console.log('CONFIRM ACTION');
  }

  return <AuthForm.Confirm secret={secret} onSubmit={handleConfirm} />;
}
