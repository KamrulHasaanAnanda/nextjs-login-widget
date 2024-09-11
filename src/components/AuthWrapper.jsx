"use client"

import React, { useState } from 'react';
import LoginComponent from './LoginComponent';
import DisplayComponent from './DisplayComponent';

const AuthWrapper = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <DisplayComponent username={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LoginComponent onLogin={handleLogin} />
      )}
    </div>
  );
};

export default AuthWrapper;