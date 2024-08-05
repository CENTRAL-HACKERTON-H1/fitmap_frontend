/* eslint-disable no-unused-vars */
import React from 'react';
import {
  NavContainer,
  NavContent,
  StyledLink,
  LogoutButton,
} from './Nav.styled';
import { useAuth } from '../Routes/AuthContext';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    alert('로그아웃 성공');
  };

  return (
    <div>
      <NavContainer>
        <NavContent>
          <img src="./src/favicon_io/favicon-32x32.png" alt="" />
          <div>FitMap</div>
        </NavContent>
        <NavContent>
          <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/community">Community</StyledLink>
            <StyledLink to="/servicedetails">Details</StyledLink>
            {isLoggedIn ? (
              <StyledLink to="/" onClick={handleLogout}>
                Logout
              </StyledLink>
            ) : (
              <>
                <StyledLink to="/login">Login</StyledLink>
                <StyledLink to="/signup">Sign Up</StyledLink>
              </>
            )}
          </>
        </NavContent>
      </NavContainer>
    </div>
  );
};
export default Nav;
