import React, { useContext, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const More = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [hoveredCard, setHoveredCard] = useState(null);

  const memories = [
    {
      title: 'Hackathon Win',
      description: 'Our team won first place in the annual hackathon competition.',
      date: 'January 20, 2025',
      image: 'https://placehold.co/600x400?text=Hackathon+Win'
    },
    {
      title: 'Team Outing',
      description: 'Our team outing to the mountains was a great bonding experience.',
      date: 'March 15, 2025',
      image: 'https://placehold.co/600x400?text=Team+Outing'
    },
    {
      title: 'Project Launch',
      description: 'Celebrating the successful launch of our latest project.',
      date: 'February 10, 2025',
      image: 'https://placehold.co/600x400?text=Project+Launch'
    },
    {
      title: 'Event Title',
      description: 'Description of the memorable event and its significance to the team.',
      date: 'January 1, 2024',
      image: 'https://placehold.co/600x400?text=Event+Title'
    },
    {
      title: 'Team Celebration',
      description: 'Our team celebrating a successful project completion.',
      date: 'March 25, 2025',
      image: 'https://placehold.co/600x400?text=Team+Celebration'
    }
  ];

  const contributions = [
    {
      title: 'Open Source Contribution',
      description: 'Contributed to an open-source project.',
      date: 'February 15, 2025',
      image: 'https://placehold.co/200x200'
    },
    {
      title: 'Contribution Title',
      description: 'Detailed description of the team\'s contribution to the community or organization.',
      date: 'March 10, 2025',
      image: 'https://placehold.co/200x200'
    }
  ];

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
            {[
              {
                id: 1,
                name: "Priyanshu Jindal",
                role: "Team Lead",
                image: "/priyanshu.jpg",
                description: "Experienced team lead with expertise in project management and technical leadership.",
                skills: ["Project Management", "Technical Leadership", "Team Building"],
                linkedin: "https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                id: 2,
                name: "Raksham Sharma",
                role: "Frontend Developer",
                image: "/raksham.jpg",
                description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces.",
                skills: ["React", "JavaScript", "CSS", "Tailwind CSS", 'react'],
                linkedin: "https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              },
              {
                id: 3,
                name: "Rajatvir Pandhi",
                role: "Backend Developer",
                image: "/rajat3.jpg",
                description: "Backend expert focused on scalable server architecture and database optimization.",
                skills: ["Python", "Database Design"],
                linkedin: "http://www.linkedin.com/in/rajatvir-pandhi-444585357"
              },
              {
                id: 4,
                name: "Riya Garg",
                role: "UI/UX Designer",
                image: "/riya.jpg",
                description: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
                skills: ["UI Design", "User Research", "Prototyping"],
                linkedin: "https://www.linkedin.com/in/sarah-wilson"
              },
              {
                id: 5,
                name: "Rehat Singh",
                role: "UI/UX Designer",
                image: "/rehat.jpg",
                description: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
                skills: ["UI/UX Design", "User Research", "Prototyping"],
                linkedin: "https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
            ].map(person => (
              <div key={person.id} className="col-sm-12 col-md-6 col-lg-4">
                <div 
                  className="card h-100 border-0 shadow-sm position-relative" 
                  style={{ 
                    borderRadius: '1rem', 
                    overflow: 'visible', 
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    transformOrigin: 'center',
                    boxShadow: hoveredCard === person.id ? 
                      `0 25px 30px rgba(0, 0, 0, 0.15), 0 0 30px rgba(255, 107, 107, 0.25)` : 
                      '0 4px 8px rgba(0, 0, 0, 0.08)',
                    border: hoveredCard === person.id ? 'none' : '1px solid transparent',
                    background: hoveredCard === person.id ? 
                      (isDarkTheme ? 
                        'linear-gradient(145deg, #2d2d2d, #2d2d2d) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box' : 
                        'linear-gradient(145deg, #ffffff, #ffffff) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box') :
                      (isDarkTheme ? '#2d2d2d' : '#ffffff'),
                    transform: hoveredCard === person.id ? 
                      'translateY(-20px) scale(1.005) perspective(1000px) rotateX(2deg)' : 
                      'translateY(0) scale(1) perspective(1000px) rotateX(0)',
                    zIndex: 1
                  }}
                  onMouseEnter={() => setHoveredCard(person.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {hoveredCard === person.id && (
                    <>
                      <span className="particle-1" style={{
                        position: 'absolute',
                        width: '8px',
                        height: '8px',
                        background: 'rgba(255, 107, 107, 0.7)',
                        borderRadius: '50%',
                        top: '20%',
                        left: '10%',
                        pointerEvents: 'none',
                        zIndex: -1,
                        boxShadow: '0 0 16px rgba(255, 107, 107, 0.7)',
                        animation: 'particleFadeCustom 2s infinite 0.2s'
                      }}></span>
                      <span className="particle-2" style={{
                        position: 'absolute',
                        width: '6px',
                        height: '6px',
                        background: 'rgba(255, 107, 107, 0.6)',
                        borderRadius: '50%',
                        top: '40%',
                        left: '80%',
                        pointerEvents: 'none',
                        zIndex: -1,
                        boxShadow: '0 0 12px rgba(255, 107, 107, 0.6)',
                        animation: 'particleFadeCustom 1.8s infinite 0.5s'
                      }}></span>
                      <span className="particle-3" style={{
                        position: 'absolute',
                        width: '10px',
                        height: '10px',
                        background: 'rgba(255, 107, 107, 0.5)',
                        borderRadius: '50%',
                        top: '70%',
                        left: '30%',
                        pointerEvents: 'none',
                        zIndex: -1,
                        boxShadow: '0 0 20px rgba(255, 107, 107, 0.5)',
                        animation: 'particleFadeCustom 2.2s infinite 0.1s'
                      }}></span>
                      <span className="particle-4" style={{
                        position: 'absolute',
                        width: '5px',
                        height: '5px',
                        background: 'rgba(255, 107, 107, 0.8)',
                        borderRadius: '50%',
                        top: '50%',
                        left: '50%',
                        pointerEvents: 'none',
                        zIndex: -1,
                        boxShadow: '0 0 10px rgba(255, 107, 107, 0.8)',
                        animation: 'particleFadeCustom 1.5s infinite 0.8s'
                      }}></span>
                      <span className="particle-5" style={{
                        position: 'absolute',
                        width: '7px',
                        height: '7px',
                        background: 'rgba(255, 107, 107, 0.7)',
                        borderRadius: '50%',
                        top: '10%',
                        left: '60%',
                        pointerEvents: 'none',
                        zIndex: -1,
                        boxShadow: '0 0 14px rgba(255, 107, 107, 0.7)',
                        animation: 'particleFadeCustom 2.4s infinite 0.3s'
                      }}></span>
                      <style>
                        {`
                          @keyframes particleFadeCustom {
                            0% { transform: translateY(0) scale(1); opacity: 0; }
                            20% { opacity: 1; }
                            100% { transform: translateY(-${Math.random() * 50 + 50}px) scale(0); opacity: 0; }
                          }
                        `}
                      </style>
                    </>
                  )}
                  <div className="img-container" style={{ overflow: 'hidden', borderRadius: '1rem 1rem 0 0' }}>
                    <img 
                      src={person.image} 
                      className="card-img-top" 
                      alt={person.name}
                      width="300"
                      height="300"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "300px",
                        transition: "all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)",
                        transform: hoveredCard === person.id ? 'scale(1.08)' : 'scale(1)',
                        filter: hoveredCard === person.id ? 'brightness(1.1) contrast(1.05)' : 'brightness(1) contrast(1)'
                      }}
                    />
                  </div>
                  <div className="card-body" style={{ backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff' }}>
                    <h3 className="h4 mb-2" style={{ 
                      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                      color: isDarkTheme ? '#ffffff' : '#333333'
                    }}>{person.name}</h3>
                    <p className="text-danger mb-3" style={{ 
                      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
                      textShadow: hoveredCard === person.id ? '0 0 8px rgba(255, 107, 107, 0.5)' : 'none',
                      letterSpacing: hoveredCard === person.id ? '0.3px' : 'normal',
                      transition: 'all 0.3s ease'
                    }}>{person.role}</p>
                    <p className="mb-4" style={{ 
                      fontSize: 'clamp(0.85rem, 3vw, 1rem)',
                      color: isDarkTheme ? '#b3b3b3' : '#6c757d'
                    }}>{person.description}</p>
                    
                    <h4 className="h5 mb-3" style={{ 
                      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
                      color: isDarkTheme ? '#ffffff' : '#333333'
                    }}>Skills</h4>
                    <div className="d-flex flex-wrap gap-2 mb-4">
                      {person.skills.map((skill, index) => (
                        <span 
                          key={index} 
                          style={{ 
                            backgroundColor: '#ff6b6b',
                            color: 'white',
                            padding: '0.4rem 0.8rem',
                            borderRadius: '20px',
                            fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)',
                            fontWeight: '500',
                            letterSpacing: '0.3px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                            transition: 'all 0.2s ease',
                            margin: '0.2rem',
                            display: 'inline-block'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff5252';
                            e.currentTarget.style.transform = 'translateY(-1px)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff6b6b';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.06)';
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Link 
                        to={`/more/${person.id}`} 
                        className="btn"
                        style={{
                          flex: "1",
                          marginRight: "1rem",
                          fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
                          whiteSpace: 'nowrap',
                          border: '1px solid #ff6b6b',
                          color: '#ff6b6b',
                          transition: 'all 0.3s ease',
                          backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#ff6b6b';
                        }}
                      >
                        View Profile
                      </Link>
                      <a 
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn"
                        style={{
                          backgroundColor: "#ff6b6b",
                          color: "#ffffff",
                          width: "48px",
                          height: "48px",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "all 0.3s ease",
                          flexShrink: 0
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = "#ff5252";
                          e.currentTarget.style.transform = "translateY(-2px)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = "#ff6b6b";
                          e.currentTarget.style.transform = "translateY(0)";
                        }}
                      >
                        <i className="bi bi-linkedin fs-5"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Memories Section */}
      <section className="py-5" style={{ backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa' }}>
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Memories</h2>
          <div className="row g-4">
            {memories.map((memory, index) => {
              const memoryId = `memory-${index}`;
              return (
                <div key={memoryId} className="col-md-4">
                  <div 
                    className="card h-100 border-0 shadow-lg position-relative" 
                    style={{ 
                      borderRadius: '15px',
                      overflow: 'visible',
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                      color: isDarkTheme ? '#ffffff' : '#000000',
                      zIndex: 1,
                      boxShadow: hoveredCard === memoryId ? 
                        `0 20px 25px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 107, 107, 0.2)` : 
                        '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                      background: hoveredCard === memoryId ? 
                        (isDarkTheme ? 
                          'linear-gradient(145deg, #2d2d2d, #2d2d2d) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box' : 
                          'linear-gradient(145deg, #ffffff, #ffffff) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box') :
                        (isDarkTheme ? '#2d2d2d' : '#ffffff'),
                      transform: hoveredCard === memoryId ? 
                        'translateY(-15px) scale(1.01) perspective(1000px) rotateX(2deg)' : 
                        'translateY(0) scale(1) perspective(1000px) rotateX(0)'
                    }}
                    onMouseEnter={() => setHoveredCard(memoryId)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === memoryId && (
                      <>
                        <span className="particle-1" style={{
                          position: 'absolute',
                          width: '8px',
                          height: '8px',
                          background: 'rgba(255, 107, 107, 0.7)',
                          borderRadius: '50%',
                          top: '20%',
                          left: '10%',
                          pointerEvents: 'none',
                          zIndex: -1,
                          boxShadow: '0 0 16px rgba(255, 107, 107, 0.7)',
                          animation: 'particleFadeCustom 2s infinite 0.2s'
                        }}></span>
                        <span className="particle-2" style={{
                          position: 'absolute',
                          width: '6px',
                          height: '6px',
                          background: 'rgba(255, 107, 107, 0.6)',
                          borderRadius: '50%',
                          top: '40%',
                          left: '80%',
                          pointerEvents: 'none',
                          zIndex: -1,
                          boxShadow: '0 0 12px rgba(255, 107, 107, 0.6)',
                          animation: 'particleFadeCustom 1.8s infinite 0.5s'
                        }}></span>
                      </>
                    )}
                    <img 
                      src={memory.image} 
                      alt={memory.title}
                      className="card-img-top"
                      style={{ 
                        borderRadius: '15px 15px 0 0',
                        height: '200px',
                        objectFit: 'cover',
                        width: '100%',
                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transform: hoveredCard === memoryId ? 'scale(1.05)' : 'scale(1)',
                        filter: hoveredCard === memoryId ? 'brightness(1.05)' : 'brightness(1)'
                      }}
                    />
                    <div className="card-body p-4">
                      <h5 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>{memory.title}</h5>
                      <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>{memory.description}</p>
                      <small style={{ color: isDarkTheme ? '#808080' : '#999999' }}>Date: {memory.date}</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Contributions</h2>
          <div className="row g-4">
            {contributions.map((contribution, index) => {
              const contributionId = `contribution-${index}`;
              return (
                <div key={contributionId} className="col-md-4">
                  <div 
                    className="card h-100 border-0 shadow-lg position-relative" 
                    style={{ 
                      borderRadius: '15px',
                      overflow: 'visible',
                      transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                      backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                      color: isDarkTheme ? '#ffffff' : '#000000',
                      zIndex: 1,
                      boxShadow: hoveredCard === contributionId ? 
                        `0 20px 25px rgba(0, 0, 0, 0.12), 0 0 20px rgba(255, 107, 107, 0.2)` : 
                        '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
                      background: hoveredCard === contributionId ? 
                        (isDarkTheme ? 
                          'linear-gradient(145deg, #2d2d2d, #2d2d2d) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box' : 
                          'linear-gradient(145deg, #ffffff, #ffffff) padding-box, linear-gradient(145deg, rgba(255,107,107,0.7), rgba(255,107,107,0.1)) border-box') :
                        (isDarkTheme ? '#2d2d2d' : '#ffffff'),
                      transform: hoveredCard === contributionId ? 
                        'translateY(-15px) scale(1.01) perspective(1000px) rotateX(2deg)' : 
                        'translateY(0) scale(1) perspective(1000px) rotateX(0)'
                    }}
                    onMouseEnter={() => setHoveredCard(contributionId)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {hoveredCard === contributionId && (
                      <>
                        <span className="particle-1" style={{
                          position: 'absolute',
                          width: '8px',
                          height: '8px',
                          background: 'rgba(255, 107, 107, 0.7)',
                          borderRadius: '50%',
                          top: '20%',
                          left: '10%',
                          pointerEvents: 'none',
                          zIndex: -1,
                          boxShadow: '0 0 16px rgba(255, 107, 107, 0.7)',
                          animation: 'particleFadeCustom 2s infinite 0.2s'
                        }}></span>
                        <span className="particle-2" style={{
                          position: 'absolute',
                          width: '6px',
                          height: '6px',
                          background: 'rgba(255, 107, 107, 0.6)',
                          borderRadius: '50%',
                          top: '40%',
                          left: '80%',
                          pointerEvents: 'none',
                          zIndex: -1,
                          boxShadow: '0 0 12px rgba(255, 107, 107, 0.6)',
                          animation: 'particleFadeCustom 1.8s infinite 0.5s'
                        }}></span>
                      </>
                    )}
                    <img 
                      src={contribution.image} 
                      alt={contribution.title}
                      className="card-img-top"
                      style={{ 
                        borderRadius: '15px 15px 0 0',
                        height: '200px',
                        objectFit: 'cover',
                        width: '100%',
                        transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        transform: hoveredCard === contributionId ? 'scale(1.05)' : 'scale(1)',
                        filter: hoveredCard === contributionId ? 'brightness(1.05)' : 'brightness(1)'
                      }}
                    />
                    <div className="card-body p-4">
                      <h5 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>{contribution.title}</h5>
                      <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>{contribution.description}</p>
                      <small style={{ color: isDarkTheme ? '#808080' : '#999999' }}>Date: {contribution.date}</small>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default More;