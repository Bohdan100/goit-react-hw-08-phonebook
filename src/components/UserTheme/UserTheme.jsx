import { useLayoutEffect, useState } from 'react';
import { BsBrightnessHigh, BsFillMoonStarsFill } from 'react-icons/bs';
import { ThemeWrapper, IconWrapper } from './UserTheme.styled';

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
      <IconWrapper onClick={LightThemeOnClick}>
        <BsBrightnessHigh />
      </IconWrapper>
      <IconWrapper onClick={DarkThemeOnClick}>
        <BsFillMoonStarsFill />
      </IconWrapper>
    </ThemeWrapper>
  );
};
