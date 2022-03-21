import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header';
import Rotas from './router';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';
import { AuthProvider } from './hooks/AuthContext';

function App() {

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header />
        <Router>
          <Rotas />
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
