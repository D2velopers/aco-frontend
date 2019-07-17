import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyles from '../styles/GlobalStyles';
import Routes from '../routes';
import Theme from '../styles/Theme';

export default () => {
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </>
    </ThemeProvider>
  );
};
