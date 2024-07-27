/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // 눈 아이콘 import

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
} from './SignUp.styled';

const SignUp = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');
  const [showPw, setShowPw] = useState(false); // 비밀번호 표시 토글 상태
  const [showPw2, setShowPw2] = useState(false); // 비밀번호 확인 표시 토글 상태

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://hufs-mutsa-12th.store/dj/registration/',
        {
          username: id,
          password1: pw,
          password2: pw2,
          nickname: nickname,
        }
      );
      alert('회원가입 성공');
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
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
              type={showPw ? 'text' : 'password'} // 토글 상태에 따라 type 변경
              placeholder="비밀번호를 입력해주세요."
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              minLength={8}
              maxLength={12}
            />
            <ToggleButton onClick={() => setShowPw(!showPw)}>
              {showPw ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </PasswordContainer>
          <InputTitle>비밀번호 확인</InputTitle>
          <PasswordContainer>
            <InputContent
              type={showPw2 ? 'text' : 'password'} // 토글 상태에 따라 type 변경
              placeholder="비밀번호를 다시 입력해주세요."
              value={pw2}
              onChange={(e) => setPw2(e.target.value)}
              minLength={8}
              maxLength={12}
            />
            <ToggleButton onClick={() => setShowPw2(!showPw2)}>
              {showPw2 ? <FaEyeSlash /> : <FaEye />}
            </ToggleButton>
          </PasswordContainer>
          <ButtonContainer>
            <Button onClick={handleSubmit}>회원가입하기</Button>
            <StyledLink to="/login">로그인하기</StyledLink>
          </ButtonContainer>
        </ContentContainer>
      </SignUpContainer>
    </MainContainer>
  );
};

export default SignUp;
