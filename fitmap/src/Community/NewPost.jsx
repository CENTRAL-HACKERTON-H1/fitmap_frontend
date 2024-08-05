import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const NewPostWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
  box-sizing: border-box;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #005555;
  }
`;

const ContentInput = styled.textarea`
  width: 100%;
  padding: 12px;
  height: 200px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 16px;
  color: #333;
  resize: none;
  outline: none;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #005555;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #0055553b;
  color: #000;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  margin-top: 10px;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NewPostTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Get the access token from localStorage
    const accessToken = localStorage.getItem('access');

    try {
      const response = await axios.post(
        'https://fitmap.store/board/',
        { title, body: content },
        {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${accessToken}`
          }
        }
      );

      if (response.status === 201) {
        setSuccess('게시글이 성공적으로 작성되었습니다!');
        setTitle('');
        setContent('');
      } else {
        setError('게시글 작성에 실패했습니다.');
      }
    } catch (err) {
      setError('게시글 작성 중 오류가 발생했습니다.');
      console.error('게시글 작성 오류:', err);
    }
  };

  return (
    <NewPostWrapper>
      <NewPostTitle>게시글 작성</NewPostTitle>
      <form onSubmit={handleSubmit}>
        <TitleInput
          type="text"
          placeholder="제목을 입력하세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <ContentInput
          placeholder="내용을 입력하세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton type="submit">등록</SubmitButton>
      </form>
      {success && <p style={{ color: 'green' }}>{success}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </NewPostWrapper>
  );
};

export default NewPost;
