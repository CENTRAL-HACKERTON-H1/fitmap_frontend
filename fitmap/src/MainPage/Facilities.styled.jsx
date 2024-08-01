import styled from 'styled-components';

export const FacilityContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
`;

export const FacilityCard = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
`;

export const FacilityTitle = styled.h3`
  margin-top: 0;
`;

export const FacilityText = styled.p`
  margin: 8px 0;
`;
