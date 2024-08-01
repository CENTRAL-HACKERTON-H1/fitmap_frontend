import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Facility from './Facilities';
import styled from 'styled-components';

const AppContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  flex: 1;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-right: 10px;
  flex: 2;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #0055553b;
  border: none;
  cursor: pointer;
  flex: 1;
  &:hover {
    background-color: #0055556b;
  }
`;

const FacilitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Home = ({ searchValue }) => {
  const [facilities, setFacilities] = useState([]);
  const [searchField, setSearchField] = useState('name');
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredFacilities, setFilteredFacilities] = useState([]);

  useEffect(() => {
    const fetchFacilities = async () => {
      try {
        const response = await axios.get(
          'https://fitmap.store/board/facilities/'
        );
        setFacilities(response.data);
        setFilteredFacilities(response.data);
      } catch (error) {
        console.error('Error fetching facilities:', error);
      }
    };
    fetchFacilities();
  }, []);

  const handleSearch = async () => {
    try {
      if (searchTerm.trim() === '') {
        setFilteredFacilities(facilities); // 빈 검색어일 경우 전체 리스트 표시
        return;
      }
      const response = await axios.get(
        `https://fitmap.store/board/facilities/?${searchField}=${encodeURIComponent(
          searchTerm
        )}`
      );
      setFilteredFacilities(response.data);
    } catch (error) {
      console.error('Error searching facilities:', error);
    }
  };

  return (
    <AppContainer>
      <SearchContainer>
        <Select
          value={searchField}
          onChange={(e) => setSearchField(e.target.value)}
        >
          <option value="all">전체</option>
          <option value="name">시설명</option>
          <option value="region">지역</option>
          <option value="location">위치</option>
          <option value="sport">종목</option>
          <option value="target">대상</option>
          <option value="period">기간</option>
          <option value="day">요일</option>
          <option value="time">진행시간</option>
          <option value="fee">수강료</option>
          <option value="capacity">전체정원수</option>
        </Select>

        <Input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="검색어 입력"
        />

        <Button onClick={handleSearch}>검색</Button>
      </SearchContainer>

      <FacilitiesList>
        {filteredFacilities.map((facility) => (
          <FacilityCard key={facility.id} facility={facility} />
        ))}
      </FacilitiesList>
    </AppContainer>
  );
};

export default Home;
