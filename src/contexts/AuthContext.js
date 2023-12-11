import { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isSignedIn, setIsSignedIn }}>
      {children}
    </AuthContext.Provider>
  );
};