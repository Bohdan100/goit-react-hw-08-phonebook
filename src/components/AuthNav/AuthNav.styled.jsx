import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationItem = styled.li`
  margin-right: 5px;
  padding: 0px;
  border-radius: ${p => p.theme.radii.border};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  list-style: none;

  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    padding: 12px 8px;
  }

  @media (min-width: 1200px) {
    padding: 12px;
    margin-right: 20px;
  }

  :hover {
    background-color: var(--textFirst);
    cursor: pointer;
  }
`;

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  padding: 0px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};

  &.active {
    color: ${p => p.theme.colors.orange};
  }

  @media (min-width: 768px) {
    padding: 12px 8px;
    font-size: ${p => p.theme.fontSizes.s};
  }

  @media (min-width: 1200px) {
    padding: 15px;
  }
`;
