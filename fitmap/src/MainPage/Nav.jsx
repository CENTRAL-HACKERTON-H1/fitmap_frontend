/* eslint-disable no-unused-vars */
import React from 'react';
import { NavContainer, NavContent, NavLink } from './Nav.styled';

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
            <a href="/Home">Home</a>
            <a href="">Community</a>
            <a href="">Login</a>
            <a href="">Sign In</a>
          </NavLink>
        </NavContent>
      </NavContainer>
    </div>
  );
};

export default Nav;
