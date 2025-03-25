import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const Experience = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const { isDarkTheme } = useContext(ThemeContext);

  const categories = ['All', 'Web Development', 'Workshops', 'Events'];

  const projects = [
    {
      id: 1,
      title: "Spotify Clone",
      description: "A clone of the popular music streaming platform, Spotify. This project allows users to listen to their favorite music and discover new artists.",
      image: "./images/soptify.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: ["Raksham", "Priyanshu"],
      demoLink: "https://spotifyfree.netlify.app/"
    },
    {
      id: 2,
      title: "2 days workshop",
      description: "A workshop on the python libary like numpy, pandas, matplotlib, etc.",
      image: "./images/workshop.JPG",
      category: "Workshops",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
      team: ["Raksham", "Priyanshu" , 'Rehat' , "Rajat"],
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description: "A classic two-player game built with modern web technologies. Features include responsive design, player turn indicators, and win detection logic.",
      image: "./images/TickTacToe.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: ["Raksham", "Priyanshu"],
      demoLink: "https://relastic-tac-toe.netlify.app/"
    },
    {
      id: 4,
      title: "Leetcode Event by Kalvium",
      description: "A coding event on real life coding questions to improve coding skills.",
      image: "./images/leetcode.jpg",
      category: "Events",
      tags: ["Python"],
      team: ["Raksham", "Priyanshu" , 'Rehat' , "Rajat"],
    },
    {
      id: 5,
      title: "Money Tracking Website",
      description: "A comprehensive financial management application that helps users track their expenses, income, and savings. Features include expense categorization.",
      image: "./images/MoneyTracker.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript","React"],
      team: ["Raksham", "Priyanshu", "Rajat"],
      demoLink: "https://moneytrackering.netlify.app/",
    },
    {
      id: 6,
      title: "Classic Dino Game",
      description: "A fun and engaging endless runner game inspired by the classic Chrome Dino game. Features include smooth animations, score tracking, and obstacle avoidance mechanics.",
      image: "./images/DinoGame.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: ["Raksham", "Priyanshu"],
      demoLink: "https://classic-dinogame.netlify.app/"
    },
    {
      id: 7,
      title: "Netflix Clone",
      description: "A modern streaming platform login page UI clone",
      image: "./images/netflix-clone.png",
      category: "Web Development",
      tags: ["HTML", "CSS"],
      team: ["Raksham", "Priyanshu", "Rajat"],
      demoLink: "https://netlify-79.netlify.app/"
    }
  ];

  const filteredProjects = projects.filter(project => 
    activeFilter === 'All' ? true : project.category === activeFilter
  );

  const content = (
    <div>
      {/* Hero Section */}
      <section className={`text-white py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
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
                    {project.demoLink && (
                      <a 
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
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
                        View App
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );

  return (
    content
  );
};

export default Experience; 