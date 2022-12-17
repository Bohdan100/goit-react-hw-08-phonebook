import styled from 'styled-components';

export const ContactsListItem = styled.li`
  width: 300px;
  margin-bottom: ${p => p.theme.space[3]}px;

  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (min-width: 768px) {
    width: auto;

    gap: 10px;

    margin-right: ${p => p.theme.space[2]}px;
  }
`;

export const ContactsListText = styled.span`
  text-align: left;
  color: var(--textBlack);

  @media (min-width: 768px) {
    min-width: 185px;
  }
`;

export const ContactsButtonDelete = styled.button`
  width: 50px;
  height: 25px;
  padding: ${p => p.theme.space[1]}px;

  font: inherit;
  cursor: pointer;
  outline: none;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  font-size: 10px;
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: ${p => p.theme.colors.white};
  background-color: var(--contactsButton);

  @media (min-width: 768px) {
    min-width: 70px;
    font-size: ${p => p.theme.fontSizes.xs};
  }
`;
