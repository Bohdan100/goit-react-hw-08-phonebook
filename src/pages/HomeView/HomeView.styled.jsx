import styled from 'styled-components';

export const HomeViewText = styled.p`
  margin-bottom: 30px;

  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};
`;
