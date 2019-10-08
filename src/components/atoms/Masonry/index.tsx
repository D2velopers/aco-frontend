import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode[];
  maxWidth?: number;
}

const Wrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 2em;
  margin: 2em;
`;
const Col = styled.div`
  display: grid;
  grid-gap: 2em;
  grid-auto-rows: max-content;
  > * {
    width: 100%;
    &:before {
      counter-increment: items;
      content: counter(items);
    }
  }
`;

function createCols(children: React.ReactNode[], cols: any[], numCols: number) {
  for (let i = 0; i < numCols; i++) cols[i] = [];
  children.forEach((child, i) => cols[i % numCols].push(child));

  return cols;
}

export function Masonry({ children, maxWidth = 500 }: Props) {
  const cols: number[] = [];
  const ref = useRef<HTMLInputElement>(null);
  const [numCols, setNumCols] = useState(3);
  createCols(children, cols, numCols);

  useEffect(() => {
    const calcNumCols = () => {
      if (ref && ref.current)
        setNumCols(Math.ceil(ref.current.offsetWidth / maxWidth));
    };
    calcNumCols();
    window.addEventListener(`resize`, calcNumCols);
    return () => window.removeEventListener(`resize`, calcNumCols);
  }, [maxWidth]);

  return (
    <Wrapper ref={ref}>
      {Array.from({ length: numCols }, (_, index) => (
        <Col key={index}>{cols[index]}</Col>
      ))}
    </Wrapper>
  );
}
