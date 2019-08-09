import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const MasonryDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.globalSpace};
  margin: ${({ theme }) => theme.globalSpace};
`;
const Col = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.globalSpace};
  grid-auto-rows: max-content;
`;

const createCols = (children, cols, numCols) => {
  for (let i = 0; i < numCols; i++) cols[i] = [];
  children.forEach((child, i) => cols[i % numCols].push(child));
};

export default ({ children, minWidth = 500 }) => {
  const cols = [];
  const ref = useRef();
  const [numCols, setNumCols] = useState(3);
  createCols(children, cols, numCols);

  useEffect(() => {
    const calcNumCols = () =>
      setNumCols(Math.ceil(ref.current.offsetWidth / minWidth));
    calcNumCols();
    window.addEventListener(`resize`, calcNumCols);
    return () => window.removeEventListener(`resize`, calcNumCols);
  }, [minWidth]);

  return (
    <MasonryDiv ref={ref}>
      {Array.from({ length: numCols }, (_, index) => (
        <Col key={index}>{cols[index]}</Col>
      ))}
    </MasonryDiv>
  );
};
