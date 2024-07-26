/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Search from './Search';
import styled from 'styled-components';
import { SloganContainer } from './Home.styled';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <SloganContainer>주변의 액티비티를 찾아보세요!</SloganContainer>
      {/* 서치 */}
      <div style={{ height: '800px' }}>
        <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      </div>
    </>
  );
};

export default Home;

const SearchBox = styled.input`
  width: 250px;
  height: 25px;
  border: 1px solid lightgrey;
`;
