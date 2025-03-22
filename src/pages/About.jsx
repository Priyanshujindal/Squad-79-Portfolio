import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About = () => {
  const { isDarkTheme } = useTheme();

  return (
    <div>
      {/* Hero Section */}
      <div className="hero">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 img-container" style={{ position: 'relative' }}>
              <div style={{ 
                position: 'relative', 
                width: '100%',
                paddingTop: '66.67%', // 3:2 aspect ratio
                overflow: 'hidden',
                borderRadius: '1rem',
                background: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5'
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
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.1)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.01)';
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4" style={{ 
                color: "#ffffff",
                padding: "0.5rem 0",
                letterSpacing: "0.5px"
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
                fontSize: "1.25rem",
                letterSpacing: "0.3px"
              }}>My class has been a collaborative environment where we worked together on various projects.</p>
              <p className="mb-4" style={{ 
                color: "#ffffff",
                fontWeight: "600",
                letterSpacing: "0.3px"
              }}>We have been working on various projects like Spotify Clone, Portfolio Website, etc.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-5" style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="mb-4" style={{ color: isDarkTheme ? '#ffffff' : '#121212' }}>Our Mission</h2>
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
      <section className="py-5" style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>Our Values</h2>
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
      <section className="py-5" style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
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
      <section className="py-5" style={{ 
        backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5',
        marginBottom: '-3rem'  
      }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>Our Team</h2>
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