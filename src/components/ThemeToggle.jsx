import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-btn d-flex align-items-center justify-content-center ${
        isDarkTheme ? 'btn-light' : 'btn-dark'
      }`}
      style={{
        width: '40px',
        height: '40px',
        padding: '0',
        borderRadius: '50%',
        border: `2px solid ${isDarkTheme ? '#f0f0f0' : '#121212'}`,
        cursor: 'pointer',
        backgroundColor: isDarkTheme ? '#242424' : '#f5f5f5',
        color: isDarkTheme ? '#f0f0f0' : '#121212',
        transition: 'all 0.3s ease',
        boxShadow: isDarkTheme ? '0 0 8px rgba(255,255,255,0.2)' : '0 2px 4px rgba(0,0,0,0.2)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.backgroundColor = isDarkTheme ? '#f0f0f0' : '#121212';
        e.currentTarget.style.color = isDarkTheme ? '#121212' : '#f0f0f0';
        e.currentTarget.style.boxShadow = isDarkTheme ? '0 0 12px rgba(255,255,255,0.4)' : '0 4px 8px rgba(0,0,0,0.3)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.backgroundColor = isDarkTheme ? '#242424' : '#f5f5f5';
        e.currentTarget.style.color = isDarkTheme ? '#f0f0f0' : '#121212';
        e.currentTarget.style.boxShadow = isDarkTheme ? '0 0 8px rgba(255,255,255,0.2)' : '0 2px 4px rgba(0,0,0,0.2)';
      }}
      aria-label="Toggle theme"
    >
      {isDarkTheme ? (
        // Sun icon for light mode
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="5" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </svg>
      ) : (
        // Moon icon for dark mode
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 