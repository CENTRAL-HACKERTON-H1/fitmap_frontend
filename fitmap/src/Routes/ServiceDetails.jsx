/* eslint-disable no-unused-vars */
import React from 'react';

const ServiceDetails = ({ service, onBookFacility }) => (
  <div>
    <h2>{service.name}</h2>
    <p>이용 가능 시간: {service.availableTimes.join(', ')}</p>
    <p>가격: {service.price}</p>
    <button onClick={() => onBookFacility(service)}>시설 예약</button>
  </div>
);

export default ServiceDetails;
