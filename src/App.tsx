import React from 'react';

import GlobalStyle from './styles/globals';
import Login from './pages/Login';
import Register from './pages/Register';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      {/* <Register /> */}
      <Login />
    </>
  );
};

export default App;
