/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Search from './Search';
import Filter from './Filter';
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
  const [facilities, setFacilities] = useState([]); // Facilities data for current page
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

  const pageSize = 30; // Number of items per page

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

        // Check if the response contains valid results array
        if (response.data && Array.isArray(response.data.results)) {
          setFacilities(response.data.results); // Set facilities from results
          setTotalPages(Math.ceil(response.data.count / pageSize)); // Calculate total pages
        } else {
          console.error('Response data format is incorrect:', response.data);
          setFacilities([]); // Set empty array if data format is incorrect
        }
      } catch (error) {
        console.error('Error fetching facilities data:', error);
        setFacilities([]); // Set empty array on error
      } finally {
        setLoading(false);
      }
    };

    fetchFacilities();
  }, [currentPage]); // Fetch data whenever currentPage changes

  const handleFilterChange = (name, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page); // Update currentPage to new page
  };

  return (
    <>
      <SloganContainer>Explore Activities Around You!</SloganContainer>

      <div style={{ height: '425px' }}>
        <Filter filters={filters} onFilterChange={handleFilterChange} />

        {loading ? (
          <p>Loading...</p> // Display loading message while fetching data
        ) : (
          <FacilitiesList>
            {facilities.map((facility) => (
              <FacilityCard key={facility.id}>
                <FacilityName>{facility.name}</FacilityName>
                <FacilityContent>
                  <ContentName>Region:</ContentName> {facility.region}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Location:</ContentName> {facility.location}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Sport:</ContentName> {facility.sport}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Target:</ContentName> {facility.target}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Period:</ContentName> {facility.period}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Day:</ContentName> {facility.day}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Time:</ContentName> {facility.time}
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Fee:</ContentName> {facility.fee}원
                </FacilityContent>
                <FacilityContent>
                  <ContentName>Capacity:</ContentName> {facility.capacity}
                </FacilityContent>
              </FacilityCard>
            ))}
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
