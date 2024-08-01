import styled from 'styled-components';

export const SearchBody = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 0px 0px 3px #ddd;
  width: 250px;
  padding: 2px 14px;
  margin: auto;
  margin-bottom: 30px;
`;

export const SearchInput = styled.input`
  width: 250px;
  height: 25px;
  border: none;
  /* 클릭했을 때 ouline 생김 방지 */
  outline: none;
`;
