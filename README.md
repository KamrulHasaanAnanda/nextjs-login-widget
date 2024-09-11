Next.js 14 Login Widget
A customizable login widget for Next.js 14 applications using the app router.
Installation
bashCopynpm install @kamrulhassan2015/nextjs-login-widget
Usage with Next.js 14 App Router
In your app directory, create a new file (e.g., app/login/page.js) and use the components as follows:
jsxCopy'use client';

import { AuthWrapper } from '@kamrulhassan2015/nextjs-login-widget';

export default function LoginPage() {
  return (
    <main>
      <h1>Welcome to My App</h1>
      <AuthWrapper />
    </main>
  )
}
For more control, you can use the LoginComponent and DisplayComponent separately:
jsxCopy'use client';

import { useState } from 'react';
import { LoginComponent, DisplayComponent } from '@kamrulhassan2015/nextjs-login-widget';

export default function LoginPage() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <main>
      <h1>Welcome to My App</h1>
      {loggedInUser ? (
        <DisplayComponent username={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LoginComponent onLogin={handleLogin} />
      )}
    </main>
  );
}
Note: Make sure to add 'use client'; at the top of your file when using these components in a Next.js app directory.
Customization
You can customize the appearance of the components by overriding the Tailwind CSS classes in your own stylesheet.
TypeScript Support
This package includes TypeScript definitions. No additional setup is required to use it with TypeScript projects.
License
MIT