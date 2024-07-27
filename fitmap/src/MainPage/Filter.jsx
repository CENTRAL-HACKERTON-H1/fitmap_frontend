import React from 'react';
import { FilterContainer, FilterItems } from './Filter.styled';

const Filter = ({ filters, onFilterChange }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <FilterContainer>
      <FilterItems>
        <label>지역</label>
        <select name="region" value={filters.region} onChange={handleChange}>
          <option value="">전체</option>
          <option value="강남구">강남구</option>
          <option value="강동구">강동구</option>
          <option value="강북구">강북구</option>
          <option value="강서구">강서구</option>
          <option value="관악구">관악구</option>
          <option value="광진구">광진구</option>
          <option value="구로구">구로구</option>
          <option value="금천구">금천구</option>
          <option value="노원구">노원구</option>
          <option value="도봉구">도봉구</option>
          <option value="동대문구">동대문구</option>
          <option value="동작구">동작구</option>
          <option value="동장구">동장구</option>
          <option value="서대문구">서대문구</option>
          <option value="서초구">서초구</option>
          <option value="성동구">성동구</option>
          <option value="성북구">성북구</option>
          <option value="송파구">송파구</option>
          <option value="양천구">양천구</option>
          <option value="영등포구">영등포구</option>
          <option value="용산구">용산구</option>
          <option value="은평구">은평구</option>
          <option value="종로구">종로구</option>
          <option value="중구">중구</option>
          <option value="중랑구">중랑구</option>
        </select>
      </FilterItems>
      <FilterItems>
        <label>종목</label>
        <select
          name="category"
          value={filters.category}
          onChange={handleChange}
        >
          <option value="">전체</option>
          <option value="S-보드">S-보드</option>
          <option value="건강댄스">건강댄스</option>
          <option value="걷기와근력운동">걷기와근력운동</option>
          <option value="검도">검도</option>
          <option value="골프">골프</option>
          <option value="국선도">국선도</option>
          <option value="권투">권투</option>
          <option value="나이트댄스">나이트댄스</option>
          <option value="노르딕워킹">노르딕워킹</option>
          <option value="농구">농구</option>
          <option value="다이어트댄스">다이어트댄스</option>
          <option value="단전호흡">단전호흡</option>
          <option value="당구">당구</option>
          <option value="라인댄스">라인댄스</option>
          <option value="라켓볼">라켓볼</option>
          <option value="라틴댄스">라틴댄스</option>
          <option value="리권">리권</option>
          <option value="모던댄스">모던댄스</option>
          <option value="발레">발레</option>
          <option value="방송댄스">방송댄스</option>
          <option value="배구">배구</option>
          <option value="배드민턴">배드민턴</option>
          <option value="밸리댄스">밸리댄스</option>
          <option value="복싱다이어트">복싱다이어트</option>
          <option value="볼룸댄스">볼룸댄스</option>
          <option value="사교댄스">사교댄스</option>
          <option value="살사&라인댄스">살사&라인댄스</option>
          <option value="선교무용">선교무용</option>
          <option value="스테이트">스테이트</option>
          <option value="스쿼시">스쿼시</option>
          <option value="스킨스쿠버">스킨스쿠버</option>
          <option value="스트레칭">스트레칭</option>
          <option value="스포츠댄스">스포츠댄스</option>
          <option value="시니어택견">시니어택견</option>
          <option value="아기스포츠단">아기스포츠단</option>
          <option value="아침운동">아침운동</option>
          <option value="아쿠아로빅">아쿠아로빅</option>
          <option value="야구">야구</option>
          <option value="어린이체력교실">어린이체력교실</option>
          <option value="에어로빅">에어로빅</option>
          <option value="여성호신술">여성호신술</option>
          <option value="운동">운동</option>
          <option value="웨이트로빅">웨이트로빅</option>
          <option value="웰빙댄스">웰빙댄스</option>
          <option value="유아체육">유아체육</option>
          <option value="인라인스케이트">인라인스케이트</option>
          <option value="임산부수중운동">임산부수중운동</option>
          <option value="재즈댄스">재즈댄스</option>
          <option value="전통무용">전통무용</option>
          <option value="정심공">정심공</option>
          <option value="줄넘기">줄넘기</option>
          <option value="째저사이즈">째저사이즈</option>
          <option value="체육교실">체육교실</option>
          <option value="체조">체조</option>
          <option value="체형교정">체형교정</option>
          <option value="치어리더">치어리더</option>
          <option value="클럽댄스">클럽댄스</option>
          <option value="키즈 벨리댄스">키즈 벨리댄스</option>
          <option value="태권도">태권도</option>
          <option value="태권에어로비스">태권에어로비스</option>
          <option value="태껸">태껸</option>
          <option value="태보">태보</option>
          <option value="탭댄스">탭댄스</option>
          <option value="특공무술">특공무술</option>
          <option value="티볼">티볼</option>
          <option value="파워로빅">파워로빅</option>
          <option value="포켓볼">포켓볼</option>
          <option value="포크댄스">포크댄스</option>
          <option value="풋살">풋살</option>
          <option value="피규어로빅스">피규어로빅스</option>
          <option value="피트니스">피트니스</option>
          <option value="필라테스">필라테스</option>
          <option value="학교체육">학교체육</option>
          <option value="해맞이춤">해맞이춤</option>
          <option value="힙합">힙합</option>
        </select>
      </FilterItems>
      <FilterItems>
        <label>대상</label>
        <select name="target" value={filters.target} onChange={handleChange}>
          <option value="">전체</option>
          <option value="노인">노인</option>
          <option value="누구나">누구나</option>
          <option value="성인 및 청소년 남녀">성인 및 청소년 남녀</option>
          <option value="성인">성인</option>
          <option value="어린이">어린이</option>
          <option value="여성">여성</option>
          <option value="유아">유아</option>
          <option value="청소년">청소년</option>
        </select>
      </FilterItems>
      <FilterItems>
        <label>기간</label>
        <select name="period" value={filters.period} onChange={handleChange}>
          <option value="">전체</option>
          <option value="1개월">1개월</option>
          <option value="2개월">2개월</option>
          <option value="3개월">3개월</option>
          <option value="4개월">4개월</option>
          <option value="5개월">5개월</option>
          <option value="6개월">6개월</option>
          <option value="8개월">8개월</option>
          <option value="12개월">12개월</option>
          <option value="일일">일일</option>
          {/* 추가 기간 옵션 */}
        </select>
      </FilterItems>
      <FilterItems>
        <label>요일</label>
        <select name="day" value={filters.day} onChange={handleChange}>
          <option value="">전체</option>
          <option value="일">일</option>
          <option value="월">월</option>
          <option value="화">화</option>
          <option value="수">수</option>
          <option value="목">목</option>
          <option value="금">금</option>
          <option value="토">토</option>
          <option value="목금">목금</option>
          <option value="목일">목일</option>
          <option value="수금일">수금일</option>
          <option value="수토">수토</option>
          <option value="수토일">수토일</option>
          <option value="월목">월목</option>
          <option value="월수">월수</option>
          <option value="월수금">월수금</option>
          <option value="월수금토">월수금토</option>
          <option value="월수목">월수목</option>
          <option value="월화">월화</option>
          <option value="월화목">월화목</option>
          <option value="월화목금">월화목금</option>
          <option value="월화수목">월화수목</option>
          <option value="월화수목금">월화수목금</option>
          <option value="월화수목금토">월화수목금토</option>
          <option value="월화수목금토일">월화수목금토일</option>
          <option value="월화수목토일">월화수목토일</option>
          <option value="화금">화금</option>
          <option value="화목">화목</option>
          <option value="화목금">화목금</option>
          <option value="화목일">화목일</option>
          <option value="화수">화수</option>
          <option value="화수목">화수목</option>
          <option value="화수목금토">화수목금토</option>
          <option value="화수목금토일">화수목금토일</option>
          <option value="화토">화토</option>
        </select>
      </FilterItems>
      <FilterItems>
        <label>진행 시간</label>
        <select
          name="duration"
          value={filters.duration}
          onChange={handleChange}
        >
          <option value="">전체</option>
          <option value="1시간">1시간</option>
          <option value="2시간">2시간</option>
          {/* 추가 진행 시간 옵션 */}
        </select>
      </FilterItems>
      <FilterItems>
        <label>수강료</label>
        <select name="fee" value={filters.fee} onChange={handleChange}>
          <option value="">전체</option>
          <option value="무료">무료</option>
          <option value="유료">유료</option>
          {/* 추가 수강료 옵션 */}
        </select>
      </FilterItems>
      <FilterItems>
        <label>전체 정원수</label>
        <select
          name="capacity"
          value={filters.capacity}
          onChange={handleChange}
        >
          <option value="">전체</option>
          <option value="10명 이하">10명 이하</option>
          <option value="20명 이하">20명 이하</option>
          {/* 추가 정원 옵션 */}
        </select>
      </FilterItems>
    </FilterContainer>
  );
};

export default Filter;
