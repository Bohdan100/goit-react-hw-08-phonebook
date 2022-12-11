import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.nav`
  width: 100%;
  height: 100vh;
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

  &:hover {
    color: ${p => p.theme.colors.blueFirst};
  }
`;
