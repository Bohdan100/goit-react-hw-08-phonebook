import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MainWrapper = styled.nav`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  padding: 0 0 200px 0;
  background-color: var(--mainWrapper);
  text-align: center;
`;

export const AppBarWrapper = styled.nav`
  width: 100vw;
  height: 60px;
  margin: 0px auto 20px;
  padding: 5px 10px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: var(--appBarWrapper);
  color: ${p => p.theme.colors.black};
  box-shadow: 25px 25px 75px rgba(255, 255, 255, 0.25),
    10px 10px 70px rgba(255, 255, 255, 0.25),
    inset 5px 5px 10px rgba(0, 0, 0, 0.5), inset 5px 5px 20px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.75);
  border-radius: 20px;

  @media (min-width: 768px) {
    width: 90vw;
    height: 80px;
    padding: 5px 20px;
    margin: 0px auto 100px;
  }
`;

export const HomeLink = styled(Link)`
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  color: var(--textFirst);
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.xs};
  padding: 5px;

  @media (min-width: 400px) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.m};
  }

  @media (min-width: 1200px) {
    font-size: ${p => p.theme.fontSizes.xl};
    padding: 10px;
  }
`;

export const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1200px) {
    gap: 80px;
  }
`;
