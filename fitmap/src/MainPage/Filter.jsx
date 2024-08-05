import React, { useState } from 'react';
import axios from 'axios';
import {
  Container,
  SearchContainer,
  SearchInput,
  SearchButton,
  FilterContainer,
  FilterGroup,
  FilterLabel,
  CheckboxContainer,
  CheckboxLabel,
  CheckboxInput,
  FacilitiesList,
  FacilityCard,
} from './Filter.styled';

const Filter = () => {
  const [filters, setFilters] = useState({
    targets: [],
    regions: [],
    fee: '',
    capacity: '',
    method: [],
    priority: '',
    service: [],
  });

  const [facilities, setFacilities] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;

    setFilters((prevFilters) => {
      if (checked) {
        return {
          ...prevFilters,
          [name]: [...prevFilters[name], value],
        };
      } else {
        return {
          ...prevFilters,
          [name]: prevFilters[name].filter((item) => item !== value),
        };
      }
    });
  };

  const handleSearch = async () => {
    try {
      const params = new URLSearchParams({
        ...filters,
        search: searchText,
      });

      for (const [key, values] of Object.entries(filters)) {
        if (Array.isArray(values)) {
          values.forEach((value) => params.append(key, value));
        } else if (values) {
          params.append(key, values);
        }
      }

      const response = await axios.get(
        `https://fitmap.store/board/facilities/?${params.toString()}`
      );
      setFacilities(response.data);
    } catch (error) {
      console.error('시설 정보를 가져오는 중 오류 발생:', error);
    }
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchButton onClick={toggleFilters}>
          {showFilters ? '필터 닫기' : '상세 필터'}
        </SearchButton>
        <SearchInput
          type="text"
          value={searchText}
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <SearchButton onClick={handleSearch}>검색하기</SearchButton>
      </SearchContainer>

      {showFilters && (
        <FilterContainer $show={showFilters}>
          <FilterGroup>
            <FilterLabel>지역</FilterLabel>
            <CheckboxContainer>
              {[
                '강남구',
                '강동구',
                '강북구',
                '강서구',
                '관악구',
                '광진구',
                '구로구',
                '금천구',
                '노원구',
                '도봉구',
                '동대문구',
                '동작구',
                '동장구',
                '서대문구',
                '서초구',
                '성동구',
                '성북구',
                '송파구',
                '양천구',
                '영등포구',
                '용산구',
                '은평구',
                '종로구',
                '중구',
                '중랑구',
              ].map((region) => (
                <CheckboxLabel key={region}>
                  <CheckboxInput
                    type="checkbox"
                    name="regions"
                    value={region}
                    onChange={handleCheckboxChange}
                  />
                  {region}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>종목</FilterLabel>
            <CheckboxContainer>
              {[
                'S-보드',
                '건강댄스',
                '건강댄스 ',
                '걷기와근력운동',
                '검도',
                '골프',
                '국선도',
                '권투',
                '나이트댄스',
                '노르딕워킹',
                '농구',
                '다이어트댄스',
                '단전호흡',
                '당구',
                '라인댄스',
                '라켓볼',
                '라틴댄스',
                '리권',
                '모던댄스',
                '발레',
                '방송댄스',
                '배구',
                '배드민턴',
                '밸리댄스',
                '복싱다이어트',
                '볼룸댄스',
                '사교댄스',
                '살사&라인댄스',
                '선교무용',
                '스케이트',
                '스쿼시',
                '스킨스쿠버',
                '스트레칭',
                '스포츠댄스',
                '시니어택견',
                '아기스포츠단',
                '아침운동',
                '아쿠아로빅',
                '야구',
                '어린이체력교실',
                '에어로빅',
                '여성호신술',
                '운동',
                '웨이트로빅',
                '웰빙댄스',
                '유아체육',
                '인라인스케이트',
                '임산부수중운동',
                '재즈댄스',
                '전통무용',
                '정심공',
                '줄넘기',
                '째저사이즈',
                '체육교실',
                '체조',
                '체형교정',
                '치어리더',
                '클럽댄스',
                '키즈 벨리댄스',
                '태권도',
                '태권에어로비스',
                '태껸',
                '태보',
                '탭댄스',
                '특공무술',
                '티볼',
                '파워로빅',
                '포켓볼',
                '포크댄스',
                '풋살',
                '피규어로빅스',
                '피트니스',
                '필라테스',
                '학교체육',
                '해맞이춤',
                '힙합',
              ].map((target) => (
                <CheckboxLabel key={target}>
                  <CheckboxInput
                    type="checkbox"
                    name="targets"
                    value={target}
                    onChange={handleCheckboxChange}
                  />
                  {target}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>기간</FilterLabel>
            <CheckboxContainer>
              {[
                '일일',
                '1개월',
                '2개월',
                '3개월',
                '4개월',
                '5개월',
                '6개월',
                '8개월',
                '12개월',
              ].map((method) => (
                <CheckboxLabel key={method}>
                  <CheckboxInput
                    type="checkbox"
                    name="method"
                    value={method}
                    onChange={handleCheckboxChange}
                  />
                  {method}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>요일</FilterLabel>
            <CheckboxContainer>
              {['월', '화', '수', '목', '금', '토', '일'].map((priority) => (
                <CheckboxLabel key={priority}>
                  <CheckboxInput
                    type="radio"
                    name="priority"
                    value={priority}
                    onChange={(e) =>
                      setFilters({ ...filters, priority: e.target.value })
                    }
                  />
                  {priority}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>전체정원수</FilterLabel>
            <CheckboxContainer>
              {[
                '1~10명',
                '11~20명',
                '21~30명',
                '31~40명',
                '41~50명',
                '51~60명',
                '61~70명',
                '71~80명',
                '80~90명',
                '90~100명',
                '101~200명',
                '201~300명',
                '301~400명',
                '401~500명',
                '501~600명',
                '601~700명',
                '701~800명',
                '801~900명',
                '901~1000명',
                '1001~2000명',
              ].map((capacity) => (
                <CheckboxLabel key={capacity}>
                  <CheckboxInput
                    type="radio"
                    name="capacity"
                    value={capacity}
                    onChange={(e) =>
                      setFilters({ ...filters, capacity: e.target.value })
                    }
                  />
                  {capacity}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>

          <FilterGroup>
            <FilterLabel>이용대상</FilterLabel>
            <CheckboxContainer>
              {[
                '누구나',
                '노인',
                '성인',
                '어린이',
                '청소년',
                '여성',
                '유아',
              ].map((target) => (
                <CheckboxLabel key={target}>
                  <CheckboxInput
                    type="checkbox"
                    name="targets"
                    value={target}
                    onChange={handleCheckboxChange}
                  />
                  {target}
                </CheckboxLabel>
              ))}
            </CheckboxContainer>
          </FilterGroup>
        </FilterContainer>
      )}

      <FacilitiesList>
        {facilities.map((facility) => (
          <FacilityCard key={facility.id}>
            <h3>{facility.name}</h3>
            <p>
              <strong>Region:</strong> {facility.region}
            </p>
            <p>
              <strong>Location:</strong> {facility.location}
            </p>
            <p>
              <strong>Sport:</strong> {facility.sport}
            </p>
            <p>
              <strong>Target:</strong> {facility.target}
            </p>
            <p>
              <strong>Period:</strong> {facility.period}
            </p>
            <p>
              <strong>Day:</strong> {facility.day}
            </p>
            <p>
              <strong>Time:</strong> {facility.time}
            </p>
            <p>
              <strong>Fee:</strong> {facility.fee}원
            </p>
            <p>
              <strong>Capacity:</strong> {facility.capacity}
            </p>
          </FacilityCard>
        ))}
      </FacilitiesList>
    </Container>
  );
};

export default Filter;
