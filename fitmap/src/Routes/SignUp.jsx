/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';

// Style import
import {
  SignUpContainer,
  TitleContainer,
  ContentContainer,
  InputTitle,
  InputContent,
  Button,
} from './SignUp.styled';

const SignUp = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw2, setPw2] = useState('');
  const [nickname, setNickname] = useState('');
  const [uni, setUni] = useState('');
  const [loc, setLoc] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'https://hufs-mutsa-12th.store/dj/registration/',
        {
          username: id,
          password1: pw,
          password2: pw2,
          nickname: nickname,
          university: uni,
          location: loc,
        }
      );
      alert('회원가입 성공');
    } catch (error) {
      console.error(error);
      alert('회원가입 실패');
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
  function Pw2Change(e) {
    console.log(e);
    setPw2(e.target.value);
  }
  function NicknameChange(e) {
    console.log(e);
    setNickname(e.target.value);
  }
  function UniChange(e) {
    console.log(e);
    setUni(e.target.value);
  }
  function LocChange(e) {
    console.log(e);
    setLoc(e.target.value);
  }

  return (
    <SignUpContainer>
      <TitleContainer>Create an account</TitleContainer>
      <ContentContainer>
        <InputTitle>아이디</InputTitle>
        <InputContent
          placeholder="아이디를 입력해주세요."
          value={id}
          onChange={IdChange}
        />
        <InputTitle>닉네임</InputTitle>
        <InputContent
          placeholder="닉네임을 입력해주세요."
          value={nickname}
          onChange={NicknameChange}
        />
        <InputTitle>비밀번호</InputTitle>
        <InputContent
          placeholder="비밀번호를 입력해주세요."
          value={pw}
          onChange={PwChange}
        />
        <InputTitle>비밀번호 확인</InputTitle>
        <InputContent
          placeholder="비밀번호를 다시 입력해주세요."
          value={pw2}
          onChange={Pw2Change}
        />
      </ContentContainer>

      <div>
        <Button onClick={handleSubmit}>회원가입하기</Button>
      </div>
    </SignUpContainer>
  );
};

export default SignUp;
