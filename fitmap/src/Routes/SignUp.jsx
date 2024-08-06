/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

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

const SignUp = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');
  const [showPw, setShowPw] = useState(false);
  const [showPw2, setShowPw2] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (pw != pw2) {
      setPasswordMatch(false);
      return;
    }
    setPasswordMatch(true);
    try {
      const response = await axios.post('https://fitmap.store/member/signup/', {
        username: id,
        password1: pw,
        password2: pw2,
        nickname: nickname,
      });
      if (response.status === 201) {
        alert('회원가입 성공, 로그인해 주세요');
        navigate('/login');
      }
    } catch (error) {
      console.error(error);
      if (error.response && error.response.data) {
        alert('회원가입 실패: ${error.response.data.detail}');
      } else {
        alert('회원가입 실패: 알 수 없는 오류가 발생했습니다.');
      }
    }
  };

  return (
    <MainContainer>
      <SignUpContainer>
        <TitleContainer>Create an account</TitleContainer>
        <ContentContainer>
          <InputTitle>아이디</InputTitle>
          <InputContent
            placeholder="아이디를 입력해주세요."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <InputTitle>닉네임</InputTitle>
          <InputContent
            placeholder="닉네임을 입력해주세요."
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
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
          <InputTitle>비밀번호 확인</InputTitle>
          <PasswordContainer>
            <InputContent
              type={showPw2 ? 'text' : 'password'}
              placeholder="비밀번호를 확인해주세요."
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              minLength={8}
              maxLength={12}
            />
            <ToggleButton onClick={() => setShowPw2(!showPw2)}>
              {showPw2 ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </PasswordContainer>
          {!passwordMatch && (
            <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>
          )}
          <ButtonContainer>
            <StyledLink to="/login">로그인하기</StyledLink>
            <Button onClick={handleSubmit}>회원가입하기</Button>
          </ButtonContainer>
        </ContentContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

export default SignUp;
