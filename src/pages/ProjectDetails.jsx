import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { projectsData, getMemberId } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      
      // Ensure image path is adjusted for correct rendering
      if (foundProject) {
        // If path starts with ./ or doesn't start with /, add the leading / to make it absolute
        if (foundProject.image.startsWith('./')) {
          foundProject.image = foundProject.image.substring(1); // Remove the dot
        } else if (!foundProject.image.startsWith('/')) {
          foundProject.image = '/' + foundProject.image;
        }
      }
      
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="py-5 text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
        <div className="spinner-border" style={{ color: '#ff6b6b' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-5 text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
        <h2>Project not found</h2>
        <Link to="/experience" className="btn mt-3" style={{ backgroundColor: '#ff6b6b', color: 'white' }}>
          Back to Experience
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: isDarkTheme ? '#121212' : '#f8f9fa', color: isDarkTheme ? '#ffffff' : '#333333' }}>
      {/* Hero Section */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ 
        backgroundColor: '#ff6b6b',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="ps-lg-5">
                <Link 
                  to="/experience" 
                  className="btn btn-outline-light mb-4"
                  style={{
                    transition: 'all 0.3s ease',
                    borderWidth: '2px',
                    padding: '0.5rem 1.25rem',
                    color: '#ffffff'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                >
                  <i className="bi bi-arrow-left me-2"></i>Back to Experience
                </Link>
                <h1 
                  className="display-5 fw-bold mb-4" 
                  style={{ 
                    color: '#ffffff',
                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {project.title}
                </h1>
                <style>
                  {`
                    .tag-badge {
                      transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
                      background-color: rgba(255, 255, 255, 0.9) !important;
                      backdrop-filter: blur(8px);
                    }
                    .tag-badge:hover {
                      transform: translateY(-2px) scale(1.05);
                      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                      background-color: rgba(255, 255, 255, 1) !important;
                    }
                  `}
                </style>
                <div className="d-flex flex-wrap mb-4">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="badge d-flex align-items-center me-2 mb-2 tag-badge" 
                      style={{
                        color: '#333333',
                        padding: '0.5rem 1rem',
                        borderRadius: '999px',
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        height: '32px',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
                      }}
                    >{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="img-container mb-4" style={{ 
                position: 'relative',
                paddingTop: '66.67%', // 3:2 aspect ratio
                overflow: 'hidden',
                borderRadius: '1rem',
                background: 'var(--card-bg)'
              }}>
                <img 
                  src={project.image} 
                  className="img-fluid rounded-3 shadow-lg" 
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
                    borderRadius: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <h2 className="h3 mb-4">Project Overview</h2>
                <p className="mb-0" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                  {project.description_long}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 className="h3 mb-4">Key Features</h2>
                <ul className="list-unstyled">
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-3">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#ff6b6b' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <h2 className="h4 mb-3">Technologies Used</h2>
                <div className="d-flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge me-2 mb-2" style={{
                      backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>

              {project.demoLink && (
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1.5rem'
                }}>
                  <h2 className="h4 mb-3">Project Links</h2>
                  <div className="d-grid gap-2">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn"
                      style={{
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
                      <i className="bi bi-display me-2"></i> Live Demo
                    </a>
                  </div>
                </div>
              )}

              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 className="h4 mb-3">Team Members</h2>
                <ul className="list-unstyled">
                  {project.team.map((member, index) => (
                    <li key={index} className="mb-3">
                      <Link to={`/more/${getMemberId(member)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="d-flex align-items-center" style={{
                          transition: 'transform 0.2s ease, opacity 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.opacity = '1';
                        }}>
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                            width: '40px', 
                            height: '40px', 
                            backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                            color: isDarkTheme ? '#ffffff' : '#333333'
                          }}>
                            {member.charAt(0)}
                          </div>
                          <div>
                            <p className="mb-0 fw-bold">{member}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;