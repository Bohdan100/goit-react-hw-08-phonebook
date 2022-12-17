import styled from 'styled-components';

export const ContactsListItem = styled.li`
  margin-bottom: ${p => p.theme.space[3]}px;
  margin-right: ${p => p.theme.space[2]}px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  gap: 10px;
`;

export const ContactsListText = styled.span`
  min-width: 185px;
  text-align: left;
  color: var(--textBlack);
`;

export const ContactsButtonDelete = styled.button`
  min-width: 70px;
  height: 25px;
  padding: ${p => p.theme.space[1]}px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  background-color: var(--contactsButton);
`;
