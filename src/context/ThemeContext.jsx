import React, { createContext, useState, useContext, useEffect } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('theme', isDarkTheme ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkTheme);
    document.body.style.backgroundColor = isDarkTheme ? '#121212' : '#ffffff';
    document.body.style.color = isDarkTheme ? '#f0f0f0' : '#121212';
    
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty('--bg-primary', '#121212');
      root.style.setProperty('--bg-secondary', '#1e1e1e');
      root.style.setProperty('--text-primary', '#f0f0f0');
      root.style.setProperty('--text-secondary', '#cccccc');
      root.style.setProperty('--card-bg', '#242424');
      root.style.setProperty('--navbar-bg', '#0a0a0a');
    } else {
      root.style.setProperty('--bg-primary', '#ffffff');
      root.style.setProperty('--bg-secondary', '#f5f5f5');
      root.style.setProperty('--text-primary', '#121212');
      root.style.setProperty('--text-secondary', '#333333');
      root.style.setProperty('--card-bg', '#ffffff');
      root.style.setProperty('--navbar-bg', '#ffffff');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};