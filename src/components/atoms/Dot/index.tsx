import styled from 'styled-components';

interface Props {
  color: string;
}

export const Dot = styled.div<Props>`
  background-color: ${props => props.color};
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.25rem;
  border-radius: 50%;
`;
