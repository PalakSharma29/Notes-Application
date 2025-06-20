// src/context/AuthContext.tsx
import { createContext, useContext, useState } from 'react';
import { AuthContextType } from './data/types';

const AuthContext = createContext<AuthContextType>({
  token: null,
  userId: null,
  login: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [userId, setUserId] = useState(localStorage.getItem('userId'));

  const login = (token: string, userId: string) => {
    localStorage.setItem('token', token);
    localStorage.setItem('userId', userId);
    setToken(token);
    setUserId(userId);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    setToken(null);
    setUserId(null);
  };

  return (
    <AuthContext.Provider value={{ token, userId, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
