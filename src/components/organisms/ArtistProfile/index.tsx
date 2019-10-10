import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from '../../atoms';

interface Props<T> {
  user: T;
}

const Wrapper = styled.div`
  background-color: ${props => props.theme.bgColors.secondary};
`;
const Profile = styled.div`
  display: flex;
  width: 100%;
  max-width: ${props => props.theme.sizes.middle};
  margin: 0 auto;
  justify-content: center;
  padding: 2rem 0;
`;
const Details = styled.div`
  padding-left: 2rem;
  flex: 1;
`;
const Column = styled.div`
  display: flex;
  padding-bottom: 1.5rem;
  flex-direction: row;
  @media ${props => props.theme.sizes.middle} {
    flex-direction: column;
  }
`;
const Name = styled.div`
  font-size: 2.5em;
`;
const Btns = styled.div`
  display: flex;
  padding-left: 1.5rem;
  > * {
    &:not(:last-child) {
      margin-right: 0.5rem;
    }
  }
`;

export default function ArtistProfile<T extends any>({ user }: Props<T>) {
  return (
    <Wrapper>
      <Profile>
        <Avatar size={150} src={user.avatar_url} alt={user.login} />
        <Details>
          <Column>
            <Name>{user.name}</Name>
            <Btns>
              <Button localeId="app.follow" />
              <Button localeId="app.message" />
            </Btns>
          </Column>
          <Column>{user.bio}</Column>
          <Column>{user.followers}</Column>
        </Details>
      </Profile>
    </Wrapper>
  );
}
