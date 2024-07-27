// 여기가 보여지는 페이지
/* eslint-disable no-unused-vars */

import React from 'react';
import Home from './MainPage/Home';
import Nav from './MainPage/Nav';
import Footer from './MainPage/Footer';
import { GlobalStyle } from './GlobalStyle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Home />
      <Footer />
    </>
  );
};

export default App;
