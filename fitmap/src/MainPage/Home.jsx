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
  // activities는 예시, 데이터에서 가져옴. import {activities} from './data'; 등
  // const filteredActivities = activities.filter((activity) => {
  //   return (
  //     (filters.region === '' || activity.region === filters.region) &&
  //     (filters.category === '' || activity.category === filters.category) &&
  //     (filters.target === '' || activity.target === filters.target) &&
  //     (filters.period === '' || activity.period === filters.period) &&
  //     (filters.day === '' || activity.day === filters.day) &&
  //     (filters.duration === '' || activity.duration === filters.duration) &&
  //     (filters.fee === '' || activity.fee === filters.fee) &&
  //     (filters.capacity === '' || activity.capacity === filters.capacity)
  //   );
  // });

  return (
    <>
      <SloganContainer>주변의 액티비티를 찾아보세요!</SloganContainer>
      {/* 서치 */}
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      {/* 필터 */}
      <div style={{ height: '425px' }}>
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        {/* <ActivityList activities={filteredActivities} /> */}
      </div>
    </>
  );
};

export default Home;
