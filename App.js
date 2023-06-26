import React, { useState } from 'react';

import SignInPage from './components/SignInPage';

export const App = () => {
 const [provider, setProvider] = useState(null);
  const handleConnect = (provider) => {
    setProvider(provider);
  };

  return (
    <div>
      {!gameStarted && (
        <div>
          <SignInPage onConnect={handleConnect} />
        </div>
    </div>
  );
};


