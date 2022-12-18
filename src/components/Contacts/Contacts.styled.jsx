import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: ${p => p.theme.space[4]}px;
  margin-left: 12px;

  @media (min-width: 360px) {
    display: inline-flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
`;
