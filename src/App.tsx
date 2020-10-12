import React from 'react';
import Landing from './pages/Landing';

import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <div className="App">
      <Landing />

      <GlobalStyle />
    </div>
  );
} 

export default App;
