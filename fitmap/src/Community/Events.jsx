import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const EventsWrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  margin: 0 auto;
`;

const EventsHeader = styled.h1`
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
  text-align: center;
`;

const EventItem = styled.div`
  padding: 15px;
  margin-bottom: 15px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
`;

const EventTitle = styled.h2`
  margin: 0;
  font-size: 18px;
  color: #333;
`;

const EventDate = styled.p`
  margin: 5px 0;
  color: #666;
  font-size: 14px;
`;

const EventPreview = styled.p`
  margin: 10px 0;
  color: #555;
  font-size: 14px;
`;

const EventLink = styled(Link)`
  padding: 10px;
  text-decoration: none;
  background-color: #0055553b;
  color: #000;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const AddEventButton = styled(Link)`
  display: block;
  padding: 12px 24px;
  background-color: #0055553b;
  color: #000;
  border-radius: 6px;
  font-size: 16px;
  text-align: center;
  text-decoration: none;
  margin: 20px 0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const Events = () => {
  const events = [
    { id: 1, title: '소규모 모임', date: '2024-08-01', preview: '소규모 모임에 대한 설명입니다.' },
    { id: 2, title: '온라인 워크숍', date: '2024-08-15', preview: '온라인 워크숍에 대한 설명입니다.' },
  ];

  return (
    <EventsWrapper>
      <EventsHeader>이벤트</EventsHeader>
      <AddEventButton to="/community/events/new">새 이벤트 추가</AddEventButton>
      {events.map(event => (
        <EventItem key={event.id}>
          <EventTitle>{event.title}</EventTitle>
          <EventDate>{event.date}</EventDate>
          <EventPreview>{event.preview}</EventPreview>
          <EventLink to={`/community/events/${event.id}`}>자세히 보기</EventLink>
        </EventItem>
      ))}
    </EventsWrapper>
  );
};

export default Events;
