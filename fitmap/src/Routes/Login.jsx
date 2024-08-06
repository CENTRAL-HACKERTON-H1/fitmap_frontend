/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

// Style import
import {
  MainContainer,
  SignUpContainer,
  TitleContainer,
  ContentContainer,
  InputTitle,
  InputContent,
  ButtonContainer,
  Button,
  StyledLink,
  PasswordContainer,
  ToggleButton,
  ErrorMessage,
} from './SignUp.styled';

const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [showPw, setShowPw] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await axios.post('https://fitmap.store/member/login/', {
        username: id,
        password: pw,
      });
      if (response.status === 200) {
        localStorage.setItem('access', response.data.access);
        localStorage.setItem('refresh', response.data.refresh);
        alert('로그인 성공');
        login();
        navigate('/');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        alert(`로그인 실패: ${error.response.data.detail}`);
      } else {
        alert('로그인 실패: 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <MainContainer>
      <SignUpContainer>
        <TitleContainer>Login with your account</TitleContainer>
        <ContentContainer>
          <InputTitle>아이디</InputTitle>

          <InputContent
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputTitle>비밀번호</InputTitle>
          <PasswordContainer>
            <InputContent
              type={showPw ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요."
              value={pw}
              onChange={(e) => setPw(e.target.value)}
            />
            <ToggleButton onClick={() => setShowPw(!showPw)}>
              {showPw ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </PasswordContainer>

          <div>
            <ButtonContainer>
              <StyledLink to="/signup">회원가입하기</StyledLink>
              <Button onClick={handleLogin}>로그인하기</Button>
            </ButtonContainer>
          </div>
        </ContentContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

export default Login;
