// src/context/AuthContext.jsx

import React, { createContext, useState, useContext } from 'react';

// Create an AuthContext
const AuthContext = createContext();

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);

// AuthProvider component that wraps around the app
export const AuthProvider = ({ children }) => {
  // Simple state to track if user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Login function to simulate authentication
  const login = () => {
    setIsAuthenticated(true);
  };

  // Logout function to simulate logout
  const logout = () => {
    setIsAuthenticated(false);
  };

  // Provide authentication status and functions
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
