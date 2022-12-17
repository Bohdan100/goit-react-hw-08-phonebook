import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UserMenuLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  margin-right: 15px;
  padding: 10px;

  font-size: ${p => p.theme.fontSizes.m};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};

  &.active {
    color: var(--textFirst);
  }

  &:hover {
    color: ${p => p.theme.colors.indigo};
  }
`;
