import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <footer className="bg-dark text-white py-4">
      <style jsx="true">{`
        @keyframes pulse {
          0% { opacity: 0.8; transform: scale(1.5); }
          50% { opacity: 1; transform: scale(1.6); }
          100% { opacity: 0.8; transform: scale(1.5); }
        }
        .footer-link {
          transition: all 0.3s ease;
          position: relative;
        }
        .footer-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: 0;
          left: 50%;
          background-color: var(--primary-color);
          transform: translateX(-50%);
          transition: width 0.3s ease;
        }
        .footer-link:hover::after {
          width: 80%;
        }
        .footer-link:hover {
          color: var(--primary-color) !important;
        }
        .footer-link:hover {
          color: #ffffff !important;
          text-shadow: 0 0 15px rgba(255, 255, 255, 0.8),
                       0 0 30px rgba(255, 255, 255, 0.5),
                       0 0 45px rgba(255, 255, 255, 0.3);
          transform: translateX(5px);
          filter: brightness(1.2);
        }
      `}</style>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-4 mb-lg-0">
            <h3 className="h4 mb-3">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 font-bold">Our <span style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Portfolio</span></span>
            </h3>
            <p className="text-light mb-4">
              Empowering students with industry-relevant skills and real-world experience. Join our community of learners and innovators to build the future together.
            </p>
            <div className="d-flex gap-3 mb-3">
              <a href="https://youtube.com/@kalvium" target="_blank" rel="noopener noreferrer" className="text-white bg-secondary bg-opacity-25 p-2 rounded footer-link">
                <i className="bi bi-youtube fs-5"></i>
              </a>
              <a href="https://www.linkedin.com/school/kalvium/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="text-white bg-secondary bg-opacity-25 p-2 rounded footer-link">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="https://www.instagram.com/kalvium_official/" target="_blank" rel="noopener noreferrer" className="text-white bg-secondary bg-opacity-25 p-2 rounded footer-link">
                <i className="bi bi-instagram fs-5"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h4 className="h5 mb-3">Quick Links</h4>
            <div className="row">
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/" className="text-white text-decoration-none">
                      <i className="bi bi-house-door me-2"></i>Home
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/about" className="text-white text-decoration-none">
                      <i className="bi bi-info-circle me-2"></i>About
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/experience" className="text-white text-decoration-none">
                      <i className="bi bi-kanban me-2"></i>Experiences
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <Link to="/more" className="text-white text-decoration-none">
                      <i className="bi bi-people me-2"></i>More
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/mentors" className="text-white text-decoration-none">
                      <i className="bi bi-mortarboard me-2"></i>Mentors
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="/students" className="text-white text-decoration-none">
                      <i className="bi bi-person me-2"></i>Students
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3 border-secondary" />
        <div className="row align-items-center">
          <div className="col-12 text-center mb-3">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Our <span style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Portfolio</span>. All rights reserved. | Copyright &copy; Chitkara  <span style={{
                display: "inline-block", 
                fontWeight: "900",
                letterSpacing: "1px",
                animation: "pulse 2s ease-in-out infinite",
                textShadow: "0 0 10px rgba(255, 0, 0, 0.7)",
                transform: "scale(1.5)",
                color: "#dc143c"
              }}>X</span> Kalvium {new Date().getFullYear()}
            </p>
          </div>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;