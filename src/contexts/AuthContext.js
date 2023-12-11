import { createContext, useState } from 'react';
import supabase from '../components/supabaseClient';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const userId = authUser ? authUser.id : null;
  const username = authUser ? authUser.user_metadata.username : null;

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser, isSignedIn, setIsSignedIn, userId, username }}>
      {children}
    </AuthContext.Provider>
  );
};