import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import AuthPresenter from './AuthPresenter';
import { search } from '../../api';
import action from '../../actions';
import useInput from '../../hooks/useInput';

export default () => {
  const dispatch = useDispatch();
  const successLogin = payload => dispatch(action.authLogin.success(payload));
  const [type, setType] = useState('logIn');
  const [images, setImages] = useState([]);
  const username = useInput('');
  const fullName = useInput('');
  const secret = useInput('');
  const email = useInput('');
  const password = useInput('');

  useEffect(() => {
    search
      .randomImg()
      .then(({ data: { images } }) => setImages(images))
      .catch(err => console.log(err));
  }, []);
  useEffect(() => {
    username.setValue('');
    fullName.setValue('');
    secret.setValue('');
    email.setValue('');
    password.setValue('');
  }, [type]);
  const onSkip = () => {
    localStorage.setItem('token', 'Not available');
    window.location.reload();
  };
  const onSubmit = async e => {
    e.preventDefault();

    if (type === 'logIn') {
      if (email.value !== '') {
        // login
        successLogin({
          userInfo: {
            user_id: 'test@test.com',
            user_name: 'test',
            token: 'test_token',
          },
        });
      } else {
        toast.error('Email is required');
      }
    } else if (type === 'signUp') {
      if (
        email.value !== '' &&
        password.value !== '' &&
        username.value !== ''
      ) {
        console.log('SIGNUP ACTION');
      } else {
        toast.error('All field are required');
      }
    } else if (type === 'confirm') {
      if (secret.value !== '') {
        // email confirm
        console.log('EMAIL CONFIRM ACTION');
      }
    }
  };
  return (
    <AuthPresenter
      type={type}
      setType={setType}
      username={username}
      fullName={fullName}
      secret={secret}
      email={email}
      password={password}
      onSubmit={onSubmit}
      onSkip={onSkip}
      backgroundImgs={images}
    />
  );
};
