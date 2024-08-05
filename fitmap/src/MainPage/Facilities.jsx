import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ddd;
  padding: 15px;
  border-radius: 8px;
  width: calc(50% - 10px);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin-top: 0;
`;

const Detail = styled.p`
  margin: 5px 0;
`;

const Facility = ({ facility }) => {
  return (
    <Card>
      <Title>{facility.name}</Title>
      <Detail>
        <strong>지역:</strong> {facility.region}
      </Detail>
      <Detail>
        <strong>위치:</strong> {facility.location}
      </Detail>
      <Detail>
        <strong>종목:</strong> {facility.sport}
      </Detail>
      <Detail>
        <strong>대상:</strong> {facility.target}
      </Detail>
      <Detail>
        <strong>기간:</strong> {facility.period}
      </Detail>
      <Detail>
        <strong>요일:</strong> {facility.day}
      </Detail>
      <Detail>
        <strong>시간:</strong> {facility.time}
      </Detail>
      <Detail>
        <strong>수강료:</strong> {facility.fee} 원
      </Detail>
      <Detail>
        <strong>정원:</strong> {facility.capacity} 명
      </Detail>
    </Card>
  );
};

export default Facility;
