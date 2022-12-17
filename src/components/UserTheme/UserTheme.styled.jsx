import styled from 'styled-components';

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.span`
  color: var(--textBlack);
  margin-right: 15px;
  font-size: 20px;
  opacity: 0.9;

  &:hover {
    color: var(--textFirst);
    cursor: pointer;
    opacity: 1;
  }
`;
