import React, { useState, useEffect } from 'react';
import AuthPresenter from './AuthPresenter';
import { search } from '../../api';
import useInput from '../../hooks/useInput';

const onSubmit = async e => {
  e.preventDefault();
  console.log('submit');
};

export default () => {
  const [type, setType] = useState('logIn');
  const [images, setImages] = useState([]);
  const username = useInput('');
  const firstName = useInput('');
  const lastName = useInput('');
  const secret = useInput('');
  const email = useInput('');
  useEffect(() => {
    search
      .randomImg()
      .then(({ data: { images } }) => setImages(images))
      .catch(err => console.log(err));
  }, []);
  return (
    <AuthPresenter
      type={type}
      setType={setType}
      username={username}
      firstName={firstName}
      lastName={lastName}
      secret={secret}
      email={email}
      onSubmit={onSubmit}
      backgroundImgs={images}
    />
  );
};
