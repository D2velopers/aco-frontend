import React from 'react';
import styled from 'styled-components';
import { useIntl } from 'react-intl';

interface Props {
  isFull: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Title = styled.div`
  font-size: 48px;
`;

export function Logo({ isFull }: Props) {
  const { formatMessage: f } = useIntl();

  return (
    <Wrapper>
      <Title>ACO</Title>
      {isFull && <span>{f({ id: 'app.subtitle' })}</span>}
    </Wrapper>
  );
}
