import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px;
`;

const SearchFilter = styled.select`
  padding: 8px;
  margin-right: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;

const SearchInput = styled.input`
  padding: 8px;
  width: 300px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-right: 10px;
  font-size: 14px;
`;

const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #5c6bc0;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #3f51b5;
  }
`;

const Search = () => {
  const [searchInput, setSearchInput] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('전체');

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleSearch = () => {
    const filters = {
      전체: '',
      시설명: 'name',
      지역: 'region',
      위치: 'location',
      종목: 'sport',
      대상: 'target',
      기간: 'period',
      요일: 'day',
      시간: 'time',
      수강료: 'fee',
      정원: 'capacity',
    };

    const filterKey = filters[selectedFilter];
    const query = filterKey
      ? `${filterKey}=${encodeURIComponent(searchInput)}`
      : '';

    const apiUrl = `http://127.0.0.1:8000/board/facilities/?${query}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        console.log('Search results:', data);
        // API 호출 후 결과를 처리하는 로직 추가
      })
      .catch((error) => console.error('Error fetching data:', error));
  };

  return (
    <SearchContainer>
      <SearchFilter value={selectedFilter} onChange={handleFilterChange}>
        <option value="전체">전체</option>
        <option value="시설명">시설명</option>
        <option value="지역">지역</option>
        <option value="위치">위치</option>
        <option value="종목">종목</option>
        <option value="대상">대상</option>
        <option value="기간">기간</option>
        <option value="요일">요일</option>
        <option value="시간">시간</option>
        <option value="수강료">수강료</option>
        <option value="정원">정원</option>
      </SearchFilter>
      <SearchInput
        type="text"
        placeholder="검색어를 입력하세요"
        value={searchInput}
        onChange={handleInputChange}
      />
      <SearchButton onClick={handleSearch}>검색하기</SearchButton>
    </SearchContainer>
  );
};

export default Search;
