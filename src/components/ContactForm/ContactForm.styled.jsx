import styled from 'styled-components';

export const PhonebookForm = styled.form`
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50px;
  border: ${p => p.theme.borders.normal};
  border-color: var(--borderWrapper);
  border-radius: ${p => p.theme.radii.normal};
`;

export const PhonebookFormLabel = styled.label`
  width: 320px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: var(--textBlack);
`;

export const PhonebookFormInput = styled.input`
  width: 320px;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const PhonebookFormBtn = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 10px;

  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  background-color: var(--contactsButton);
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const BtnText = styled.span`
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.white};
`;
