import React from 'react';
import styled from 'styled-components';

interface Props {
  src: string;
  alt: string;
}

const Wrapper = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #ffffff;
  background-repeat: no-repeat;
`;

export function Avatar({ src, alt }: Props) {
  return (
    <Wrapper>
      <Img src={src} alt={alt} />
    </Wrapper>
  );
}
