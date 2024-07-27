/* eslint-disable no-unused-vars */
import React from 'react';
import { NavContainer, NavContent, NavLink, StyledLink } from './Nav.styled';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <NavContainer>
        <NavContent>
          <img src="./src/favicon_io/favicon-32x32.png" alt="" />
          <div>FitMap</div>
        </NavContent>
        <NavContent>
          <NavLink>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/community">Community</StyledLink>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/signup">Sign Up</StyledLink>
          </NavLink>
        </NavContent>
      </NavContainer>
    </div>
  );
};
export default Nav;
