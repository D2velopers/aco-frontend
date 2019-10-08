import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useIntl } from 'react-intl';

interface Props {
  localeId: string;
  to: string;
}

const Default = styled(NavLink)`
  display: flex;
  height: 100%;
  align-items: center;
`;
const Underline = styled(Default)`
  border-bottom: 2px solid transparent;
  color: ${props => props.theme.textColors.secondary};
  transition: color 0.3s, border-bottom 0.3s;
  &:hover {
    border-bottom: 2px solid ${props => props.theme.textColors.secondary};
    color: ${props => props.theme.textColors.main};
  }
  &.active {
    border-bottom: 2px solid ${props => props.theme.textColors.main};
    color: ${props => props.theme.textColors.main};
  }
`;

export function UnderlineMenuItem({ localeId, to }: Props) {
  const { formatMessage: f } = useIntl();

  return (
    <Underline exact to={to}>
      {f({ id: localeId })}
    </Underline>
  );
}

export function MenuItem({ localeId, to }: Props) {
  const { formatMessage: f } = useIntl();

  return (
    <Default exact to={to}>
      {f({ id: localeId })}
    </Default>
  );
}
