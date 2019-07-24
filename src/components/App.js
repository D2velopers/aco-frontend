import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import GlobalStyles from '../styles/GlobalStyles';
import Routes from '../routes';
import Theme from '../styles/Theme';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${props => props.theme.wide};
  width: 100%;
`;

export default () => {
  const token = localStorage.getItem('token');

  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          {!!token && <Header />}
          <Wrapper>
            <Routes isLoggedIn={!!token} />
          </Wrapper>
        </Router>
        <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
      </>
    </ThemeProvider>
  );
};
