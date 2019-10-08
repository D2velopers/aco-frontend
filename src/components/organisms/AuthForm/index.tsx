import React from 'react';
import styled from 'styled-components';
import { InputTypes } from '../../../lib/hooks';
import { Helmet, Logo, Card, Input, Button } from '../../atoms';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';

interface Essential {
  onSubmit(): void;
}
interface Login extends Essential {
  email: InputTypes;
  password: InputTypes;
  onSkip(): void;
}
interface SignUp extends Essential {
  email: InputTypes;
  password: InputTypes;
  username: InputTypes;
}
interface Confirm extends Essential {
  secret: InputTypes;
}

const WhiteBox = styled(Card)`
  width: 100%;
  opacity: 0.95;
  padding: 2em;
  background-color: ${props => props.theme.bgColors.main};
  &:last-child {
    margin-top: 1.5em;
  }
  > *:not(:last-child) {
    margin-bottom: 2em;
  }
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > *:not(:last-child) {
    margin-bottom: 1em;
  }
`;
const Options = styled.div`
  text-align: center;
`;
const Skip = styled.span`
  color: ${props => props.theme.hlColors.main};
  cursor: pointer;
`;

function Login({ onSubmit, onSkip, email, password }: Login) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <WhiteBox>
        <Helmet localeId="app.login" />
        <Logo isFull />
        <Form onSubmit={onSubmit}>
          <Input required type="email" localeId="app.email" {...email} />
          <Input
            required
            type="password"
            localeId="app.password"
            {...password}
          />
          <Button localeId="app.login" />
        </Form>
        <Options>
          <Skip onClick={onSkip}>{f({ id: 'auth.skip' })}</Skip>
        </Options>
      </WhiteBox>
      <WhiteBox>
        <span>
          {`${f({ id: 'auth.haveNotAccount' })} `}
          <Link to="/signup">{f({ id: 'app.signup' })}</Link>
        </span>
      </WhiteBox>
    </>
  );
}

function SignUp({ onSubmit, email, password, username }: SignUp) {
  const { formatMessage: f } = useIntl();

  return (
    <>
      <WhiteBox>
        <Helmet localeId="app.signup" />
        <Logo isFull />
        <Form onSubmit={onSubmit}>
          <Input required type="email" localeId="app.email" {...email} />
          <Input required localeId="app.username" {...username} />
          <Input
            required
            type="password"
            localeId="app.password"
            {...password}
          />
          <Button localeId="app.login" />
        </Form>
        <Options>
          <span>
            {f(
              {
                id: 'auth.policyCheck',
              },
              {
                tos: (
                  <Link key="help.tos" to="/help/tod">
                    {f({ id: 'help.tos' })}
                  </Link>
                ),
                dataPolicies: (
                  <Link key="help.dataPolicies" to="/help/dp">
                    {f({ id: 'help.dataPolicies' })}
                  </Link>
                ),
              }
            )}
          </span>
        </Options>
      </WhiteBox>
      <WhiteBox>
        <span>
          {`${f({ id: 'auth.haveNotAccount' })} `}
          <Link to="/login">{f({ id: 'app.login' })}</Link>
        </span>
      </WhiteBox>
    </>
  );
}

function Confirm({ onSubmit, secret }: Confirm) {
  return (
    <>
      <WhiteBox>
        <Helmet localeId="app.confirmSecret" />
        <Logo isFull />
        <Form onSubmit={onSubmit}>
          <Input required localeId="auth.pasteSecret" {...secret} />
          <Button localeId="app.confirm" />
        </Form>
      </WhiteBox>
    </>
  );
}

export default {
  Login,
  SignUp,
  Confirm,
};
