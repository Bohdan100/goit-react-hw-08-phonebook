import styled from 'styled-components';

export const ThemeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SunIconWrapper = styled.span`
  color: ${p => p.theme.colors.black};
  margin-right: 15px;
  font-size: 20px;
  opacity: 0.9;

  &:hover {
    color: ${p => p.theme.colors.blueFirst};
    cursor: pointer;
    opacity: 1;
  }
`;
export const MoonIconWrapper = styled.span`
  color: ${p => p.theme.colors.black};
  font-size: 20px;
  opacity: 0.9;

  &:hover {
    color: ${p => p.theme.colors.blueFirst};
    cursor: pointer;
    opacity: 1;
  }
`;
