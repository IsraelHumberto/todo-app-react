import React from 'react';
import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'global'
import { darkTheme, lightTheme } from 'themes';
import Header from 'components/Header';
import ToDo from 'components/ToDo';

function App() {

  const[theme, setTheme] = useState(lightTheme)

  const themeToogler = () => {
    setTheme(theme.name === 'light' ? darkTheme : lightTheme)
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <ToDo 
        themeToogler={themeToogler}
      />
    </ThemeProvider>
  );
}

export default App;
