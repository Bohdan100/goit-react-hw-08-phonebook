import styled from 'styled-components';

export const FilterLabel = styled.label`
  margin-right: 10px;
`;

export const FilterInput = styled.input`
  width: 200px;
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  background-color: var(--inputWrapper);
  color: var(-textBlack);
`;
