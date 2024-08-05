import styled from 'styled-components';
import { Link } from 'react-router-dom';

// Nav 스타일 설정
export const NavContainer = styled.nav`
  background-color: #0055553b;
  display: flex;
  justify-content: space-between;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-right: 10px;
  font-weight: 500;
  font-size: 17px;
  div {
    padding: 12px;
  }
  img {
    margin-left: 10px;
    margin-right: -20px;
    width: 25px;
    height: 25px;
    padding: 10px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 12px;
  padding-bottom: 15px;
  :hover {
    background-color: white;
    border: none;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  font-size: 17px;
  font-weight: 500;
  :hover {
    background-color: white;
    border: none;
  }
`;
