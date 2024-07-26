import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

// 전체 스타일 설정
export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }
`;

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
  div {
    padding: 12px;
  }
  img {
    margin-left: 10px;
    margin-right: -20px;
    width: 30px;
    height: 30px;
    padding: 10px;
  }
`;

export const NavLink = styled.div`
  :hover {
    background-color: white;
  }
  a {
    text-decoration: none;
    color: black;
    padding: 12px;
    padding-bottom: 15px;
  }
`;
