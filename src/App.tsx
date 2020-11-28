import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Routes from './routes';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
          <Routes />
        <GlobalStyle />
      </MainLayout>
    </Router>
  );
};

export default App;
