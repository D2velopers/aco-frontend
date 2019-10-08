import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { useInput } from '../../../lib/hooks/useInput';
import { Button, MenuItem } from '../../atoms';
import { FlexibleInput } from '../../atoms/Input';

const Header = styled.header`
  width: 100%;
  background-color: ${props => props.theme.bgColors.header};
  position: sticky;
  top: 0;
  left: 0;
`;
const Wrapper = styled.div`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spaces.aside};
  height: ${props => props.theme.sizes.header};
`;
const Desktop = styled(Wrapper)`
  display: flex;
  @media ${props => props.theme.sizes.middle} {
    display: none;
  }
`;
const Mobile = styled(Wrapper)`
  display: none;
  @media ${props => props.theme.sizes.middle} {
    display: flex;
  }
`;
const Column = styled.div`
  display: flex;
  align-items: center;
  > *:not(:last-child) {
    margin-right: 2rem;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput('');
  /* const { user_id, user_name } = useSelector(
    ({ authReducer }) => authReducer.userInfo
  ); */
  const onSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
        <Column>
          <MenuItem to="/" localeId="app.fullName" />
          <form onSubmit={onSearchSubmit}>
            <FlexibleInput
              from="225"
              to="470"
              required
              localeId="app.searchAco"
              {...search}
            />
          </form>
          <MenuItem to="#" localeId="app.fullName" />
        </Column>
        <Column>
          <Button localeId="app.login" onClick={takeLogin} />
        </Column>
      </Desktop>
      <Mobile>
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
      </Mobile>
    </Header>
  );
});
