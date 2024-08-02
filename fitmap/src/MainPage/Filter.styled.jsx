import styled from 'styled-components';

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: baseline;
  width: 90vh;
  margin: auto;
  gap: 15px;
`;

export const FilterItems = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  select {
    width: 70px;
    height: 25px;
    font-size: 12px;
    font-weight: 100px;
    border-radius: 10px;
  }
`;
