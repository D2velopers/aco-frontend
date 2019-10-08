import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface Style {
  showing: boolean;
}
interface Props {
  children: React.ReactNode[];
}
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;
const Item = styled.div<Style>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: ${props => (props.showing ? 1 : 0)};
  transition: opacity 0.5s;
`;

export default function Carousel({ children }: Props) {
  const [current, setCurrent] = useState(0);
  function slide() {
    const size = children.length;
    if (current === size - 1) {
      return setTimeout(() => setCurrent(0), 3000);
    } else {
      return setTimeout(() => setCurrent(current + 1), 3000);
    }
  }
  useEffect(() => {
    const timer = slide();
    return () => clearTimeout(timer);
  }, [current]);
  return (
    <Wrapper>
      {children.map((item: React.ReactNode, index: number) => (
        <Item key={`Carousel_item_${index}`} showing={index === current}>
          {item}
        </Item>
      ))}
    </Wrapper>
  );
}
