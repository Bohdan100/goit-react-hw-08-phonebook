import React from 'react';
import { Box } from 'constants';
import { NavigationItem, NavigationLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Box m={[0]} as="ul" display="flex" pl={[0]}>
      <NavigationItem>
        <NavigationLink to="register">Register</NavigationLink>
      </NavigationItem>
      <NavigationItem>
        <NavigationLink to="login">Log In</NavigationLink>
      </NavigationItem>
    </Box>
  );
};
