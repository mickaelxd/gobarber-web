import React from 'react';

import GlobalStyle from './styles/globals';
import SignIn from './pages/SignIn';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <SignIn />
    </>
  );
};

export default App;
