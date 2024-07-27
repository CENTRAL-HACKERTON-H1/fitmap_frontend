/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

  const login = async () => {
    try {
      const response = await axios.post(
        'https://hufs-mutsa-12th.store/dj/login/',
        {
          username: id,
          password: pw,
        }
      );
      console.log(response.data);
      localStorage.setItem('token', response.data.token);
      alert('로그인 성공');
    } catch (error) {
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
  };

  function IdChange(e) {
    console.log(e);
    setId(e.target.value);
  }

  function PwChange(e) {
    console.log(e);
    setPw(e.target.value);
  }

  return (
    <MainContainer>
      <SignUpContainer>
        <TitleContainer>Login with your account</TitleContainer>
        <ContentContainer>
          <InputTitle>아이디</InputTitle>

          <InputContent
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={IdChange}
          />

          <InputTitle>비밀번호</InputTitle>
          <InputContent
            placeholder="비밀번호를 입력해주세요."
            value={pw}
            onChange={PwChange}
          />

          <div>
            <ButtonContainer>
              <StyledLink to="/signup">회원가입하기</StyledLink>
              <Button onClick={login}>로그인하기</Button>
            </ButtonContainer>
          </div>
        </ContentContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

export default Login;
