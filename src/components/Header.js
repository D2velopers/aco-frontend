import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import useInput from '../hooks/useInput';
import Input from './Input';
import Button from './Button';
import { Magnifier } from './Icons';

const Header = styled.header`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  height: 60px;
  background-color: ${props => props.theme.darkGreyColor};
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;
const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.wide};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderColumn = styled.div`
  display: flex;
  flex: 1;
  &:first-child {
    justify-content: flex-start;
  }
  &:last-child {
    justify-content: flex-end;
  }
  form {
    width: 100%;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput('');
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  const takeLogin = () => {
    localStorage.removeItem('token')
    window.location.reload()
  }
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">logo</Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <Input
              locale="msg.searchAco"
              icon={Magnifier}
              size={14}
              {...search}
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <Button locale="msg.login" onClick={takeLogin}/>
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
