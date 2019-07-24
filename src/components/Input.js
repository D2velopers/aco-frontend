import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
`;

const Input = ({ locale, required = true, value, onChange, type = 'text' }) => (
  <FormattedMessage id={locale}>
    {placeholder => (
      <Container
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        type={type}
      />
    )}
  </FormattedMessage>
);

Input.propTypes = {
  locale: PropTypes.string.isRequired,
  required: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export const InputPropTypes = PropTypes.shape({
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
});

export default Input;
