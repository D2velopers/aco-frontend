import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

interface Props {
  localeId: string;
  onClick?(): void;
}

const Wrapper = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.styles.borderRadius};
  color: white;
  font-weight: 600;
  background-color: ${props => props.theme.hlColors.main};
  text-align: center;
  padding: 7px 14px;
  font-size: 14px;
  cursor: pointer;
`;

export function Button({ localeId, onClick }: Props) {
  const { formatMessage: f } = useIntl();

  return <Wrapper onClick={onClick}>{f({ id: localeId })}</Wrapper>;
}
