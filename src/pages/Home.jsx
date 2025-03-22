import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import classImage from '../assets/img/class.jpg';
import spotifyImage from '../assets/img/soptify.png';
// import workshopImage from '../assets/img/workshop.JPG';

const Home = () => {
  const { isDarkTheme } = useTheme();

  // Remove the duplicate featuredProjects array since we already have projects array
  const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      description: "A clone of the popular music streaming platform, Spotify. This project allows users to search for songs, albums, and playlists, and play them in the browser.",
      image: spotifyImage,
      tags: ["HTML", "CSS", "JavaScript"],
      link: "/projects/1",
      demoLink: "https://spotifyfree.netlify.app/"
    },
    {
      id: 2,
      title: "2 days workshop",
      description: "A workshop on the python libary like numpy, pandas, matplotlib, etc.",
      image: '/images/workshop.JPG',
      category: "Workshops",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
      link: "/projects/2"
    },
    {
      id: 3,
      title: "LeetCode Events",
      description: "Event based on the real life coding questions.",
      image: "/images/leetcode.jpg",
      tags: ["Python"],
      link: "/projects/3"
    }
  ];

  const technologies = [
    {
      name: "HTML",
      icon: "bi bi-filetype-html",
      color: "#E34F26"
    },
    {
      name: "CSS",
      icon: "bi bi-filetype-css",
      color: "#1572B6"
    },
    {
      name: "JavaScript",
      icon: "bi bi-filetype-js",
      color: "#F7DF1E"
    },
    {
      name: "Python",
      icon: "bi bi-filetype-py",
      color: "#3776AB"
    },
    {
      name: "React",
      icon: "bi bi-filetype-jsx",
      color: "#61DAFB"
    },
    {
      name: "Bootstrap",
      icon: "bi bi-bootstrap",
      color: "#7952B3"
    },
    {
      name: "MySQL",
      icon: "bi bi-database",
      color: "#4479A1"
    },
    {
      name: "Tailwind CSS",
      icon: "bi bi-filetype-css",
      color: "#38B2AC"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <div className="hero" style={{ position: "relative" }}>
        <div className="container" style={{ position: "relative", zIndex: 2 }}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="text-display mb-4" style={{ 
                color: "#ffffff",
                padding: "0.5rem 0",
                letterSpacing: "0.5px"
              }}>Welcome to Our <span style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block"
              }}>Portfolio</span></h1>
              <p className="lead mb-4" style={{ 
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "1.25rem",
                letterSpacing: "0.3px"
              }}>Empowering the next generation of tech innovators through hands-on learning and real-world projects.</p>
              <Link to="/about" className="btn btn-primary btn-lg" style={{ 
                color: "#ffffff",
                backgroundColor: "rgba(255, 126, 95, 0.9)",
                borderColor: "transparent",
                fontWeight: "500",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 0.9)';
              }}
              >Learn More</Link>
            </div>
            <div className="col-lg-6">
              <div style={{ 
                position: 'relative', 
                width: '100%',
                paddingTop: '66.67%', // 3:2 aspect ratio
                overflow: 'hidden',
                borderRadius: '1rem',
                background: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5'
              }}>
                <img
                  src={classImage}
                  alt="Hero Image"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.01)', // Slightly scale up to prevent white edges
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
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="projects-section py-5" style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <h2 className="text-headline mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>Featured Experiences</h2>
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-md-4">
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
                          padding: "0.5rem 1rem",
                          borderRadius: "0.5rem",
                          fontSize: "0.875rem",
                          fontWeight: "500"
                        }}>{tag}</span>
                      ))}
                    </div>
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-danger"
                        style={{
                          marginTop: '1rem',
                          padding: '0.5rem 1.5rem',
                          borderRadius: '0.5rem',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.boxShadow = 'none';
                        }}
                      >
                        View App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <Link to="/projects" className="btn btn-primary btn-lg" style={{ 
              color: "#ffffff", 
              backgroundColor: "rgba(255, 126, 95, 0.9)",
              borderColor: "transparent",
              fontWeight: "500",
              padding: "0.75rem 1.5rem",
              borderRadius: "0.5rem",
              textDecoration: "none",
              fontSize: "1rem",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 0.9)';
            }}
            >View All Experiences</Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div style={{ 
                position: 'relative', 
                width: '100%',
                paddingTop: '66.67%', // 3:2 aspect ratio
                overflow: 'hidden',
                borderRadius: '1rem',
                background: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5'
              }}>
                <img
                  src="/images/class2.jpg"
                  alt="About Image"
                  style={{ 
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transform: 'scale(1.01)', // Slightly scale up to prevent white edges
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
              <h2 className="section-title" style={{
                borderBottom: "3px solid #ff7e5f",
                paddingBottom: "8px",
                display: "inline-block",
                marginBottom: "20px",
                color: isDarkTheme ? 'var(--text-primary)' : '#000000'
              }}>About Our <span style={{
                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline"
              }}>Portfolio</span></h2>
              <p className="lead mb-4" style={{ color: isDarkTheme ? 'var(--text-primary)' : '#000000' }}>We showcase innovative projects created by talented students, demonstrating real-world applications of cutting-edge technologies and creative solutions.</p>
              <p className="text-body mb-4" style={{ color: isDarkTheme ? 'var(--text-primary)' : '#000000' }}>Our unique approach combines industry-standard curriculum with hands-on projects, ensuring students are well-prepared for the tech industry.</p>
              <Link to="/about" className="btn btn-primary btn-lg" style={{ 
                color: "#ffffff", 
                backgroundColor: "rgba(255, 126, 95, 0.9)",
                borderColor: "transparent",
                fontWeight: "500",
                padding: "0.75rem 1.5rem",
                borderRadius: "0.5rem",
                textDecoration: "none",
                fontSize: "1rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 126, 95, 0.9)';
              }}
              >Learn More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="tech-stack-section py-5" style={{ backgroundColor: isDarkTheme ? 'var(--bg-primary)' : '#f5f5f5' }}>
        <div className="container">
          <h2 className="text-headline mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>Our Technology Stack</h2>
          <div className="row g-4">
            {technologies.map((tech, index) => (
              <div key={index} className="col-6 col-md-3">
                <div className="tech-card text-center p-4" style={{ 
                  backgroundColor: isDarkTheme ? 'var(--card-bg)' : '#ffffff',
                  borderRadius: '1rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  transformStyle: 'preserve-3d',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.08) rotateY(2deg)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
                  e.currentTarget.style.zIndex = '1';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1) rotateY(0deg)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.zIndex = '0';
                }}>
                  <i className={tech.icon} style={{ 
                    fontSize: '2.5rem', 
                    color: tech.color,
                    marginBottom: '1rem',
                    display: 'block'
                  }}></i>
                  <h3 className="h5" style={{ 
                    color: isDarkTheme ? '#ffffff' : '#333333',
                    marginBottom: '0'
                  }}>{tech.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;