import React from 'react';
import { NavLink } from 'react-router-dom';

import { UserMenuLink } from './Navigation.styled';

const Navigation = () => (
  <nav>
    <UserMenuLink to="/">Main page</UserMenuLink>

    <UserMenuLink to="/contacts">Contacts</UserMenuLink>
  </nav>
);

export default Navigation;
