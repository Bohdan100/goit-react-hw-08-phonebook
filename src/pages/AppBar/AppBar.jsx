import { useSelector } from 'react-redux';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import UserMenu from 'components/UserMenu';
import { Navigation } from 'components/UserMenu/Navigation';
import { AuthNav } from 'components/AuthNav';

import { authSelectors } from 'redux/authorization';

import { UserTheme } from 'components/UserTheme';
import {
  MainWrapper,
  AppBarWrapper,
  HomeLink,
  UserWrapper,
} from './AppBar.styled';

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

          <UserWrapper>
            <UserTheme />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
          </UserWrapper>
        </AppBarWrapper>
        <Suspense fallback={<p>Загружаем...</p>}>
          <Outlet />
        </Suspense>
        <ToastContainer
          autoClose={2000}
          position="top-center"
          theme="colored"
        />
      </MainWrapper>
    </>
  );
}
