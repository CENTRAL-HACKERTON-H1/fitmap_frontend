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
  FilterButton,
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

  // Handle Checkbox Change
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

      // 필터
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
      console.error('Error fetching facilities:', error);
    }
  };

  // Toggle filter display
  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  };

  return (
    <Container>
      <SearchContainer>
        <SearchButton onClick={toggleFilters}>
          {showFilters ? '필터 닫기' : '상세검색'}
        </SearchButton>
        <SearchInput
          type="text"
          value={searchText}
          placeholder="검색어를 입력하세요"
          onChange={(e) => setSearchText(e.target.value)}
        />

        <SearchButton onClick={handleSearch}>검색</SearchButton>
      </SearchContainer>

      <FilterContainer show={showFilters ? 'true' : 'false'}>
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
              '12개월',
              '1개월',
              '2개월',
              '3개월',
              '4개월',
              '5개월',
              '6개월',
              '8개월',
              '일일',
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
            {[
              '금',
              '목',
              '목금',
              '목일',
              '수금',
              '수금일',
              '수토',
              '수토일',
              '월금',
              '월목',
              '월수',
              '월수금',
              '월수금토',
              '월수목',
              '월화',
              '월화목',
              '월화목금',
              '월화수목',
              '월화수목금',
              '월화수목금토',
              '월화수목금토일',
              '월화수목토일',
              '토',
              '토일',
              '화',
              '화금',
              '화목',
              '화목금',
              '화목일',
              '화목토일',
              '화수',
              '화수목',
              '화수목금토',
              '화수목금토일',
              '화토',
            ].map((priority) => (
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
              '1',
              '2',
              '3',
              '4',
              '5',
              '6',
              '7',
              '8',
              '9',
              '10',
              '11',
              '12',
              '13',
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '23',
              '25',
              '26',
              '27',
              '28',
              '30',
              '31',
              '32',
              '33',
              '35',
              '38',
              '42',
              '45',
              '48',
              '49',
              '50',
              '54',
              '55',
              '57',
              '60',
              '65',
              '70',
              '75',
              '76',
              '85',
              '90',
              '100',
              '110',
              '120',
              '130',
              '140',
              '150',
              '160',
              '200',
              '240',
              '250',
              '360',
              '480',
              '600',
              '650',
              '1000',
              '1200',
              '1500',
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
              '노인',
              '노인,(55세이상)',
              '노인,(58세~64세)',
              '노인,(60세이상)',
              '노인,(60세이상남녀)',
              '노인,(60세이상여성)',
              '노인,(만 50세 이상)',
              '노인,(만 60세 이상의 복지관 회원)',
              '노인,(만60세이상 여성)',
              '노인,(만60세이상)',
              '노인,(복지관 회원)',
              '노인,(복지회관회원)',
              '노인,(서울 거주 만 60세 이상 회원)',
              '노인,(서울거주 60세 이상 회원)',
              '노인,(서울거주 60세 이상)',
              '노인,(서울시에 거주하는 만 60세 이상 )',
              '노인,(서울시에 거주하는 만 60세 이상)',
              '노인,(서초구 및 인근지역에 거주하는 55세 이상)',
              '노인,8',
              '누구나,(일반)',
              '누구나,(지역주민)',
              '성인 및 청소년 남녀',
              '성인 여성',
              '성인, 어린이',
              '성인, 청소년',
              '성인,( 직장인 )',
              '성인,(16주이상의 임산부)',
              '성인,(3인)',
              '성인,(55세 이상)',
              '성인,(남녀)',
              '성인,(남여)',
              '성인,(성인남녀 )',
              '성인,(성인남여)',
              '성인,(여성)',
              '성인,(여성?)',
              '성인,(임신부)',
              '성인,(직장인)',
              '성인,8',
              '성인,노인',
              '성인,누구나',
              '성인,누구나,(남여)',
              '성인남,여',
              '성인남녀 및 어린이',
              '성인남여',
              '성인여성',
              '어린이',
              '어린이, 청소년',
              '어린이,(고학년)',
              '어린이,(초1-2)',
              '어린이,(초등1~2학년)',
              '어린이,(초등1~3학년)',
              '어린이,(초등1~6학년)',
              '어린이,(초등2~6학년)',
              '어린이,(초등2학년 이상)',
              '어린이,(초등4~6학년)',
              '어린이,(초등생4)',
              '어린이,(초등저학년)',
              '어린이,누구나',
              '어린이,누구나,8',
              '어린이,청소년',
              '어린이,청소년,(7세)',
              '어린이,청소년,(중)',
              '어린이,청소년,(초5~중고생)',
              '어린이,청소년,성인',
              '어린이,청소년,성인,(초등4 이상)',
              '어린이,청소년,성인,노인',
              '어린이,청소년,성인,노인,누구나',
              '여성',
              '유아',
              '유아 3~6세',
              '유아,(4~6세)',
              '유아,(5~7세)',
              '유아,(5-7세)',
              '유아,(5세~7세)',
              '유아,(6~7세)',
              '유아,(6~7세반)',
              '유아,(유5-6세)',
              '유아,(초등학생)',
              '유아,성인,(24개월~40개월까지의아기그리고 엄마)',
              '유아,어린이,(~초등)',
              '유아,어린이,(5-9세)',
              '유아,어린이,(6~8세)',
              '유아,어린이,(6세~초등)',
              '유아,어린이,(6세-초등생)',
              '유아,어린이,(7세~초등)',
              '유아,어린이,(유7-초등생세)',
              '유아,어린이,성인',
              '유아,어린이,청소년',
              '유아,어린이,청소년,(7세-)',
              '유아,어린이,청소년,(초5~)',
              '유아,청소년',
              '청소년',
              '청소년(여)',
              '청소년, 성인남녀',
              '청소년,(중1-3년)',
              '청소년,(중학생)',
              '청소년,(중학생이상)',
              '청소년,(초등2학년 이상)',
              '청소년,성인,( 여성전용 )',
              '초,중학생',
              '초등4-6',
              '초등5-중학생',
              '초등생, 청소년',
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
