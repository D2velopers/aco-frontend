import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/organisms';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';

const App: React.FC = () => {
  const token = localStorage.getItem('token');
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          {!!token && <Header />}
          <Routes isLoggedIn={!!token} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
