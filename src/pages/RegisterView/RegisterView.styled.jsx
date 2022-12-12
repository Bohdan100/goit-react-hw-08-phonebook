import styled from 'styled-components';

export const RegisterTitle = styled.h1`
  margin-bottom: 30px;

  font-size: ${props => props.theme.fontSizes.l};
  line-height: ${props => props.theme.lineHeights.body};
  font-weight: ${props => props.theme.fontWeights.bold};
  color: ${p => p.theme.colors.black};
`;

export const RegisterText = styled.p`
  margin-bottom: 30px;

  font-size: ${props => props.theme.fontSizes.xs};
  line-height: ${props => props.theme.lineHeights.heading};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${p => p.theme.colors.black};
`;

export const RegisterForm = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
`;

export const RegisterLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  margin-bottom: 15px;
`;

export const RegisterInput = styled.input`
  min-width: 320px;
  padding: 5px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const RegisterButton = styled.button`
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;

  padding: ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.border};
  background-color: ${p => p.theme.colors.blueFirst};
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  display: block;
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  text-decoration: none;
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes.s};
  line-height: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.middle};
  min-width: 180px;
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.indigo};
  }
`;

export const InputTextWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  align-items: center;
  gap: 10px;
`;

export const InputTextIcon = styled.div`
  margin-top: 5px;
`;
