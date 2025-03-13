import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider } from "styled-components";
import theme from './assets/theme.js';
import { GlobalStyle } from './style/index.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </>,
)
