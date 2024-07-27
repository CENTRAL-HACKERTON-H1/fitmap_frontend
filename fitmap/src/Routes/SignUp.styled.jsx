import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
  margin: 0;
  padding: 0;
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const TitleContainer = styled.div`
  font-weight: 600;
  margin-top: -30px;
  margin-bottom: 10px;
  color: #4f4d4d;
`;
export const ContentContainer = styled.div`
  background-color: #0055552a;
  margin: 10px;
  padding: 30px;
  width: 50vh;
  border-radius: 5px;
`;
export const InputTitle = styled.div`
  font-size: 15px;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const InputContent = styled.input`
  margin-top: 5px;
  margin-bottom: 15px;
  padding: 8px;
  width: 330px;
  border: none;
  outline: none;
  border-radius: 5px;
  font-size: 13px;
`;

export const PasswordContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ToggleButton = styled.button`
  position: absolute;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0%.8;
  color: grey;
  margin-right: 3px;
  margin-bottom: 5px;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`;
export const Button = styled.button`
  padding: 8px;
  width: 150px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  background-color: #0055557b;
  cursor: pointer;
`;

export const StyledLink = styled(RouterLink)`
  padding: 8px;
  width: 140px;
  border: none;
  border-radius: 5px;
  font-size: 15px;
  background-color: white;
  text-decoration: none;
  text-align: center;
`;
