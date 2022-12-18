import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: 12px;

  @media (min-width: 768px) {
    margin-left: 200px;
  }

  @media (min-width: 1200px) {
    margin-left: 400px;
  }
`;
