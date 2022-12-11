import { useLayoutEffect, useState } from 'react';
import { BsBrightnessHigh, BsFillMoonStarsFill } from 'react-icons/bs';
import {
  ThemeWrapper,
  SunIconWrapper,
  MoonIconWrapper,
} from './UserTheme.styled';

export const UserTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('user-theme') || 'light-blue'
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  const LightThemeOnClick = () => {
    setTheme('light-blue');
  };
  const DarkThemeOnClick = () => {
    setTheme('dark-blue');
  };

  return (
    <ThemeWrapper>
      <SunIconWrapper onClick={LightThemeOnClick}>
        <BsBrightnessHigh />
      </SunIconWrapper>
      <MoonIconWrapper onClick={DarkThemeOnClick}>
        <BsFillMoonStarsFill />
      </MoonIconWrapper>
    </ThemeWrapper>
  );
};
