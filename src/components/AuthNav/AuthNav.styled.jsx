import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled.li`
  margin-right: 20px;
  padding: 12px;
  border-radius: ${p => p.theme.radii.border};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  font-weight: ${p => p.theme.fontWeights.bold};
  list-style: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: var(--textFirst);
    cursor: pointer;
  }
`;

export const NavigationLink = styled(NavLink)`
  padding: 15px;
  text-decoration: none;

  color: ${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.orange};
  }
`;
