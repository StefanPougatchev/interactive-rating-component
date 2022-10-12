import React from 'react';

import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';

import Theme from './theme/theme';
import ContentContainer from './components/ContentContainer';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <AppContainer>
        <ContentContainer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;

// AppContainer styles. Centers <Header /> component
const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: hsl(216, 12%, 8%);
`;
