import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

// export const NavigationItem = styled.li`
//   list-style: none;
//   padding: 12px;
//   font-weight: 700;
//   margin-right: 20px;
//   border-radius: ${p => p.theme.radii.border};
//   box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
//     0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

//   transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

//   :hover {
//     background-color: ${p => p.theme.colors.blueFirst};
//     cursor: pointer;
//   }
// `;

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
    color: ${p => p.theme.colors.orange};
  }

  &:hover {
    color: ${p => p.theme.colors.blueFirst};
  }
`;
