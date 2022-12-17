import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from 'redux/slice';
import { selectTheme } from 'redux/selectors';

import { useLayoutEffect, useState } from 'react';
import { BsBrightnessHigh, BsFillMoonStarsFill } from 'react-icons/bs';
import { ThemeWrapper, IconWrapper } from './UserTheme.styled';

export const UserTheme = () => {
  const dispatch = useDispatch();
  const loadingTheme = useSelector(selectTheme);

  const [theme, setTheme] = useState(loadingTheme || 'light');

  useLayoutEffect(() => {
    // Смена CSS-свойств в GlobalStyle
    document.documentElement.setAttribute('data-theme', theme);

    dispatch(toggleTheme({ theme: theme }));
  }, [theme, dispatch]);

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

// 2 ВАРИАНТ. LOCAL STORAGE - toggleTheme: light, dark
// const [theme, setTheme] = useState(
//   localStorage.getItem('user-theme') || 'light'
// );

// useLayoutEffect(() => {
//   document.documentElement.setAttribute('data-theme', theme);
//   localStorage.setItem('user-theme', theme);
// }, [theme]);

// const LightThemeOnClick = () => {
//   setTheme('light');
// };
// const DarkThemeOnClick = () => {
//   setTheme('dark');
// };
