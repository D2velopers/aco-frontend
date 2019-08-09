import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import Input from './Input';
import Button from './Button';
import { Magnifier } from './Icons';

const Header = styled.header`
  width: 100%;
  position: sticky;
  z-index: 800;
  top: 0;
  left: 0;
  height: 60px;
  background-color: ${({ theme }) => theme.darkGreyColor};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${({ theme }) => theme.globalSpace};
`;
const HeaderColumn = styled.div`
  display: flex;
  align-items: center;
  flex: ${({ main }) => (main ? 1 : 0)};
  &:not(:last-child) {
    margin-right: ${({ theme }) => theme.globalSpace};
  }
  > * {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.globalSpace};
    }
  }
`;
const InputWrapper = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  > * {
    &:not(:last-child) {
      margin-right: ${({ theme }) => theme.globalSpace};
    }
  }
  input {
    width: 225px;
    border: none;
    background-color: rgba(255, 255, 255, 0.1);
    transition: width 0.2s;
    &:focus {
      width: 470px;
      background-color: rgba(255, 255, 255, 1);
    }
    &::placeholder {
      color: ${({ theme }) => theme.greyColor};
    }
  }
`;
const Desktop = styled(HeaderWrapper)`
  display: none;
  @media ${({ theme }) => theme.tablet} {
    display: flex;
  }
`;
const Mobile = styled(HeaderWrapper)`
  display: flex;
  @media ${({ theme }) => theme.tablet} {
    display: none;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput('');
  const { user_id, user_name } = useSelector(
    ({ authReducer }) => authReducer.userInfo
  );
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const takeLogin = () => {
    localStorage.removeItem('token');
    window.location.reload();
  };
  return (
    <Header>
      <Desktop>
        <HeaderColumn>
          <Link to="/">logo</Link>
        </HeaderColumn>
        <HeaderColumn main>
          <InputWrapper onSubmit={onSearchSubmit}>
            <Input
              locale="msg.searchAco"
              icon={Magnifier}
              size={14}
              {...search}
            />
            <Link to="#">커미션</Link>
          </InputWrapper>
        </HeaderColumn>
        <HeaderColumn>
          {user_id ? <></> : <Button locale="msg.login" onClick={takeLogin} />}
        </HeaderColumn>
      </Desktop>

      <Mobile>
        <Link>menu</Link>
        <Link>btn</Link>
        <Link>logo</Link>
        <Link>btn</Link>
        <Link>user</Link>
      </Mobile>
    </Header>
  );
});
