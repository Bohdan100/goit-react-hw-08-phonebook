import styled from 'styled-components';

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconWrapper = styled.span`
  color: var(--textBlack);
  font-size: 10px;
  margin-right: 5px;

  opacity: 0.9;

  @media (min-width: 768px) {
    margin-right: 10px;
    font-size: 15px;
  }

  @media (min-width: 1200px) {
    margin-right: 15px;
    font-size: 20px;
  }

  &:hover {
    color: var(--textFirst);
    cursor: pointer;
    opacity: 1;
  }
`;
