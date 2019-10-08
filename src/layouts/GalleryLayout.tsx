import React from 'react';
import styled from 'styled-components';
import Layout from './base/NavLayout';
import { RandomImgType } from '../api/auth';
import { Carousel } from '../components/atoms';
import { NavProps } from '../components/organisms';

interface Props {
  children: React.ReactNode;
}

const galleryLinks: NavProps = {
  main: [
    {
      to: '/recent',
      localeId: 'nav.recent',
    },
    {
      to: '/',
      localeId: 'nav.trending',
    },
  ],
  sub: [
    {
      to: '/follow',
      localeId: 'nav.follow',
    },
    {
      to: '/bookmark',
      localeId: 'nav.bookmark',
    },
    {
      to: '/recommended',
      localeId: 'nav.recommended',
    },
    {
      to: '/history',
      localeId: 'nav.history',
    },
  ],
};

const Feat = styled.div`
  width: 100%;
  height: 10vh;
  background-color: red;
`;

function Test_1() {
  return <Feat />;
}

export default function GalleryLayout({ children }: Props) {
  return (
    <Layout Feature={Test_1} links={galleryLinks}>
      {children}
    </Layout>
  );
}
