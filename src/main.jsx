import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import theme from './styles/theme'
import GlobalStyles from './styles/global';

import { Header } from './components/Header';
import { App } from './pages/App'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Header />
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
