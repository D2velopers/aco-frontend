import React from 'react';
import styled from 'styled-components';
import { Dot } from '../../atoms';

type Props = {
  list: React.ReactNode[];
  currentIndex: number;
};
interface Dot {
  isActive: boolean;
}

const Container = styled.div`
  display: flex;
  z-index: 2;
`;

export default function Stepper({ list, currentIndex }: Props) {
  return (
    <Container>
      {list.map((_, index) => (
        <Dot
          key={`dot_${index}`}
          color={currentIndex === index ? '#61dafb' : 'rgba(0, 0, 0, 0.26)'}
        />
      ))}
    </Container>
  );
}
