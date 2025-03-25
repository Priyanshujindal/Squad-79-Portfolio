import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const More = () => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>More</h1>
              <p className="lead" style={{ color: '#ffffff' }}>Explore our team's journey, memories, and contributions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Our Team</h2>
          <div className="row g-4">
            {/* Team Member Cards */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#000000'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body text-center p-4">
                  <div className="mb-4">
                    <img 
                      src="/images/team1.jpg" 
                      alt="Team Member"
                      className="rounded-circle"
                      style={{ 
                        width: '150px', 
                        height: '150px', 
                        objectFit: 'cover',
                        border: `3px solid ${isDarkTheme ? '#ff6b6b' : '#ff6b6b'}`
                      }}
                    />
                  </div>
                  <h4 className="mb-2" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Team Member Name</h4>
                  <p className="text-muted mb-3" style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>Role</p>
                  <p style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Brief description about the team member and their contributions.</p>
                </div>
              </div>
            </div>
            {/* Add more team member cards as needed */}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-5" style={{ backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Memories</h2>
          <div className="row g-4">
            {/* Memory Cards */}
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#000000'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <img 
                  src="/images/memory1.jpg" 
                  alt="Memory"
                  className="card-img-top"
                  style={{ height: '200px', objectFit: 'cover' }}
                />
                <div className="card-body p-4">
                  <h5 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Event Title</h5>
                  <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>Description of the memorable event and its significance to the team.</p>
                  <small style={{ color: isDarkTheme ? '#808080' : '#999999' }}>Date: January 1, 2024</small>
                </div>
              </div>
            </div>
            {/* Add more memory cards as needed */}
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Contributions</h2>
          <div className="row g-4">
            {/* Contribution Cards */}
            <div className="col-md-6">
              <div className="card h-100 border-0 shadow-lg" style={{ 
                borderRadius: '15px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                color: isDarkTheme ? '#ffffff' : '#000000'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <div className="card-body p-4">
                  <h4 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Contribution Title</h4>
                  <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>Detailed description of the team's contribution to the community or organization.</p>
                  <div className="mt-3">
                    <span className="badge me-2" style={{
                      backgroundColor: isDarkTheme ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)',
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px'
                    }}>Impact</span>
                    <span className="badge" style={{
                      backgroundColor: isDarkTheme ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)',
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px'
                    }}>Recognition</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Add more contribution cards as needed */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default More; 