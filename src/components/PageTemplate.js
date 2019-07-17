import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';

const Wrapper = styled.div`
  margin: 3% auto;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
`;

const Template = ({ children }) => (
  <>
    <Header />
    <Wrapper>{children}</Wrapper>
  </>
);

Template.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Template;
