import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';

const MasonryDiv = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: ${props => props.gap || `2em`};
  margin: 2em auto;
  @media ${({ theme }) => theme.laptopL} {
    max-width: 1320px;
  }
`;
const Col = styled.div`
  display: grid;
  grid-gap: ${props => props.gap || `2em`};
  grid-auto-rows: max-content;
`;

const createCols = (children, cols, numCols) => {
  for (let i = 0; i < numCols; i++) cols[i] = [];
  children.forEach((child, i) => cols[i % numCols].push(child));
};

export default ({ children, gap, minWidth = 500 }) => {
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
    <MasonryDiv ref={ref} gap={gap}>
      {Array.from({ length: numCols }, (_, index) => (
        <Col key={index} gap={gap}>
          {cols[index]}
        </Col>
      ))}
    </MasonryDiv>
  );
};
