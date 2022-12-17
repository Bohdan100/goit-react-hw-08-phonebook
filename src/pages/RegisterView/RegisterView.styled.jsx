import styled from 'styled-components';

export const RegisterTitle = styled.h1`
  margin-bottom: 15px;

  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const RegisterText = styled.p`
  margin-bottom: 15px;

  font-size: 10px;
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};

  @media (min-width: 768px) {
    margin-bottom: 30px;
    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

export const RegisterForm = styled.form`
  width: 250px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 768px) {
    width: 320px;
  }
`;

export const RegisterLabel = styled.label`
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 5px;

  font-size: 10px;
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};

  @media (min-width: 768px) {
    margin-bottom: 15px;
    gap: 10px;

    font-size: ${props => props.theme.fontSizes.xs};
  }
`;

export const InputTextWrapper = styled.div`
  display: flex;
  gap: 5px;

  @media (min-width: 768px) {
    gap: 10px;
  }
`;

export const InputTextIcon = styled.div`
  margin-top: 1px;

  @media (min-width: 768px) {
    margin-top: 3px;
  }
`;

export const RegisterInput = styled.input`
  width: 250px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.normal};

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;

export const RegisterButton = styled.button`
  min-width: 120px;

  margin: 20px auto 0;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[1]}px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: ${p => p.theme.radii.border};
  background-color: ${p => p.theme.colors.blueFirst};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes.xs};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.middle};

  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  @media (min-width: 768px) {
    min-width: 180px;
    padding: ${p => p.theme.space[3]}px;

    display: block;
    font-size: ${p => p.theme.fontSizes.s};
  }

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.indigo};
  }
`;
