import styled from 'styled-components';

export const UserMenuWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const UserMenuText = styled.span`
  margin-right: 12px;
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const ExitBtn = styled.li`
  min-width: 50px;
  margin-right: 15px;
  padding: 10px;
  border: 1px solid ${p => p.theme.colors.indigo};
  border-radius: ${p => p.theme.radii.border};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    background-color: ${p => p.theme.colors.blueFirst};
    cursor: pointer;
  }
`;
