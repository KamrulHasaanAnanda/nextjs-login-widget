"use client"
import { useState } from 'react';
import LoginComponent from './LoginComponent';
import DisplayComponent from './DisplayComponent';

const LoginWidget = () => {
    const [loggedInUser, setLoggedInUser] = useState('');

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    const handleLogout = () => {
        setLoggedInUser('');
    };

    return (
        <div className="max-w-md mx-auto mt-10">
            <LoginComponent onLogin={handleLogin} />
            <DisplayComponent username={loggedInUser} onLogout={handleLogout} />
        </div>
    );
};

export default LoginWidget;