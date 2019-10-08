import React from 'react';
import { Carousel } from '../components/atoms';
import { RandomImgType } from '../api/auth';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
  list: RandomImgType[];
}

const Layout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 300px;

  @media ${props => props.theme.sizes.middle} {
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  margin: 0;
`;

export default function AuthLayout({ list, children }: Props) {
  return (
    <Layout>
      <Carousel>
        {list.map(item => (
          <Image key={`Auth_bgImg_${item.id}`} src={item.url} />
        ))}
      </Carousel>
      <Form>{children}</Form>
    </Layout>
  );
}
