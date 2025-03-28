import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

// Add styles for dark theme inputs
const darkThemeStyles = `
  .dark-theme-input::placeholder {
    color: #888888 !important;
  }
  .dark-theme-input::-webkit-input-placeholder {
    color: #888888 !important;
  }
  .dark-theme-input::-moz-placeholder {
    color: #888888 !important;
  }
  .dark-theme-input:-ms-input-placeholder {
    color: #888888 !important;
  }
`;

const More = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % memories.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % memories.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + memories.length) % memories.length);
    setIsAutoPlaying(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const memories = [
    {
      title: 'Hackathon Win',
      description: 'Our team won first place in the annual hackathon competition.',
      date: 'January 20, 2025',
      image: '/class.jpg'
    },
    {
      title: 'Team Outing',
      description: 'Our team outing to the mountains was a great bonding experience.',
      date: 'March 15, 2025',
      image: '/class2.jpg'
    },
    {
      title: 'Project Launch',
      description: 'Celebrating the successful launch of our latest project.',
      date: 'February 10, 2025',
      image: '/class3.jpg'
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
    <>
      <style>{darkThemeStyles}</style>
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
            <h2 className="text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333' , fontSize: '2.5rem', fontWeight: 'bold' , marginBottom: '3rem'}}>Our Team</h2>
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

        {/* Modified Memories Section */}
        <section className="py-5" style={{ backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa' }}>
          <div className="container">
            <h2 className="text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '3rem'}}>Memories</h2>
            <div className="memories-slideshow" style={{ maxWidth: '1000px', margin: '0 auto' }}>
              <div className="slideshow-container" style={{ 
                height: '500px',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
              }}>
                {memories.map((memory, index) => (
                  <div 
                    key={`memory-${index}`}
                    className={`memory-slide ${index === currentSlide ? 'active' : ''}`}
                    style={{
                      transform: `translateX(${(index - currentSlide) * 100}%)`,
                      backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      transition: 'transform 0.5s ease-in-out'
                    }}
                  >
                    <div className="memory-content" style={{ height: '100%' }}>
                      <img 
                        src={memory.image} 
                        alt={memory.title}
                        className="memory-image"
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '15px'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="slideshow-controls">
                <button 
                  className="control-btn prev" 
                  onClick={prevSlide}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    color: '#333',
                    backdropFilter: 'blur(5px)',
                    border: 'none'
                  }}
                >
                  <i className="bi bi-chevron-left"></i>
                </button>
                <button 
                  className="control-btn next" 
                  onClick={nextSlide}
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    color: '#333',
                    backdropFilter: 'blur(5px)',
                    border: 'none'
                  }}
                >
                  <i className="bi bi-chevron-right"></i>
                </button>
              </div>
              <div className="slide-indicators">
                {memories.map((_, index) => (
                  <button
                    key={index}
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    style={{
                      backgroundColor: index === currentSlide 
                        ? '#ff6b6b' 
                        : isDarkTheme ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.2)',
                      backdropFilter: 'blur(5px)'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section className="py-5" style={{ 
          backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Decoration */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            bottom: '0',
            background: isDarkTheme 
              ? 'radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.1) 0%, transparent 50%)'
              : 'radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 107, 0.05) 0%, transparent 50%)',
            pointerEvents: 'none'
          }}></div>
          
          <div className="container">
            <h2 className="text-center" style={{ 
              color: isDarkTheme ? '#ffffff' : '#333333', 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              marginBottom: '3rem',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '1rem'
            }}>
              Contact Us
              <span style={{
                position: 'absolute',
                bottom: '0',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                background: 'linear-gradient(90deg, #ff6b6b, #ff5252)',
                borderRadius: '2px'
              }}></span>
            </h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div 
                  className="card border-0 shadow-lg" 
                  style={{ 
                    borderRadius: '20px',
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    color: isDarkTheme ? '#ffffff' : '#333333',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${isDarkTheme ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`
                  }}
                >
                  {/* Decorative Elements */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '5px',
                    background: 'linear-gradient(90deg, #ff6b6b, #ff5252)',
                    borderRadius: '20px 20px 0 0'
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    top: '20%',
                    right: '-50px',
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(255, 82, 82, 0.1))',
                    borderRadius: '50%',
                    transform: 'rotate(45deg)',
                    zIndex: 0
                  }}></div>
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '100px',
                    height: '100px',
                    background: 'linear-gradient(45deg, rgba(255, 107, 107, 0.1), rgba(255, 82, 82, 0.1))',
                    borderRadius: '50%',
                    transform: 'rotate(45deg)',
                    zIndex: 0
                  }}></div>

                  <div className="card-body p-5" style={{ position: 'relative', zIndex: 1 }}>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setSubmitStatus(null);

                      try {
                        const formData = new FormData(e.target);
                        const response = await fetch('https://formspree.io/f/xpzvjvjv', {
                          method: 'POST',
                          body: formData,
                          headers: {
                            'Accept': 'application/json'
                          }
                        });

                        if (response.ok) {
                          setSubmitStatus('success');
                          e.target.reset();
                        } else {
                          throw new Error('Failed to send message');
                        }
                      } catch (error) {
                        console.error('Error sending message:', error);
                        setSubmitStatus('error');
                      } finally {
                        setIsSubmitting(false);
                      }
                    }}>
                      <div className="mb-4">
                        <label htmlFor="name" className="form-label" style={{ 
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          fontWeight: '500',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <i className="bi bi-person-fill" style={{ color: '#ff6b6b' }}></i>
                          Name
                        </label>
                        <input 
                          type="text" 
                          className={`form-control ${isDarkTheme ? 'dark-theme-input' : ''}`}
                          id="name" 
                          name="name" 
                          required
                          placeholder="Enter your name"
                          style={{
                            backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            border: `2px solid ${isDarkTheme ? '#444' : '#ddd'}`,
                            color: isDarkTheme ? '#ffffff' : '#333333',
                            borderRadius: '10px',
                            padding: '0.8rem 1rem',
                            transition: 'all 0.3s ease',
                            fontSize: '1rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#ff6b6b';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.1)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd';
                            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="email" className="form-label" style={{ 
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          fontWeight: '500',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <i className="bi bi-envelope-fill" style={{ color: '#ff6b6b' }}></i>
                          Email
                        </label>
                        <input 
                          type="email" 
                          className={`form-control ${isDarkTheme ? 'dark-theme-input' : ''}`}
                          id="email" 
                          name="email" 
                          required
                          placeholder="Enter your email"
                          style={{
                            backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            border: `2px solid ${isDarkTheme ? '#444' : '#ddd'}`,
                            color: isDarkTheme ? '#ffffff' : '#333333',
                            borderRadius: '10px',
                            padding: '0.8rem 1rem',
                            transition: 'all 0.3s ease',
                            fontSize: '1rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#ff6b6b';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.1)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd';
                            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="subject" className="form-label" style={{ 
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          fontWeight: '500',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <i className="bi bi-chat-dots-fill" style={{ color: '#ff6b6b' }}></i>
                          Subject
                        </label>
                        <input 
                          type="text" 
                          className={`form-control ${isDarkTheme ? 'dark-theme-input' : ''}`}
                          id="subject" 
                          name="subject" 
                          required
                          placeholder="Enter message subject"
                          style={{
                            backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            border: `2px solid ${isDarkTheme ? '#444' : '#ddd'}`,
                            color: isDarkTheme ? '#ffffff' : '#333333',
                            borderRadius: '10px',
                            padding: '0.8rem 1rem',
                            transition: 'all 0.3s ease',
                            fontSize: '1rem',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#ff6b6b';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.1)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd';
                            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        />
                      </div>
                      <div className="mb-4">
                        <label htmlFor="message" className="form-label" style={{ 
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          fontWeight: '500',
                          marginBottom: '0.5rem',
                          fontSize: '0.95rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem'
                        }}>
                          <i className="bi bi-pencil-fill" style={{ color: '#ff6b6b' }}></i>
                          Message
                        </label>
                        <textarea 
                          className={`form-control ${isDarkTheme ? 'dark-theme-input' : ''}`}
                          id="message" 
                          name="message" 
                          rows="5" 
                          required
                          placeholder="Enter your message"
                          style={{
                            backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                            border: `2px solid ${isDarkTheme ? '#444' : '#ddd'}`,
                            color: isDarkTheme ? '#ffffff' : '#333333',
                            borderRadius: '10px',
                            padding: '0.8rem 1rem',
                            transition: 'all 0.3s ease',
                            fontSize: '1rem',
                            resize: 'vertical',
                            minHeight: '120px',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = '#ff6b6b';
                            e.target.style.boxShadow = '0 0 0 3px rgba(255, 107, 107, 0.1)';
                            e.target.style.transform = 'translateY(-1px)';
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = isDarkTheme ? '#444' : '#ddd';
                            e.target.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.05)';
                            e.target.style.transform = 'translateY(0)';
                          }}
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <div className="d-flex justify-content-center gap-3">
                          <button 
                            type="submit" 
                            className="btn btn-primary px-5 py-3"
                            disabled={isSubmitting}
                            style={{
                              backgroundColor: isSubmitting ? '#cccccc' : '#ff6b6b',
                              border: 'none',
                              borderRadius: '30px',
                              fontSize: '1.1rem',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              overflow: 'hidden',
                              padding: '0.8rem 2.5rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              boxShadow: '0 4px 6px rgba(255, 107, 107, 0.2)',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#ff5252';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 107, 107, 0.3)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#ff6b6b';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(255, 107, 107, 0.2)';
                              }
                            }}
                          >
                            <span style={{ position: 'relative', zIndex: 1 }}>
                              {isSubmitting ? 'Sending...' : 'Send Message'}
                            </span>
                            <i className={`bi ${isSubmitting ? 'bi-hourglass-split' : 'bi-send-fill'}`} style={{ position: 'relative', zIndex: 1 }}></i>
                            {!isSubmitting && (
                              <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)',
                                transform: 'translateX(-100%)',
                                transition: 'transform 0.6s ease'
                              }}></div>
                            )}
                          </button>
                          <button 
                            type="reset" 
                            className="btn btn-secondary px-5 py-3"
                            disabled={isSubmitting}
                            style={{
                              backgroundColor: isSubmitting ? '#cccccc' : '#6c757d',
                              border: 'none',
                              borderRadius: '30px',
                              fontSize: '1.1rem',
                              fontWeight: '500',
                              transition: 'all 0.3s ease',
                              position: 'relative',
                              overflow: 'hidden',
                              padding: '0.8rem 2.5rem',
                              display: 'inline-flex',
                              alignItems: 'center',
                              gap: '0.5rem',
                              boxShadow: '0 4px 6px rgba(108, 117, 125, 0.2)',
                              cursor: isSubmitting ? 'not-allowed' : 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#5a6268';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(108, 117, 125, 0.3)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!isSubmitting) {
                                e.currentTarget.style.backgroundColor = '#6c757d';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(108, 117, 125, 0.2)';
                              }
                            }}
                          >
                            <span style={{ position: 'relative', zIndex: 1 }}>
                              Reset
                            </span>
                            <i className="bi bi-arrow-counterclockwise" style={{ position: 'relative', zIndex: 1 }}></i>
                          </button>
                        </div>
                        {submitStatus === 'success' && (
                          <div className="mt-3" style={{ color: '#28a745' }}>
                            Message sent successfully!
                          </div>
                        )}
                        {submitStatus === 'error' && (
                          <div className="mt-3" style={{ color: '#dc3545' }}>
                            Failed to send message. Please try again.
                          </div>
                        )}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default More;