/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import Search from './Search';
import Filter from './Filter';
import styled from 'styled-components';
import { SloganContainer } from './Home.styled';

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
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

  const handleFilterChange = (name, value) => {
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  return (
    <>
      <SloganContainer>주변의 액티비티를 찾아보세요!</SloganContainer>

      <div style={{ height: '425px' }}>
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        {/* <ActivityList activities={filteredActivities} /> */}
      </div>
    </>
  );
};

export default Home;
