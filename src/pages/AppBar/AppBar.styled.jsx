import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.nav`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 0;
  background-color: ${p => p.theme.colors.blueSecond};
  text-align: center;
`;

export const AppBarWrapper = styled.nav`
  width: 90%;
  height: 80px;
  margin: 0px auto 200px;
  padding: 5px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${p => p.theme.colors.blueThird};
  color: ${p => p.theme.colors.black};
  box-shadow: 25px 25px 75px rgba(255, 255, 255, 0.25),
    10px 10px 70px rgba(255, 255, 255, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.75);
  border-radius: 20px;
`;

export const HomeLink = styled(Link)`
  padding: 10px;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes.xl};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.blueFirst};

  &:hover {
    /* color: ${p => p.theme.colors.blueFirst}; */
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;
