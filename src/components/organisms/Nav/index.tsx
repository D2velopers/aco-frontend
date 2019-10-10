import React from 'react';
import styled from 'styled-components';
import { UnderlineMenuItem } from '../../atoms';

interface Link {
  to: string;
  localeId: string;
}
export interface NavProps {
  main: Link[];
  sub?: Link[];
}
interface Props {
  links: NavProps;
}

const Position = styled.div`
  background-color: ${props => props.theme.bgColors.secondary};
  position: sticky;
  top: ${props => props.theme.sizes.header};
  left: 0;
`;
const Wrapper = styled.nav`
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;
const MainMenu = styled.ul`
  display: flex;
  > li:not(:last-child) {
    margin-right: 1rem;
  }
  a {
    padding: 1rem 0.5rem;
  }
`;
const SubMenu = styled(MainMenu)`
  overflow-x: auto;
`;
const Divider = styled.div`
  width: 1px;
  height: 2rem;
  margin: 0 1rem;
  background-color: ${props => props.theme.bgColors.tertiary};
`;

export function Nav({ links }: Props) {
  return (
    <Position>
      <Wrapper>
        <MainMenu>
          {links.main.map(({ to, localeId }) => (
            <li key={localeId}>
              <UnderlineMenuItem to={to} localeId={localeId} />
            </li>
          ))}
        </MainMenu>
        {links.sub && (
          <>
            <Divider />
            <SubMenu>
              {links.sub.map(({ to, localeId }) => (
                <li key={localeId}>
                  <UnderlineMenuItem to={to} localeId={localeId} />
                </li>
              ))}
            </SubMenu>
          </>
        )}
      </Wrapper>
    </Position>
  );
}
