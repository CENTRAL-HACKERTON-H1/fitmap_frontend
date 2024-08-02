/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';
import { SearchBody, SearchInput } from './Search.styled';

const Search = ({ searchValue, setSearchValue }) => {
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <SearchBody>
      <SearchInput
        placeholder="검색어를 입력하세요"
        value={searchValue}
        onChange={handleChange}
      ></SearchInput>
      <FaSearch color="#0055553b" />
    </SearchBody>
  );
};
export default Search;
