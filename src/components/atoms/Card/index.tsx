import styled from 'styled-components';

export const Card = styled.div`
  border: ${props => props.theme.styles.boxBorder};
  border-radius: ${props => props.theme.styles.borderRadius};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
