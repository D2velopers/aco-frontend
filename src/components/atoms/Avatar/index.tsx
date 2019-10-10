import React from 'react';
import styled from 'styled-components';

interface Style {
  size?: number;
}

interface Props extends Style {
  src: string;
  alt: string;
}

const Wrapper = styled.div<Style>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  margin-bottom: 15px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-color: #ffffff;
  background-repeat: no-repeat;
  border-radius: 50%;
`;

export function Avatar({ size = 50, src, alt }: Props) {
  return (
    <Wrapper size={size}>
      <Img src={src} alt={alt} />
    </Wrapper>
  );
}
