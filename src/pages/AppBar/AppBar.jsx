import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import Navigation from './Navigation';
import UserMenu from 'components/UserMenu';
import Navigation from 'components/UserMenu/Navigation';
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
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
          <HomeLink to="/">
            <span>phonebook</span>
          </HomeLink>
          <UserTheme />
        </AppBarWrapper>

        <Outlet />
      </MainWrapper>
    </>
  );
}

// <header style={styles.header}>
//   <Navigation />
//   {isLoggedIn ? <UserMenu /> : <AuthNav />}
// </header>
