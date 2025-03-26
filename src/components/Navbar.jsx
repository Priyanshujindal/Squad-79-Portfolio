import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark`} 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        backgroundColor: '#111111',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
        padding: scrolled ? '0.5rem 1rem' : '0.75rem 1rem',
        boxShadow: scrolled ? '0 4px 6px rgba(0,0,0,0.4)' : 'none',
      }}>
      <div className="container">
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <div style={{
            display: "flex",
            alignItems: "center",
            background: "linear-gradient(45deg, #1a1a1a, #000000)",
            padding: "8px 15px",
            borderRadius: "6px",
            border: "1px solid #333",
            transition: "all 0.3s ease"
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.borderColor = "#ff4d4d";
            e.currentTarget.style.boxShadow = "0 4px 15px rgba(255, 77, 77, 0.2)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.borderColor = "#333";
            e.currentTarget.style.boxShadow = "none";
          }}>
            <span style={{
              fontSize: "24px",
              fontWeight: "600",
              color: "#ffffff",
              letterSpacing: "3px",
              textTransform: "uppercase",
              fontFamily: "monospace"
            }}>Squad</span>
            <span style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#ff4d4d",
              marginLeft: "10px",
              fontFamily: "monospace"
            }}>79</span>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          style={{
            border: '1px solid #333',
            padding: '0.6rem',
            borderRadius: '6px',
            background: 'transparent',
            transition: 'all 0.3s ease'
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <style jsx="true">{`
            .nav-link {
              color: rgba(255,255,255,0.8) !important;
              font-size: 14px;
              font-weight: 500;
              letter-spacing: 1px;
              text-transform: uppercase;
              padding: 0.5rem 1rem !important;
              transition: all 0.3s ease;
              position: relative;
            }
            
            .nav-link:hover, 
            .nav-link.active {
              color: #ff4d4d !important;
            }

            .nav-link::after {
              content: '';
              position: absolute;
              width: 0;
              height: 2px;
              bottom: 0;
              left: 50%;
              background-color: #ff4d4d;
              transform: translateX(-50%);
              transition: width 0.3s ease;
            }

            .nav-link:hover::after,
            .nav-link.active::after {
              width: 75px;
            }
          `}</style>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/experience"
              >
                Experience
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/mentors"
              >
                Mentors
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/students"
              >
                Students
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({isActive}) => 
                  isActive ? "nav-link active" : "nav-link"
                } 
                to="/more"
              >
                More
              </NavLink>
            </li>
            <li className="nav-item d-flex align-items-center ms-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 