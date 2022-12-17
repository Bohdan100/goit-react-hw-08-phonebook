import React from 'react';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authorization';
import { UserMenuLink } from './Navigation.styled';

export const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav>
      <UserMenuLink to="/">Main page</UserMenuLink>

      {isLoggedIn && <UserMenuLink to="/contacts">Contacts</UserMenuLink>}
    </nav>
  );
};
