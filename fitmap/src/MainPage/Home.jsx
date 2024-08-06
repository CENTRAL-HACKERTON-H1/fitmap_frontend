import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Pagination from './Pagination';

import {
  SloganContainer,
  FacilitiesList,
  FacilityCard,
  FacilityName,
  FacilityContent,
  ContentName,
} from './Home.styled';

const Home = () => {
  const [facilities, setFacilities] = useState([]);
  const [filteredFacilities, setFilteredFacilities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    region: '',
    category: '',
    target: '',
    period: '',
    days: '',
    duration: '',
    fee: '',
    total: '',
  });

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);

  const pageSize = 30;

  useEffect(() => {
    const fetchFacilities = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://fitmap.store/board/facilities/',
          {
            params: {
              page: currentPage,
              size: pageSize,
            },
          }
        );

        if (response.data && Array.isArray(response.data.results)) {
          setFacilities(response.data.results);
          setTotalPages(Math.ceil(response.data.count / pageSize));
          setFilteredFacilities(response.data.results); // 초기 로딩 시 전체 목록을 표시
        } else {
          console.error('Response data format is incorrect:', response.data);
          setFacilities([]);
          setFilteredFacilities([]);
        }
      } catch (error) {
        console.error('Error fetching facilities data:', error);
        setFacilities([]);
        setFilteredFacilities([]);
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, [currentPage]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredFacilities(facilities);
    } else {
      const filtered = facilities.filter((facility) =>
        facility.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFacilities(filtered);
    }
  }, [searchQuery, facilities]);

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <SloganContainer>Explore Activities Around You!</SloganContainer>
      <Search value={searchQuery} onChange={handleSearchChange} />
      <div style={{ height: '425px' }}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <FacilitiesList>
            {filteredFacilities.length > 0 ? (
              filteredFacilities.map((facility) => (
                <FacilityCard key={facility.id}>
                  <FacilityName>{facility.name}</FacilityName>
                  <FacilityContent>
                    <ContentName>지역:</ContentName> {facility.region}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>장소:</ContentName> {facility.location}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>종목:</ContentName> {facility.sport}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>대상:</ContentName> {facility.target}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>기간:</ContentName> {facility.period}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>요일:</ContentName> {facility.day}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>시간:</ContentName> {facility.time}
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>요금:</ContentName> {facility.fee}원
                  </FacilityContent>
                  <FacilityContent>
                    <ContentName>정원:</ContentName> {facility.capacity}
                  </FacilityContent>
                </FacilityCard>
              ))
            ) : (
              <p>No facilities found.</p>
            )}
          </FacilitiesList>
        )}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default Home;
