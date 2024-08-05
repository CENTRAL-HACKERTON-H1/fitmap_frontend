import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const EventDetailWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const EventTitle = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

const EventDate = styled.p`
  margin: 10px 0;
  color: #666;
  font-size: 16px;
`;

const EventContent = styled.p`
  font-size: 16px;
  color: #555;
`;

const RSVPButton = styled.button`
  padding: 12px 24px;
  background-color: #0055553d;
  color: #000;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;
  margin-top: 20px;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const EventDetail = () => {
  const { id } = useParams(); // 이벤트 ID를 URL에서 가져옵니다.
  // 예시로 하드코딩된 이벤트 데이터입니다. 실제로는 API 호출로 대체됩니다.
  const event = {
    title: '소규모 모임',
    date: '2024-08-01',
    content: '이 이벤트는 소규모 모임으로, 다양한 활동이 예정되어 있습니다. 많은 참여 바랍니다.',
  };

  return (
    <EventDetailWrapper>
      <EventTitle>{event.title}</EventTitle>
      <EventDate>{event.date}</EventDate>
      <EventContent>{event.content}</EventContent>
      <RSVPButton>참석하기</RSVPButton>
    </EventDetailWrapper>
  );
};

export default EventDetail;
