import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

// import Navigation from './Navigation';
// import UserMenu from 'components/UserMenu';
import { AuthNav } from 'components/AuthNav';

import { ImAddressBook } from 'react-icons/im';
import { authSelectors } from 'redux/authorization';

import { UserTheme } from 'components/UserTheme';
import { MainWrapper, AppBarWrapper, HomeLink } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <>
      <MainWrapper>
        <AppBarWrapper>
          {isLoggedIn ? (
            <p>UserMenu</p>
          ) : (
            <p>
              <AuthNav />
            </p>
          )}
          <HomeLink to="/">
            <span>phonebook</span>
          </HomeLink>
          <UserTheme />
        </AppBarWrapper>

        <ImAddressBook size={400} fill="#64b5f6" opacity={0.8} />
        <Outlet />
      </MainWrapper>
    </>
  );
}

// <header style={styles.header}>
//   <Navigation />
//   {isLoggedIn ? <UserMenu /> : <AuthNav />}
// </header>
