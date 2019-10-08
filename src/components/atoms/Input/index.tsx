import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

interface Flexible {
  from: number | string;
  to: number | string;
}
interface Props {
  localeId: string;
  required: boolean;
  type?: string;
}
interface FlexibleProps extends Props, Flexible {}

const Default = styled.input`
  border: ${props => props.theme.styles.boxBorder};
  border-radius: ${props => props.theme.styles.borderRadius};
  background-color: ${props => props.theme.bgColors.main};
  font-size: 0.8rem;
  padding: 0.5em 0.625em;
  width: 100%;
`;
const Flexible = styled(Default)<Flexible>`
  width: ${props => props.from}px;
  border: none;
  background-color: rgba(255, 255, 255, 0.1);
  transition: width 0.2s;
  &:focus {
    width: ${props => props.to}px;
    background-color: rgba(255, 255, 255, 1);
  }
  &::placeholder {
    color: ${props => props.theme.textColors.secondary};
  }
`;

export function FlexibleInput({
  localeId,
  type = 'text',
  from,
  to,
  ...rest
}: FlexibleProps) {
  const { formatMessage: f } = useIntl();

  return (
    <Flexible
      from={from}
      to={to}
      placeholder={f({ id: localeId })}
      type={type}
      {...rest}
    />
  );
}

export function Input({
  localeId,
  type = 'text',
  required = false,
  ...rest
}: Props) {
  const { formatMessage: f } = useIntl();

  return (
    <Default
      required={required}
      placeholder={f({ id: localeId })}
      type={type}
      {...rest}
    />
  );
}
