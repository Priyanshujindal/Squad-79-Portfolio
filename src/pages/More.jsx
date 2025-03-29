import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useForm, ValidationError } from '@formspree/react';

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
  const [state, handleSubmit] = useForm("mgvalkyg");

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
      image: '/class4.jpg'
    },
    {
      title: 'Team Celebration',
      description: 'Our team celebrating a successful project completion.',
      date: 'March 25, 2025',
      image: '/class6.jpg'
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
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.1); opacity: 0.8; }
            100% { transform: scale(1); opacity: 0.5; }
          }

          @keyframes shine {
            0% { background-position: -200% center; }
            100% { background-position: 200% center; }
          }

          @keyframes gradientFlow {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          @keyframes cardHover {
            0% { transform: translateY(0) scale(1); }
            50% { transform: translateY(-10px) scale(1.02); }
            100% { transform: translateY(0) scale(1); }
          }

          @keyframes glow {
            0% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.5); }
            50% { box-shadow: 0 0 20px rgba(255, 107, 107, 0.8); }
            100% { box-shadow: 0 0 5px rgba(255, 107, 107, 0.5); }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes subtleFloat {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }

          .section-title {
            position: relative;
            display: inline-block;
            font-size: 2.5rem;
            font-weight: 700;
            color: #ff6b6b;
            margin-bottom: 3rem;
            padding-bottom: 1rem;
            animation: fadeIn 1s ease-out;
          }

          .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 3px;
            background: linear-gradient(90deg, #ff6b6b, #ff8e8e);
            background-size: 200% 100%;
            animation: gradientFlow 3s linear infinite;
          }

          .dark-theme .section-title {
            color: #ff8e8e;
          }

          .hero-title {
            font-size: 3.5rem;
            font-weight: 700;
            color: #ffffff;
            margin-bottom: 1.5rem;
            animation: fadeIn 1s ease-out;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .hero-subtitle {
            font-size: 1.25rem;
            color: rgba(255,255,255,0.9);
            animation: fadeIn 1s ease-out 0.3s backwards;
            max-width: 600px;
            margin: 0 auto;
          }

          .card-title {
            font-size: clamp(1.25rem, 4vw, 1.5rem);
            font-weight: 600;
            color: #ff6b6b;
            margin-bottom: 1rem;
            letter-spacing: 0.5px;
          }

          .dark-theme .card-title {
            color: #ff8e8e;
          }

          .skills-title {
            font-size: clamp(1rem, 3vw, 1.25rem);
            font-weight: 600;
            color: #ff6b6b;
            margin-bottom: 1rem;
          }

          .dark-theme .skills-title {
            color: #ff8e8e;
          }

          .hero-section {
            position: relative;
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            padding: 6rem 0;
            overflow: hidden;
          }

          .hero-section::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0));
            transform: translateX(-100%);
            animation: shine 8s infinite;
          }

          .decorative-circle {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            animation: subtleFloat 4s infinite ease-in-out;
          }

          .dark-theme .decorative-circle {
            background: rgba(255, 255, 255, 0.1);
          }

          .decorative-circle:nth-child(1) {
            width: 250px;
            height: 250px;
            top: -50px;
            right: -50px;
            animation-delay: 0s;
          }

          .decorative-circle:nth-child(2) {
            width: 180px;
            height: 180px;
            bottom: -30px;
            left: -30px;
            animation-delay: 1s;
          }

          .decorative-circle:nth-child(3) {
            width: 150px;
            height: 150px;
            top: 50%;
            right: 15%;
            animation-delay: 2s;
          }

          .decorative-circle:nth-child(4) {
            width: 250px;
            height: 250px;
            top: 20%;
            left: 15%;
            animation-delay: 1.5s;
          }

          .decorative-circle:nth-child(5) {
            width: 180px;
            height: 180px;
            bottom: 20%;
            right: 20%;
            animation-delay: 2.5s;
          }

          .decorative-circle:nth-child(6) {
            width: 120px;
            height: 120px;
            top: 70%;
            left: 25%;
            animation-delay: 3s;
          }

          .team-card {
            position: relative;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
          }

          .team-card:hover {
            transform: translateY(-8px) scale(1.02);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            border-color: rgba(255, 107, 107, 0.5);
            background: rgba(255, 255, 255, 0.15);
          }

          .img-container {
            overflow: hidden;
            border-radius: 1rem 1rem 0 0;
            position: relative;
          }

          .img-container::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%);
            z-index: 1;
          }

          .card-img-top {
            objectFit: "cover";
            width: "100%";
            height: "300px";
            transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .card-img-top:hover {
            transform: scale(1.08);
          }

          .card-body {
            padding: 2rem;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
          }

          .role-badge {
            display: inline-block;
            padding: 0.5rem 1.2rem;
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            color: white;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 600;
            margin-bottom: 1.5rem;
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
            letter-spacing: 0.5px;
            text-transform: uppercase;
          }

          .skill-badge {
            background: linear-gradient(135deg, #ff6b6b, #ff8e8e);
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 20px;
            font-size: 0.85rem;
            font-weight: 500;
            margin: 0.3rem;
            display: inline-block;
            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
            letter-spacing: 0.3px;
          }

          .skill-badge:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
          }

          .memory-slide {
            transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .memory-slide.active {
            transform: scale(1.02);
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          }

          .memory-image {
            transition: all 0.5s ease;
          }

          .memory-slide:hover .memory-image {
            transform: scale(1.05);
          }

          .contact-form {
            position: relative;
            transition: all 0.3s ease;
          }

          .contact-form:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
          }

          .form-control {
            transition: all 0.3s ease;
          }

          .form-control:focus {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(255, 107, 107, 0.2);
          }

          .btn-submit {
            position: relative;
            transition: all 0.3s ease;
          }

          .btn-submit::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
          }

          .btn-submit:hover::before {
            left: 100%;
          }

          .floating-element {
            animation: float 3s infinite ease-in-out;
          }

          .glow-effect {
            animation: glow 2s infinite;
          }

          .particle {
            position: absolute;
            pointer-events: none;
            z-index: 0;
            animation: particleFloat 3s infinite;
          }

          @keyframes particleFloat {
            0% { transform: translateY(0) scale(1); opacity: 0; }
            20% { opacity: 1; }
            100% { transform: translateY(-100px) scale(0); opacity: 0; }
          }
        `}
      </style>
      <div>
        {/* Hero Section */}
        <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
          <div className="decorative-circle"></div>
          <div className="decorative-circle"></div>
          <div className="decorative-circle"></div>
          
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h1 className="hero-title">More</h1>
                <p className="hero-subtitle">Explore our team's journey, memories, and contributions</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-5">
          <div className="container">
            <h2 className="section-title text-center">Our Team</h2>
            <div className="row g-4">
              {[
                {
                  id: 1,
                  name: "Priyanshu Jindal",
                  role: "Team Lead",
                  image: "/priyanshu.jpg",
                  description: "Experienced team lead with expertise in project management and technical leadership.",
                  skills: ['React', 'JavaScript', 'CSS', 'Bootstrap','SQL' , 'Python' , 'Java'],
                  linkedin: "https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                  id: 2,
                  name: "Raksham Sharma",
                  role: "Team Member",
                  image: "/raksham.jpg",
                  description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces.",
                  skills: ["React", "JavaScript", "CSS", "Node.js", 'Express', 'Bootstrap'],
                  linkedin: "https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                  id: 3,
                  name: "Rajatvir Pandhi",
                  role: "Team Member",
                  image: "/rajat3.jpg",
                  description: "Crafting seamless user experiences with clean code and a passion for pixel-perfect precision.",
                  skills: ["Python", "Database Design", 'SQL' , 'HTML' , 'CSS' , 'JavaScript'],
                  linkedin: "http://www.linkedin.com/in/rajatvir-pandhi-444585357"
                },
                {
                  id: 4,
                  name: "Riya Garg",
                  role: "Team Member",
                  image: "/riya.jpg",
                  description: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
                  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SQL' , 'Python' ],
                  linkedin: "https://www.linkedin.com/in/riya-garg-98a09a334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                },
                {
                  id: 5,
                  name: "Rehat Singh",
                  role: "Team Member",
                  image: "/rehat.jpg",
                  description: "Dedicated to fostering collaboration, streamlining workflows, and ensuring every team member shines together.",
                  skills: ['HTML', 'CSS', 'JavaScript', 'React', 'SQL' , 'Python' ],
                  linkedin: "https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                }
              ].map(person => (
                <div key={person.id} className="col-sm-12 col-md-6 col-lg-4">
                  <div 
                    className="card h-100 border-0 shadow-sm position-relative team-card" 
                    style={{ 
                      borderRadius: '1rem', 
                      overflow: 'visible', 
                      backgroundColor: isDarkTheme ? 'rgba(45, 45, 45, 0.1)' : 'rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      backdropFilter: 'blur(10px)',
                      transform: 'translateY(0)',
                      zIndex: 1
                    }}
                    onMouseEnter={() => setHoveredCard(person.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="img-container" style={{ 
                      overflow: 'hidden', 
                      borderRadius: '1rem 1rem 0 0',
                      position: 'relative'
                    }}>
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
                          transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                          transform: hoveredCard === person.id ? 'scale(1.08)' : 'scale(1)',
                          filter: 'brightness(1) contrast(1)'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.2) 100%)',
                        zIndex: 1
                      }}></div>
                    </div>
                    <div className="card-body" style={{ 
                      backgroundColor: isDarkTheme ? 'rgba(45, 45, 45, 0.05)' : 'rgba(255, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                      padding: '2rem'
                    }}>
                      <h3 className="h4 mb-2" style={{ 
                        fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                        color: isDarkTheme ? '#ffffff' : '#333333',
                        fontWeight: '600',
                        letterSpacing: '0.5px'
                      }}>{person.name}</h3>
                      <div className="role-badge" style={{
                        display: 'inline-block',
                        padding: '0.5rem 1.2rem',
                        background: 'linear-gradient(135deg, #ff6b6b, #ff8e8e)',
                        color: 'white',
                        borderRadius: '25px',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '1.5rem',
                        boxShadow: '0 4px 15px rgba(255, 107, 107, 0.3)',
                        letterSpacing: '0.5px',
                        textTransform: 'uppercase'
                      }}>{person.role}</div>
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
            <h2 className="section-title text-center">Memories</h2>
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
        <section className="py-5" style={{ backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa' }}>
          <div className="container">
            <h2 className="section-title text-center">Contact Us</h2>
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div 
                  className="card border-0 shadow-lg contact-form" 
                  style={{ 
                    borderRadius: '20px',
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    color: isDarkTheme ? '#ffffff' : '#333333',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div className="card-body p-5" style={{ position: 'relative', zIndex: 1 }}>
                    <form onSubmit={async (e) => {
                      e.preventDefault();
                      setIsSubmitting(true);
                      setSubmitStatus(null);

                      try {
                        const formData = new FormData(e.target);
                        formData.append('_replyto', 'rakshamshar@gmail.com');
                        const response = await fetch('https://formspree.io/f/mgvalkyg', {
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
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
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
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
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
                        <ValidationError prefix="Subject" field="subject" errors={state.errors} />
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
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                      </div>
                      <div className="text-center">
                        <div className="d-flex justify-content-center gap-3">
                          <button 
                            type="submit" 
                            className="btn btn-primary px-5 py-3 btn-submit"
                            disabled={state.submitting}
                            style={{
                              backgroundColor: state.submitting ? '#cccccc' : '#ff6b6b',
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
                              cursor: state.submitting ? 'not-allowed' : 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              if (!state.submitting) {
                                e.currentTarget.style.backgroundColor = '#ff5252';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(255, 107, 107, 0.3)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!state.submitting) {
                                e.currentTarget.style.backgroundColor = '#ff6b6b';
                                e.currentTarget.style.transform = 'translateY(0)';
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(255, 107, 107, 0.2)';
                              }
                            }}
                          >
                            <span style={{ position: 'relative', zIndex: 1 }}>
                              {state.submitting ? 'Sending...' : 'Send Message'}
                            </span>
                            <i className={`bi ${state.submitting ? 'bi-hourglass-split' : 'bi-send-fill'}`} style={{ position: 'relative', zIndex: 1 }}></i>
                            {!state.submitting && (
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
                            disabled={state.submitting}
                            style={{
                              backgroundColor: state.submitting ? '#cccccc' : '#6c757d',
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
                              cursor: state.submitting ? 'not-allowed' : 'pointer'
                            }}
                            onMouseEnter={(e) => {
                              if (!state.submitting) {
                                e.currentTarget.style.backgroundColor = '#5a6268';
                                e.currentTarget.style.transform = 'translateY(-2px)';
                                e.currentTarget.style.boxShadow = '0 6px 12px rgba(108, 117, 125, 0.3)';
                              }
                            }}
                            onMouseLeave={(e) => {
                              if (!state.submitting) {
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
                            Message sent successfully! We'll get back to you soon.
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