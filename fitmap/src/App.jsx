import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, AppContainer, ContentContainer } from './GlobalStyle';
import Home from './MainPage/Home';
import SignUp from './Routes/SignUp';
import Nav from './MainPage/Nav';
import Footer from './MainPage/Footer';
import Community from './Routes/Community';
import Login from './Routes/Login';
import ServiceDetails from './Routes/MyPage';
import FacilityBooking from './Routes/FacilityBooking';
import BookingConfirmation from './Routes/BookingConfirmation';
import { AuthProvider } from '../src/Routes/AuthContext';

function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null);

  const handleSelectService = (service) => {
    setSelectedService(service);
    setBookingDetails(null);
  };

  const handleConfirmBooking = (details) => {
    setBookingDetails(details);
    setSelectedService(null);
  };

  return (
    <AuthProvider>
      <AppContainer>
        <BrowserRouter>
          <GlobalStyle />
          <Nav />
          <ContentContainer>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/community/*" element={<Community />} />
              <Route
                path="/servicedetails"
                element={
                  <ServiceDetails
                    service={selectedService}
                    onBookFacility={handleSelectService}
                  />
                }
              />
              <Route
                path="/facilitybooking"
                element={
                  <FacilityBooking
                    service={selectedService}
                    onConfirmBooking={handleConfirmBooking}
                  />
                }
              />
              <Route
                path="/bookingconfirmation"
                element={
                  <BookingConfirmation bookingDetails={bookingDetails} />
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </ContentContainer>
          <Footer />
        </BrowserRouter>
      </AppContainer>
    </AuthProvider>
  );
}

export default App;
