import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header/>
      <Home />
    </ThemeProvider>
  );
}

export default App;
