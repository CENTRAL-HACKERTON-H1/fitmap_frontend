import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FacilityBooking = ({ service, onConfirmBooking }) => {
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fitmap.store/api/facilities/${service.id}/available-times`)
      .then((response) => setAvailableTimes(response.data))
      .catch((error) =>
        console.error('Error fetching available times:', error)
      );
  }, [service]);

  const handleBooking = (time) => {
    axios
      .post(`https://fitmap.store/api/facilities/${service.id}/book`, { time })
      .then((response) => onConfirmBooking(response.data))
      .catch((error) => console.error('Error booking facility:', error));
  };

  return (
    <div>
      <h3>{service.name} 시설 예약</h3>
      <ul>
        {availableTimes.map((time) => (
          <li key={time}>
            {time} <button onClick={() => handleBooking(time)}>예약</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FacilityBooking;
