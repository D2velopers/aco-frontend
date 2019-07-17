import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: ${props => props.fontSize}px;
`;

const Subtitle = () => (
  <FormattedMessage id={'app.logo.subtitle'}>
    {subtitle => <span>{subtitle}</span>}
  </FormattedMessage>
);

const Logo = ({ isFull, fontSize }) =>
  isFull ? (
    <Wrapper>
      <Title fontSize={fontSize}>ACO</Title>
      {isFull && <Subtitle />}
    </Wrapper>
  ) : (
    <Wrapper fontSize={fontSize}>ACO</Wrapper>
  );

Logo.propTypes = {
  isFull: PropTypes.bool.isRequired,
  fontSize: PropTypes.number,
};

export default Logo;
