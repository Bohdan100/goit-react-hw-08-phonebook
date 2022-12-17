import styled from 'styled-components';

export const HomeViewWrapper = styled.div`
  text-align: center;
`;

export const HomeViewText = styled.p`
  margin-bottom: 30px;

  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: var(--textBlack);
`;

export const IconWrapper = styled.span`
  margin: 0;
  padding: 0;
  color: var(--textFirst);
  opacity: 0.8;
`;
