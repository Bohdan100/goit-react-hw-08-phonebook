import React from 'react';
import { UserMenuLink } from './Navigation.styled';

export const Navigation = () => (
  <nav>
    <UserMenuLink to="/">Main page</UserMenuLink>

    <UserMenuLink to="/contacts">Contacts</UserMenuLink>
  </nav>
);
