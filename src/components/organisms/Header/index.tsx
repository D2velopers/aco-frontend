import React from 'react';
import styled from 'styled-components';
import { InputTypes } from '../../../lib/hooks';
import { Button, MenuItem } from '../../atoms';
import { FlexibleInput } from '../../atoms/Input';

interface Props {
  user: any;
  search: InputTypes;
  onSearchSubmit(e: React.FormEvent<HTMLFormElement>): void;
  onLogin(): void;
}

const Position = styled.header`
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

export default function Header({
  user,
  search,
  onSearchSubmit,
  onLogin,
}: Props) {
  return (
    <Position>
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
          {user ? (
            <>
              <MenuItem to={`/upload`} localeId="app.fullName" />
              <MenuItem to={`@${user.login}`} localeId="app.fullName" />
            </>
          ) : (
            <Button localeId="app.login" onClick={onLogin} />
          )}
        </Column>
      </Desktop>
      <Mobile>
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
        <MenuItem to="#" localeId="app.fullName" />
      </Mobile>
    </Position>
  );
}
