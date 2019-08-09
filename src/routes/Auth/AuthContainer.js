import React, { useState, useEffect, useMemo } from 'react';
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
    if (!navigator.maxTouchPoints) {
      search
        .randomImg()
        .then(({ data }) => setImages(data))
        .catch(err => console.log(err));
    }
  }, []);
  useEffect(() => {
    username.setValue('');
    fullName.setValue('');
    secret.setValue('');
    email.setValue('');
    password.setValue('');
  }, [type]);
  const [currentItem, setCurrentItem] = useState(0);
  const slide = () => {
    const totalFiles = images.length;
    if (currentItem === totalFiles - 1) {
      setTimeout(() => setCurrentItem(0), 3000);
    } else {
      setTimeout(() => setCurrentItem(currentItem + 1), 3000);
    }
  };
  useMemo(slide);

  const onSkip = () => {
    localStorage.setItem('token', 'Not available');
    window.location.reload();
  };
  const onSubmit = async e => {
    e.preventDefault();

    if (type === 'logIn') {
      if (email.value !== '') {
        // login
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
      currentItem={currentItem}
    />
  );
};
