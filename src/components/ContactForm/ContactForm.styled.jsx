import styled from 'styled-components';

export const PhonebookForm = styled.form`
  display: block;
  width: 250px;

  margin: 0 auto 30px;
  padding: 10px;

  border: ${p => p.theme.borders.normal};
  border-color: var(--borderWrapper);
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    width: 380px;
    padding: 20px;

    margin-bottom: 50px;
  }
`;

export const PhonebookFormLabel = styled.label`
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  color: var(--textBlack);

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;

export const PhonebookFormInput = styled.input`
  width: 200px;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: var(--inputWrapper);
  color: var(-textBlack);
  outline: none;

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;

export const PhonebookFormBtn = styled.button`
  width: 150px;
  margin-right: 20px;
  padding: 5px;

  cursor: pointer;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};

  background-color: var(--contactsButton);

  @media (min-width: 768px) {
    padding: 10px;
  }
`;
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

export const BtnText = styled.span`
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: ${p => p.theme.fontWeights.middle};
  color: ${p => p.theme.colors.white};
`;
