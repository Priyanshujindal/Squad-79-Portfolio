import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { projectsData } from '../data/projects';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isDarkTheme } = useContext(ThemeContext);

  const categories = ['All', 'Web Development', 'Workshops', 'Events'];

  const filteredProjects = projectsData.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  const content = (
    <div>
      <style>
        {`
          @keyframes slideUpFade {
            0% {
              opacity: 0;
              transform: translateY(30px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleInFade {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(10px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }

          @keyframes float {
            0% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
            100% {
              transform: translateY(0px);
            }
          }

          @keyframes glow {
            0% {
              box-shadow: 0 0 5px rgba(255, 107, 107, 0.2);
            }
            50% {
              box-shadow: 0 0 20px rgba(255, 107, 107, 0.4);
            }
            100% {
              box-shadow: 0 0 5px rgba(255, 107, 107, 0.2);
            }
          }

          .hero-section {
            animation: slideUpFade 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            position: relative;
            overflow: hidden;
          }

          .hero-section::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
            animation: float 6s ease-in-out infinite;
          }

          .card {
            animation: scaleInFade 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .card:nth-child(1) { animation-delay: 0.1s; }
          .card:nth-child(2) { animation-delay: 0.2s; }
          .card:nth-child(3) { animation-delay: 0.3s; }
          .card:nth-child(4) { animation-delay: 0.4s; }
          .card:nth-child(5) { animation-delay: 0.5s; }
          .card:nth-child(6) { animation-delay: 0.6s; }

          .card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          }

          .card img {
            transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
            filter: brightness(0.95);
          }

          .card:hover img {
            transform: scale(1.1);
            filter: brightness(1.05);
          }

          .btn {
            animation: scaleInFade 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            position: relative;
            overflow: hidden;
          }

          .btn:nth-child(1) { animation-delay: 0.1s; }
          .btn:nth-child(2) { animation-delay: 0.2s; }
          .btn:nth-child(3) { animation-delay: 0.3s; }
          .btn:nth-child(4) { animation-delay: 0.4s; }

          .btn:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 20px rgba(255, 107, 107, 0.3);
          }

          .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: 0.5s;
          }

          .btn:hover::before {
            left: 100%;
          }

          .badge {
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .badge:hover {
            transform: translateY(-2px) scale(1.05);
            box-shadow: 0 4px 12px rgba(255, 107, 107, 0.2);
          }

          .view-detail-btn {
            position: relative;
            overflow: hidden;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          .view-detail-btn:hover {
            transform: translateY(-3px);
            box-shadow: 0 8px 20px rgba(255, 107, 107, 0.3);
          }

          .view-detail-btn::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 255, 255, 0.2),
              transparent
            );
            transition: 0.5s;
          }

          .view-detail-btn:hover::after {
            left: 100%;
          }
        `}
      </style>
      {/* Hero Section */}
      <section className={`text-white py-5 hero-section ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>Skills & Experiences</h1>
              <p className="lead">A mix of our team's projects and the workshops/events we've attended to grow, collaborate, and stay current in our field</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-5">
        <div className="container">
          {/* Filter Buttons */}
          <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className="btn"
                style={{
                  backgroundColor: activeFilter === category ? 
                    (isDarkTheme ? '#ff6b6b' : '#ff6b6b') : 
                    'var(--card-bg)',
                  color: activeFilter === category ? '#ffffff' : 
                    (isDarkTheme ? '#ffffff' : '#000000'),
                  border: 'none',
                  padding: '0.5rem 1.5rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  boxShadow: isDarkTheme ? 
                    '0 2px 8px rgba(0, 0, 0, 0.2)' : 
                    '0 2px 8px rgba(0, 0, 0, 0.1)',
                  transform: 'translateY(0) scale(1)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.05)';
                    e.currentTarget.style.boxShadow = isDarkTheme ? 
                      '0 8px 20px rgba(255, 107, 107, 0.4)' : 
                      '0 8px 20px rgba(255, 107, 107, 0.3)';
                    e.currentTarget.style.backgroundColor = isDarkTheme ? 
                      'rgba(255, 107, 107, 0.15)' : 
                      'rgba(255, 107, 107, 0.1)';
                    e.currentTarget.style.border = `1px solid ${isDarkTheme ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.2)'}`;
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeFilter !== category) {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = isDarkTheme ? 
                      '0 2px 8px rgba(0, 0, 0, 0.2)' : 
                      '0 2px 8px rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.backgroundColor = 'var(--card-bg)';
                    e.currentTarget.style.border = 'none';
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="card h-100" style={{ 
                  backgroundColor: 'var(--card-bg)',
                  border: 'none',
                  borderRadius: '1rem',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: isDarkTheme ? 
                    '0 4px 20px rgba(0, 0, 0, 0.3)' : 
                    '0 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  minHeight: '400px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = isDarkTheme ? 
                    '0 8px 30px rgba(0, 0, 0, 0.4)' : 
                    '0 8px 30px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDarkTheme ? 
                    '0 4px 20px rgba(0, 0, 0, 0.3)' : 
                    '0 4px 20px rgba(0, 0, 0, 0.1)';
                }}
                >
                  {/* Image container */}
                  <div style={{ 
                    position: 'relative',
                    paddingTop: '66.67%', // 3:2 aspect ratio
                    overflow: 'hidden',
                    borderRadius: '1rem 1rem 0 0',
                    background: 'var(--card-bg)'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      style={{ 
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease',
                        transform: 'scale(1.02)',
                        border: '1px solid transparent',
                        borderRadius: '1rem 1rem 0 0'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1.02)';
                      }}
                    />
                  </div>

                  {/* App name */}
                  <div className="app-name" style={{
                    padding: '1rem',
                    backgroundColor: 'var(--card-bg)',
                    borderBottomLeftRadius: '1rem',
                    borderBottomRightRadius: '1rem'
                  }}>
                    <h5 className="app-name-title" style={{
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>{project.title}</h5>
                  </div>

                  {/* Card body with description, and tags */}
                  <div className="card-body" style={{
                    padding: '1.5rem',
                    backgroundColor: 'var(--card-bg)'
                  }}>
                    <p className="card-text" style={{ 
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      fontSize: "1rem",
                      marginBottom: "1.5rem",
                      lineHeight: "1.6"
                    }}>{project.description}</p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span key={index} className="badge" style={{
                          backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          padding: '0.35rem 0.75rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.875rem',
                          fontWeight: '500'
                        }}>{tag}</span>
                      ))}
                    </div>
                    <Link 
                      to={`/project/${project.id}`}
                      className="btn"
                      style={{
                        marginTop: '1rem',
                        padding: '0.5rem 1.5rem',
                        borderRadius: '0.5rem',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        transition: 'all 0.3s ease',
                        border: '1px solid #ff6b6b',
                        color: '#ff6b6b',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = '#ff6b6b';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = '#ff6b6b';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      View Detail
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return content;
};

export default Experience; 