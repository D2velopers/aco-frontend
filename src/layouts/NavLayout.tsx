import React from 'react';
import styled from 'styled-components';
import { Nav, NavProps } from '../components/organisms';

interface Link {
  to: string;
  locale: string;
}

interface Props {
  Feature?(): JSX.Element;
  children: React.ReactNode;
  links: NavProps;
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

const Centered = styled.div`
  max-width: ${props => props.theme.sizes.contentsMaxWidth};
  width: 100%;
  margin: 1rem auto;
`;

export default function NavLayout({ links, Feature, children }: Props) {
  return (
    <Layout>
      {Feature && <Feature />}
      <Nav links={links} />
      <Centered>{children}</Centered>
    </Layout>
  );
}
