import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
`;

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const ContentContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
