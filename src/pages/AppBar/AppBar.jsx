import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import UserMenu from 'components/UserMenu';
import { Navigation } from 'components/UserMenu/Navigation';
import { AuthNav } from 'components/AuthNav';

import { authSelectors } from 'redux/authorization';

import { UserTheme } from 'components/UserTheme';
import { MainWrapper, AppBarWrapper, HomeLink } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <MainWrapper>
        <AppBarWrapper>
          <Navigation />

          <HomeLink to="/">
            <span>phonebook</span>
          </HomeLink>
          <UserTheme />

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBarWrapper>
        <Suspense fallback={<p>Загружаем...</p>}>
          <Outlet />
        </Suspense>
      </MainWrapper>
    </>
  );
}
