import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import Rotas from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Router>
      <Rotas />
      </Router>
    </ThemeProvider>
  );
}

export default App;
