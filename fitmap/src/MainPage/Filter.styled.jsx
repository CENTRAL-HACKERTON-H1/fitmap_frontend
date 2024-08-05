import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const SearchInput = styled.input`
  padding: 8px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 12px;
  text-align: center;
`;

export const SearchButton = styled.button`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background-color: #00555526;
  border: 1px solid lightgrey;
  border-radius: 3px;
`;

export const FilterContainer = styled.div`
  display: ${({ $show }) => ($show ? 'flex' : 'none')};
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  padding: 20px 40px;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const FilterLabel = styled.label`
  margin-bottom: 5px;
  font-weight: 800;
  font-size: 17px;
  display: block;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 5px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  font-size: 14px;
`;

export const CheckboxInput = styled.input`
  margin-right: 5px;
`;

export const FacilitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const FacilityCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
`;
