import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { withRouter } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  width: 100%;
  height: 55px;
  position: sticky;
  top: 60px;
  display: flex;
  @media ${({ theme }) => theme.tablet} {
    justify-content: initial;
  }
  justify-content: center;
  align-items: center;
  z-index: 500;
  background-color: white;
  padding: 0 ${({ theme }) => theme.globalSpace};
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 1px rgba(1, 0, 0, 0.1);
  ul {
    height: 100%;
  }
`;
const MainMenu = styled.ul`
  display: flex;
`;
const SubMenu = styled.ul`
  display: flex;
  overflow-x: scroll;
`;
const Divider = styled.div`
  width: 1px;
  height: 50%;
  margin: 0 0.5rem;
  background-color: ${props => props.theme.lightGreyColor};
`;
const Item = styled.li`
  &:not(:last-child) {
    margin-right: 1rem;
  }
  white-space: nowrap;
`;
const Link = styled(NavLink)`
  display: flex;
  height: 100%;
  align-items: center;
  border-bottom: 2px solid transparent;
  color: ${({ theme }) => theme.greyColor};
  transition: color 0.3s;
  &:hover {
    color: black;
  }
  &.active {
    border-bottom: 2px solid black;
    color: black;
  }
  span {
    line-height: 1;
  }
`;

export default withRouter(
  React.memo(({ match, main, sub, inital }) => (
    <Wrapper>
      {main && (
        <MainMenu>
          {main.label.map((item, index) => (
            <Item key={item}>
              <Link
                exact
                to={`${match.url === '/' ? '' : match.url}${main.url[index]}`}>
                <FormattedMessage id={`app.nav.${main.label[index]}`} />
              </Link>
            </Item>
          ))}
        </MainMenu>
      )}
      {sub && <Divider />}
      {sub && (
        <SubMenu>
          {sub.label.map((item, index) => (
            <Item key={item}>
              <Link
                exact
                to={`${match.url === '/' ? '' : match.url}${sub.url[index]}`}>
                <FormattedMessage id={`app.nav.${sub.label[index]}`} />
              </Link>
            </Item>
          ))}
        </SubMenu>
      )}
    </Wrapper>
  ))
);
