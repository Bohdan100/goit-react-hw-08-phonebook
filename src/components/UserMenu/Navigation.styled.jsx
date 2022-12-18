import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-right: 5px;
  padding: 0;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: var(--textBlack);

  @media (min-width: 768px) {
    padding: 12px 8px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1200px) {
    margin-left: 15px;
    padding: 10px;

    font-size: ${p => p.theme.fontSizes.m};
  }

  &.active {
    color: var(--textFirst);
  }

  &:hover {
    color: var(--textFirstHover);
  }
`;
