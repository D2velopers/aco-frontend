import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getStorage } from './lib/useStorage';
import { RootState } from './redux/modules';
import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';
import { Header } from './routes/Base';

const App: React.FC = () => {
  const token = getStorage('token');
  const user = useSelector((state: RootState) => state.auth.userProfile.data);
  const isLoggedIn: boolean = !!token || !!user;
  return (
    <ThemeProvider theme={Theme}>
      <>
        <GlobalStyles />
        <Router>
          {isLoggedIn && <Header user={user} />}
          <Routes isLoggedIn={isLoggedIn} />
        </Router>
      </>
    </ThemeProvider>
  );
};

export default App;
