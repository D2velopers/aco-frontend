import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router';
import { getRandomImg, RandomImgType } from '../../api/auth';
import AuthLayout from '../../layouts/Auth';
import SignUp from './SignUp';
import Login from './Login';
import Confirm from './Confirm';

export default function AuthRoutes() {
  const [list, setList] = useState<RandomImgType[]>([]);

  useEffect(() => {
    getRandomImg().then((res: RandomImgType[]) => {
      setList(res);
    });
  }, []);
  return (
    <AuthLayout list={list}>
      <Switch>
        <Route path="/signup" component={SignUp} />
        <Route path="/confirm" component={Confirm} />
        <Route exact path="/" component={Login} />
        <Redirect from="*" to="/" />
      </Switch>
    </AuthLayout>
  );
}
