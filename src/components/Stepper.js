import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;
const Dot = styled.div`
  background-color: ${props =>
    props.isActive ? props.theme.blueColor : 'rgba(0, 0, 0, 0.26)'};
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.25rem;
  border-radius: 50%;
`;

const Stepper = ({ list, currentIndex, color }) => (
  <Container>
    {list.map((item, index) => (
      <Dot key={`dot_${index}`} isActive={currentIndex === index} />
    ))}
  </Container>
);

Stepper.propTypes = {
  list: PropTypes.array,
  currentIndex: PropTypes.number,
};

export default Stepper;
