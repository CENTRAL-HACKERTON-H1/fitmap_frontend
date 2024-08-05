import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle, AppContainer, ContentContainer } from './GlobalStyle';
import Home from './MainPage/Home';
import SignUp from './Routes/SignUp';
import Nav from './MainPage/Nav';
import Footer from './MainPage/Footer';
import Community from './Routes/Community';
import Login from './Routes/Login';
import ServiceDetails from './Routes/MyPage';
import { AuthProvider } from '../src/Routes/AuthContext';

function App() {
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
