import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
`;

export const Sidebar = styled.div`
  width: 120px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Content = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 10px;
  background-color: #0055553b;
  color: #000;
  border: none;
  border-radius: 2px;
  font-size: 15px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #005555;
    color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;