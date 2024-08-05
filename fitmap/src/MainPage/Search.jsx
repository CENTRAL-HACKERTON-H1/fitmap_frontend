/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { FaSearch } from 'react-icons/fa';
import { SearchBody, SearchInput } from './Search.styled';

const Search = ({ setSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://fitmap.store/board/facilities/?search=${searchTerm}`
      );
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <SearchBody>
      <SearchInput
        placeholder="검색어를 입력하세요"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <button
        style={{ background: 'none', border: 'none' }}
        onClick={handleSearch}
      >
        <FaSearch color="#0055553b" />
      </button>
    </SearchBody>
  );
};

export default Search;
