import React, { useState, useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Mentors = () => {
  const { isDarkTheme } = useTheme();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Sample mentor data
  const mentors = [
    {
      id: 1,
      name: 'Kanchan Kumari',
      role: 'Program Manager',
      image: './images/kanchan2.jpg',
      bio: 'Driving Learning & Delivering Excellence | Program Manager at Kalvium.',
      specialties: ['Patience','Confidence','Communication'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/kanchan-kumari-151404250/'
    },
    {
      id: 2,
      name: 'Khyati Sadana',
      role: 'Program Manager',
      image: 'public/kyy.jpg',
      bio: 'Driving Learning & Delivering Excellence | Program Manager at Kalvium.',
      specialties: ['Patience','Confidence','Communication'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/khyati-kumari-b70000325/'
    },
    {
      id: 3,
      name: 'Aparna Tiwari',
      role: 'Mentor',
      image: './images/aparna2.jpg',
      bio: 'Dynamic Full Stack Developer (MERN) | Proficient in JavaScript | React.js | Node.js | MongoDB | HTML | CSS |.',
      specialties: ['MERN', 'HTML', 'Node.js'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/aparna-tiwari-642038274/'
    },
    {
      id: 4,
      name: 'Junaid Khan',
      role: 'Mentor',
      image: './images/junaid.jpg',
      bio: 'Full Stack Web Developer(MERN) | JavaScript | Typescript | React JS | Redux | Node JS | Express JS | MongoDB | MySQL | Java',
      specialties: ['MERN', 'JavaScript', 'Typescript'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/junaidify-khan/'
    },
    {
      id: 5,
      name: 'Rohit Gupta',
      role: 'Mentor',
      image: './rohit2.jpg',
      bio: 'Full Stack Developer | Skilled in HTML | CSS | JavaScript | Python | React.js | Node.js | Mongo DB.',
      specialties: ['React', 'Python', 'Performance Optimization'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/rohit-gupta-b70000325/'
    },
    {
      id: 6,
      name: 'Manav Verma',
      role: 'Mentor',
      image: './images/manav.jpeg',
      bio: 'Full Stack Web Developer  | Skilled in HTML | CSS | JavaScript | Python | React.js | Node.js | Mongo DB',
      specialties: ['React', 'Python', 'Performance Optimization'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/manav-verma-414927188/'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkTheme ? ' text-white' : ' text-dark'}`}>
      <style>
        {`
          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
            will-change: opacity, transform;
          }
          .fade-in.loaded {
            opacity: 1;
            transform: translateY(0);
          }
          .fade-in-delay-1 {
            transition-delay: 0.3s;
          }
          .fade-in-delay-2 {
            transition-delay: 0.5s;
          }
          .fade-in-delay-3 {
            transition-delay: 0.7s;
          }
          .card {
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .card:hover {
            transform: translateY(-8px);
          }
          .card img {
            transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .card:hover img {
            transform: scale(1.08);
          }
          .btn {
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          }
          .btn:hover {
            transform: translateY(-3px);
          }
        `}
      </style>

      {/* Header */}
      <section className={`py-20 fade-in ${isLoaded ? 'loaded' : ''} ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'} `} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="display-4 fw-bold mb-4" 
                stylzzzze={{ color: '#ffffff' }}>Our Mentors</h1>
            <p className="lead" style={{ color: '#ffffff' }}>
              Meet the industry experts who guide and support Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal', color: '#ffffff'}}>79</span> in our journey to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Benefits */}
      <section className={`py-16 fade-in fade-in-delay-1 ${isLoaded ? 'loaded' : ''} ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={` font-bold mb-5 ${isDarkTheme ? 'text-white' : 'text-black'}` } style={{ fontSize : '2.5rem' , marginBottom : '2.5rem' , fontWeight : 'bold'  , marginTop : '1rem' }}>Benefits of Our Mentorship</h2>
            <div className="row g-4">
              {[
                {
                  title: "Expert Guidance",
                  description: "Learn from industry professionals with years of practical experience in their respective fields.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13h-5a.5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm10.356 7.433-1.429 1.428a.5.5 0 0 1-.868-.434l.27-1.695c.02-.124.06-.234.114-.332a.615.615 0 0 1 .098-.127l.09-.08 1.177-1.177a.5.5 0 0 1 .708.707L12.356 13.433zm-9.847-.008 1.68-1.668a.5.5 0 0 1 .705.707l-1.413 1.406-.236.223a.5.5 0 0 1-.713-.699l.092-.092-.024-.03z"/>
                        </svg>
                },
                {
                  title: "Personalized Support",
                  description: "Receive tailored feedback and advice specific to your learning journey and career aspirations.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                        </svg>
                },
                {
                  title: "Industry Connections",
                  description: "Build valuable relationships and networking opportunities with professionals in the tech industry.",
                  icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6h-1A1.5 1.5 0 0 1 6 4.5v-1zM7.5 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"/>
                          <path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h3A1.5 1.5 0 0 1 7 1.5v1A1.5 1.5 0 0 1 5.5 4h-3A1.5 1.5 0 0 1 1 2.5v-1zm2.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 11.5 0h3A1.5 1.5 0 0 1 16 1.5v1A1.5 1.5 0 0 1 14.5 4h-3A1.5 1.5 0 0 1 10 2.5v-1zm2.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3zM1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8zm0 5.5A1.5 1.5 0 0 1 2.5 12h3A1.5 1.5 0 0 1 7 13.5v1A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5v-1zm2.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 11.5 12h3A1.5 1.5 0 0 1 16 13.5v1a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 10 14.5v-1zm2.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-3z"/>
                        </svg>
                }
              ].map((benefit, index) => (
                <div key={index} className={`col-md-4 fade-in fade-in-delay-${index + 1} ${isLoaded ? 'loaded' : ''}`}>
                  <div className="card border-0 shadow-sm h-100" style={{ 
                    borderRadius: '1rem', 
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    color: isDarkTheme ? '#e0e0e0' : '#333333',
                    boxShadow: isDarkTheme 
                      ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
                      : '0 10px 30px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease',
                    border: isDarkTheme 
                      ? '1px solid rgba(255, 255, 255, 0.05)' 
                      : '1px solid rgba(0, 0, 0, 0.05)'
                  }}>
                    <div className="card-body text-center" >
                      <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                        {benefit.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-3" style={{ 
                        color: isDarkTheme ? '#ffffff' : '#333333' 
                      }}>{benefit.title}</h3>
                      <p style={{ 
                        color: isDarkTheme ? '#d0d0d0' : '#666666' 
                      }}>{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Kalvium Mentors */}
      <section className={`py-20 fade-in fade-in-delay-2 ${isLoaded ? 'loaded' : ''} ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-4 text-center ${isDarkTheme ? 'text-white' : 'text-black'}`} style={{ fontWeight: 'bold', fontSize: '2.5rem', marginBottom: '4rem' }}>Our Mentors</h2>
          
          <div className="row g-5" style={{ marginBottom: '5rem', rowGap: '5rem !important' }}>
            {mentors.map((mentor, index) => (
              <div key={mentor.id} className={`col-sm-12 col-md-6 col-lg-6 fade-in fade-in-delay-${(index % 2) + 1} ${isLoaded ? 'loaded' : ''}`}>
                <div className="card border-0 shadow h-100" style={{ 
                  borderRadius: '1.5rem', 
                  overflow: 'hidden',
                  backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                  color: isDarkTheme ? '#e0e0e0' : '#333333',
                  boxShadow: isDarkTheme 
                    ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  border: isDarkTheme 
                    ? '1px solid rgba(255, 255, 255, 0.05)' 
                    : '1px solid rgba(0, 0, 0, 0.05)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = isDarkTheme 
                    ? '0 15px 40px rgba(0, 0, 0, 0.4)' 
                    : '0 15px 40px rgba(0, 0, 0, 0.15)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = isDarkTheme 
                    ? '0 10px 30px rgba(0, 0, 0, 0.3)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.1)';
                }}>
                  <div className="row g-0 h-100">
                    <div className="col-4 col-md-4 position-relative" style={{ minHeight: '100%' }}>
                      <img 
                        src={mentor.image} 
                        className="card-img-zoom"
                        alt={mentor.name}
                        style={{ 
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: '0',
                          left: '0',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    </div>
                    <div className="col-8 col-md-8">
                      <div className="card-body" style={{ padding: '1.5rem' }}>
                        <h3 className="card-title h4 fw-bold" style={{ 
                          fontSize: 'clamp(1.2rem, 4vw, 1.6rem)',
                          color: isDarkTheme ? '#ffffff' : '#1a1a1a',
                          marginBottom: '0.75rem',
                          lineHeight: '1.3'
                        }}>{mentor.name}</h3>
                        <p className="text-danger mb-3" style={{ 
                          fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                          fontWeight: '500',
                          color: isDarkTheme ? '#ffffff' : '#ff4444'
                        }}>{mentor.role}</p>
                        <p className="mb-3" style={{ 
                          fontSize: 'clamp(0.85rem, 2.5vw, 0.95rem)',
                          color: isDarkTheme ? '#b0b0b0' : '#666666',
                          fontWeight: '500'
                        }}><small>{mentor.company}</small></p>
                        <p className="mb-4" style={{ 
                          fontSize: 'clamp(0.85rem, 3vw, 1rem)',
                          color: isDarkTheme ? '#ffffff' : '#4a4a4a',
                          lineHeight: '1.6'
                        }}>{mentor.bio}</p>
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2" style={{ 
                            fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                            color: isDarkTheme ? '#ffffff' : '#1a1a1a',
                            fontWeight: '600'
                          }}>Specialties:</h4>
                          <div className="d-flex flex-wrap gap-2">
                            {mentor.specialties.map((specialty, index) => (
                              <span 
                                key={index} 
                                className="badge" 
                                style={{ 
                                  fontSize: 'clamp(0.75rem, 2.5vw, 0.85rem)',
                                  color: isDarkTheme ? '#ffffff' : '#1a1a1a',
                                  backgroundColor: isDarkTheme ? '#404040' : '#f0f0f0',
                                  padding: '0.5rem 1rem',
                                  borderRadius: '2rem',
                                  fontWeight: '500',
                                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                  cursor: 'pointer',
                                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                  border: '1px solid transparent'
                                }}
                                onMouseOver={(e) => {
                                  e.currentTarget.style.transform = 'translateY(-3px)';
                                  e.currentTarget.style.boxShadow = isDarkTheme 
                                    ? '0 4px 12px rgba(255, 68, 68, 0.4)' 
                                    : '0 4px 12px rgba(255, 68, 68, 0.2)';
                                  e.currentTarget.style.backgroundColor = isDarkTheme ? '#505050' : '#f8f8f8';
                                  e.currentTarget.style.border = isDarkTheme 
                                    ? '1px solid #ff4444'
                                    : '1px solid rgba(255, 68, 68, 0.2)';
                                }}
                                onMouseOut={(e) => {
                                  e.currentTarget.style.transform = 'translateY(0)';
                                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                                  e.currentTarget.style.backgroundColor = isDarkTheme ? '#404040' : '#f0f0f0';
                                  e.currentTarget.style.border = '1px solid transparent';
                                }}
                              >
                                {specialty}
                              </span>
                            ))}
                          </div>
                        </div>
                        <a 
                          href={mentor.linkedin} 
                          className="btn btn-sm" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: isDarkTheme ? '#ff4444' : '#0A66C2',
                            color: '#ffffff',
                            borderRadius: '2rem',
                            padding: '0.5rem 1.25rem',
                            fontSize: '0.85rem',
                            fontWeight: '600',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                            border: 'none'
                          }}
                          onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-3px)';
                            e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
                          }}
                          onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                          }}
                        >
                          <i className="bi bi-linkedin me-2"></i>
                          Connect
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mentors;