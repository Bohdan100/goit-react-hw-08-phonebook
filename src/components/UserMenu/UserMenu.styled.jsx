import styled from 'styled-components';

export const UserMenuWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const UserMenuText = styled.span`
  margin: 0;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: var(--textBlack);

  font-size: 10px;
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.bold};

  @media (min-width: 768px) {
    margin: 0 12px;
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

export const ExitBtn = styled.li`
  width: 30px;
  margin: 0;
  padding: 0;

  border: 1px solid ${p => p.theme.colors.indigo};
  border-radius: ${p => p.theme.radii.border};
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  color: ${p => p.theme.colors.white};
  font-size: 10px;
  font-weight: ${p => p.theme.fontWeights.bold};
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (min-width: 768px) {
    min-width: 50px;

    margin-right: 15px;
    padding: 10px;

    font-size: ${props => props.theme.fontSizes.xs};
  }

  :hover {
    background-color: var(--textFirst);
    cursor: pointer;
  }
`;
