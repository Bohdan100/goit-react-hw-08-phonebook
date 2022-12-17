import { useLayoutEffect, useState } from 'react';
import { BsBrightnessHigh, BsFillMoonStarsFill } from 'react-icons/bs';
import {
  ThemeWrapper,
  SunIconWrapper,
  MoonIconWrapper,
} from './UserTheme.styled';

export const UserTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('user-theme') || 'light'
  );

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('user-theme', theme);
  }, [theme]);

  const LightThemeOnClick = () => {
    setTheme('light');
  };
  const DarkThemeOnClick = () => {
    setTheme('dark');
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
