import React, { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router';
import { getRandomImg, RandomImgType } from '../api/auth';
import { AuthLayout } from '../layouts';
import { LoginPage, SignUpPage, ConfirmPage } from '../pages/AuthPages';

export default function Auth() {
  const [list, setList] = useState<RandomImgType[]>([]);

  useEffect(() => {
    getRandomImg().then((res: RandomImgType[]) => {
      setList(res);
    });
  }, []);
  return (
    <AuthLayout list={list}>
      <Switch>
        <Route path={'/login'} component={LoginPage} />
        <Route path={'/signup'} component={SignUpPage} />
        <Route path={'/confirm'} component={ConfirmPage} />
        <Route path={'/'} component={LoginPage} />
      </Switch>
    </AuthLayout>
  );
}
