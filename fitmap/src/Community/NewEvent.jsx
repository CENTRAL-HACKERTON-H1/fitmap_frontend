import React, { useState } from 'react';
import styled from 'styled-components';

const NewEventWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const TitleInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
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

const DateInput = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
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
  height: 300px;
  margin-bottom: 20px;
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
  background-color: #0055553d;
  color: #000;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  display: block;
  width: 100%;
  text-align: center;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NewEventTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const NewEvent = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Title:', title);
    console.log('Date:', date);
    console.log('Content:', content);
  };

  return (
    <NewEventWrapper>
      <NewEventTitle>새 이벤트 추가</NewEventTitle>
      <form onSubmit={handleSubmit}>
        <TitleInput 
          type="text" 
          placeholder="이벤트 제목을 입력하세요" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <DateInput 
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <ContentInput 
          placeholder="이벤트 내용을 입력하세요" 
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <SubmitButton type="submit">등록</SubmitButton>
      </form>
    </NewEventWrapper>
  );
};

export default NewEvent;
