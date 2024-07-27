// 여기가 보여지는 페이지
/* eslint-disable no-unused-vars */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './MainPage/Home';
import SignUp from './Routes/SignUp';
import Nav from './MainPage/Nav';
import Footer from './MainPage/Footer';
import Community from './Routes/Community';
import Login from './Routes/Login';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
