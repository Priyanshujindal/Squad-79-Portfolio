import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add a small delay to ensure the animation triggers after the page loads
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity, transform;
          }
          .fade-in.loaded {
            opacity: 1;
            transform: translateY(0);
          }
          .fade-in-delay-1 {
            transition-delay: 0.2s;
          }
          .fade-in-delay-2 {
            transition-delay: 0.4s;
          }
          .fade-in-delay-3 {
            transition-delay: 0.6s;
          }
          .hero {
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            overflow: hidden;
            position: relative;
            padding-top: 7.5rem;
          }
          .img-container {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity, transform;
          }
          .img-container.loaded {
            opacity: 1;
            transform: translateY(0);
          }
          .text-content {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
            will-change: opacity, transform;
          }
          .text-content.loaded {
            opacity: 1;
            transform: translateY(0);
          }
          .stars {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
          }
          .star {
            position: absolute;
            width: 3px;
            height: 3px;
            background-color: #fff;
            border-radius: 50%;
            animation: move 20s linear infinite;
          }
          .star:nth-child(1) {
            top: 10%;
            left: 20%;
            animation-name: star1;
            animation-duration: 15s;
            animation-delay: 0s;
          }
          .star:nth-child(2) {
            top: 30%;
            left: 40%;
            animation-name: star2;
            animation-duration: 20s;
            animation-delay: 1s;
          }
          .star:nth-child(3) {
            top: 50%;
            left: 60%;
            animation-name: star3;
            animation-duration: 25s;
            animation-delay: 2s;
          }
          .star:nth-child(4) {
            top: 70%;
            left: 80%;
            animation-name: star4;
            animation-duration: 30s;
            animation-delay: 3s;
          }
          .star:nth-child(5) {
            top: 90%;
            left: 100%;
            animation-name: star5;
            animation-duration: 35s;
            animation-delay: 4s;
          }
          .star:nth-child(6) {
            top: 20%;
            left: 30%;
            animation-name: star6;
            animation-duration: 18s;
            animation-delay: 0.5s;
          }
          .star:nth-child(7) {
            top: 40%;
            left: 50%;
            animation-name: star7;
            animation-duration: 22s;
            animation-delay: 1.5s;
          }
          .star:nth-child(8) {
            top: 60%;
            left: 70%;
            animation-name: star8;
            animation-duration: 27s;
            animation-delay: 2.5s;
          }
          .star:nth-child(9) {
            top: 80%;
            left: 90%;
            animation-name: star9;
            animation-duration: 32s;
            animation-delay: 3.5s;
          }
          .star:nth-child(10) {
            top: 10%;
            left: 70%;
            animation-name: star10;
            animation-duration: 37s;
            animation-delay: 4.5s;
          }
          .star:nth-child(11) {
            top: 15%;
            left: 45%;
            animation-name: star11;
            animation-duration: 28s;
            animation-delay: 0.7s;
          }
          .star:nth-child(12) {
            top: 35%;
            left: 55%;
            animation-name: star12;
            animation-duration: 23s;
            animation-delay: 1.7s;
          }
          .star:nth-child(13) {
            top: 55%;
            left: 75%;
            animation-name: star13;
            animation-duration: 29s;
            animation-delay: 2.7s;
          }
          .star:nth-child(14) {
            top: 75%;
            left: 95%;
            animation-name: star14;
            animation-duration: 34s;
            animation-delay: 3.7s;
          }
          .star:nth-child(15) {
            top: 25%;
            left: 65%;
            animation-name: star15;
            animation-duration: 39s;
            animation-delay: 4.7s;
          }
          @keyframes star1 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(50px, -30px); }
            50% { transform: translate(-30px, -50px); }
            75% { transform: translate(30px, 40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star2 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-40px, 20px); }
            50% { transform: translate(30px, 30px); }
            75% { transform: translate(-20px, -40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star3 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(30px, 30px); }
            50% { transform: translate(-40px, -20px); }
            75% { transform: translate(20px, 40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star4 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-30px, -30px); }
            50% { transform: translate(40px, 20px); }
            75% { transform: translate(-20px, -40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star5 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(40px, 20px); }
            50% { transform: translate(-30px, -30px); }
            75% { transform: translate(30px, 40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star6 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(30px, -40px); }
            50% { transform: translate(-20px, -30px); }
            75% { transform: translate(40px, 20px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star7 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-30px, 30px); }
            50% { transform: translate(20px, 40px); }
            75% { transform: translate(-40px, -20px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star8 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(40px, -20px); }
            50% { transform: translate(-30px, -30px); }
            75% { transform: translate(20px, 40px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star9 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-20px, 40px); }
            50% { transform: translate(30px, -30px); }
            75% { transform: translate(-40px, -20px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star10 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(20px, -40px); }
            50% { transform: translate(-30px, 30px); }
            75% { transform: translate(40px, -20px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star11 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(35px, -35px); }
            50% { transform: translate(-25px, -45px); }
            75% { transform: translate(25px, 35px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star12 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-35px, 25px); }
            50% { transform: translate(25px, 35px); }
            75% { transform: translate(-35px, -25px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star13 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(25px, 25px); }
            50% { transform: translate(-35px, -25px); }
            75% { transform: translate(35px, 35px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star14 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(-25px, -25px); }
            50% { transform: translate(35px, 25px); }
            75% { transform: translate(-35px, -35px); }
            100% { transform: translate(0, 0); }
          }
          @keyframes star15 {
            0% { transform: translate(0, 0); }
            25% { transform: translate(35px, 25px); }
            50% { transform: translate(-25px, -35px); }
            75% { transform: translate(25px, 35px); }
            100% { transform: translate(0, 0); }
          }
        `}
      </style>
      {/* Hero Section */}
      <div className={`hero ${isLoaded ? 'loaded' : ''}`} style={{ 
        position: "relative",
        background: isDarkTheme ? 
          'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)' : 
          'linear-gradient(135deg,rgb(48, 46, 46) 0%,#8a817f 100%)',
        paddingTop: '7.5rem'
      }}>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="twinkling"></div>
        <div className="container">
          <div className="row align-items-center" style={{ display: 'flex', flexWrap: 'nowrap' }}>
            <div className={`col-lg-5 img-container fade-in-delay-1 ${isLoaded ? 'loaded' : ''}`} style={{ position: 'relative', marginRight: '1rem' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%',
                paddingTop: '75%',
                overflow: 'hidden',
                borderRadius: '1rem',
                background: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}>
                <img
                  src="/images/class3.jpg"
                  alt="About Hero"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.01)',
                    transition: 'transform 0.3s ease',
                    transformOrigin: 'top left'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                    e.currentTarget.style.filter = 'brightness(1)';
                    e.currentTarget.parentElement.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.filter = 'brightness(0.9)';
                    e.currentTarget.parentElement.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
                  }}
                />
              </div>
            </div>
            <div className={`col-lg-7 text-content fade-in-delay-2 ${isLoaded ? 'loaded' : ''}`}>
              <h1 className="display-4 fw-bold mb-4" style={{ 
                color: "#ffffff",
                padding: "0.5rem 0",
                letterSpacing: "0.5px",
                whiteSpace: "nowrap",
                fontSize: "3.5rem"
              }}>About <span style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Squad 79</span></h1>
              <p className="lead mb-4" style={{ 
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.5rem",
                letterSpacing: "0.3px",
                maxWidth: "100%",
                wordWrap: "break-word",
                lineHeight: "1.6"
              }}>Our class has been a collaborative environment where we worked together on various projects.</p>
              <p className="mb-4" style={{ 
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.5rem",
                letterSpacing: "0.3px",
                maxWidth: "100%",
                wordWrap: "break-word",
                lineHeight: "1.6"
              }}>We have been working on various projects like Spotify Clone, Portfolio Website, etc.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className={`py-5 fade-in fade-in-delay-3 ${isLoaded ? 'loaded' : ''}`} style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 style={{ color: isDarkTheme ? '#ffffff' : '#121212' , fontSize: '2.5rem', fontWeight: 'bold' , marginBottom: '1.5rem'}}>Our Mission</h2>
              <p className="lead" style={{ 
                color: isDarkTheme ? '#ffffff' : '#333333',
                fontWeight: '500',
                lineHeight: '1.6'
              }}>
                At <span style={{
                  background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block"
                }}>Kalvium</span>, we believe in the power of experiential learning and industry exposure. 
                Our mission is to bridge the gap between education and industry by providing students 
                with real-world experience and practical skills.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className={`py-5 fade-in fade-in-delay-3 ${isLoaded ? 'loaded' : ''}`} style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <h2 className="text-center" style={{ color: isDarkTheme ? '#ffffff' : '#000000' , fontSize: '2.5rem', fontWeight: 'bold' , marginBottom: '3rem'}}>Our Values</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff'
              }}>
                <div className="card-body text-center">
                  <i className="bi bi-lightbulb display-4 text-danger mb-3"></i>
                  <h3 className="h5" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Innovation</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#555555' }}>
                    We constantly evolve our curriculum and teaching methods to stay ahead of industry trends.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff'
              }}>
                <div className="card-body text-center">
                  <i className="bi bi-people display-4 text-danger mb-3"></i>
                  <h3 className="h5" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Community</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#555555' }}>
                    We foster a supportive learning environment where students can grow and collaborate.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff'
              }}>
                <div className="card-body text-center">
                  <i className="bi bi-trophy display-4 text-danger mb-3"></i>
                  <h3 className="h5" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Excellence</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#555555' }}>
                    We strive for excellence in everything we do, from teaching to student outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className={`py-5 fade-in fade-in-delay-3 ${isLoaded ? 'loaded' : ''}`} style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-3">
              <div className="p-4" style={{ 
                backgroundColor: isDarkTheme ? '#333333' : '#e0e0e0', 
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h2 className="display-4 fw-bold" style={{ color: "#ff6b6b" }}>1000+</h2>
                <p style={{ color: isDarkTheme ? "#ffffff" : "#333333" }}>Students Enrolled</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4" style={{ 
                backgroundColor: isDarkTheme ? '#333333' : '#e0e0e0', 
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h2 className="display-4 fw-bold" style={{ color: "#ff6b6b" }}>50+</h2>
                <p style={{ color: isDarkTheme ? "#ffffff" : "#333333" }}>Industry Partners</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4" style={{ 
                backgroundColor: isDarkTheme ? '#333333' : '#e0e0e0', 
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h2 className="display-4 fw-bold" style={{ color: "#ff6b6b" }}>100+</h2>
                <p style={{ color: isDarkTheme ? "#ffffff" : "#333333" }}>Projects Completed</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4" style={{ 
                backgroundColor: isDarkTheme ? '#333333' : '#e0e0e0', 
                borderRadius: '8px',
                transition: 'all 0.3s ease',
                transform: 'translateY(0)',
                cursor: 'pointer'
              }} onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}>
                <h2 className="display-4 fw-bold" style={{ color: "#ff6b6b" }}>95%</h2>
                <p style={{ color: isDarkTheme ? "#ffffff" : "#333333" }}>Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-5 fade-in fade-in-delay-3 ${isLoaded ? 'loaded' : ''}`} style={{ 
        backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5',
        marginBottom: '-3rem'  
      }}>
        <div className="stars">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <div className="twinkling"></div>
        <div className="container">
          <h2 className="text-center" style={{ color: isDarkTheme ? '#ffffff' : '#000000' , fontSize: '2.5rem', fontWeight: 'bold' , marginBottom: '3rem'}}>Our Team</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'relative',
                  paddingTop: '100%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/priyanshu.jpg" 
                    alt="Team Member 1"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="h5 mb-2" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Priyanshu Jindal</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#666666' }}>Team Lead</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ff6b6b",
                      fontSize: "1.25rem",
                      transition: "all 0.3s ease"
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff5252";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ff6b6b";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'relative',
                  paddingTop: '100%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/rehat.jpg" 
                    alt="Team Member 2"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="h5 mb-2" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Rehat Singh</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#666666' }}>UI/UX Designer</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ff6b6b",
                      fontSize: "1.25rem",
                      transition: "all 0.3s ease"
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff5252";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ff6b6b";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card border-0 shadow-sm" style={{ 
                borderRadius: '1rem',
                backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff',
                overflow: 'hidden'
              }}>
                <div style={{ 
                  position: 'relative',
                  paddingTop: '100%',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/rajat.jpg" 
                    alt="Team Member 3"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
                <div className="card-body text-center p-4">
                  <h3 className="h5 mb-2" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontWeight: '600' }}>Rajatvir Pandhi</h3>
                  <p style={{ color: isDarkTheme ? '#cccccc' : '#666666' }}>Backend Developer</p>
                  <div className="d-flex justify-content-center gap-3">
                    <a href="http://www.linkedin.com/in/rajatvir-pandhi-444585357" target="_blank" rel="noopener noreferrer" style={{
                      color: "#ff6b6b",
                      fontSize: "1.25rem",
                      transition: "all 0.3s ease"
                    }} onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#ff5252";
                      e.currentTarget.style.transform = "translateY(-2px)";
                    }} onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#ff6b6b";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}>
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;