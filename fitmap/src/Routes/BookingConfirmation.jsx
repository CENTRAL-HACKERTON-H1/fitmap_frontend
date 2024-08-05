import React from 'react';

const BookingConfirmation = ({ bookingDetails }) => (
  <div>
    <h2>예약 완료</h2>
    <p>예약이 완료되었습니다!</p>
    <p>예약 시간: {bookingDetails.time}</p>
  </div>
);

export default BookingConfirmation;
