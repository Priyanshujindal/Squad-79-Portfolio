import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Teams = () => {
  const { isDarkTheme } = useTheme();
  const people = [
    {
      id: 1,
      name: "Priyanshu Jindal",
      role: "Team Lead",
      image: "/images/priyanshu.jpg",
      description: "Experienced team lead with expertise in project management and technical leadership.",
      skills: ["Project Management", "Technical Leadership", "Team Building"],
      linkedin: "https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 2,
      name: "Raksham Sharma",
      role: "Frontend Developer",
      image: "/images/raksham.jpg",
      description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces.",
      skills: ["React", "JavaScript", "CSS", "Tailwind CSS", 'react'],
      linkedin: "https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    },
    {
      id: 3,
      name: "Rajatvir Pandhi",
      role: "Backend Developer",
      image: "/images/rajat3.jpg",
      description: "Backend expert focused on scalable server architecture and database optimization.",
      skills: ["Python", "Database Design"],
      linkedin: "http://www.linkedin.com/in/rajatvir-pandhi-444585357"
    },
    {
      id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/images/riya.jpg",
      description: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
      skills: ["UI Design", "User Research", "Prototyping"],
      linkedin: "https://www.linkedin.com/in/sarah-wilson"
    },
    {
      id: 5,
      name: "Rehat Singh",
      role: "UI/UX Designer",
      image: "/images/rehat.jpg",
      description: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
      skills: ["UI/UX Design", "User Research", "Prototyping"],
      linkedin: "https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className={`text-white py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'} `} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 
                className="display-4 fw-bold mb-4" 
                style={{ color: '#ffffff' }}
              >
                Meet Our Team
              </h1>
              <p className="lead">Our team excels through collaboration, combining diverse skills to solve challenges and achieve goals together</p>
            </div>
          </div>
        </div>
      </section>

      

      {/* Team Members */}
      <section className={`py-5`}>
        <div className="container">
          <div className="row g-4">
            {people.map(person => (
              <div key={person.id} className="col-sm-12 col-md-6 col-lg-4">
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                  <div className="img-container">
                    <img 
                      src={person.image} 
                      className="card-img-top card-img-zoom" 
                      alt={person.name}
                      width="300"
                      height="300"
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "300px"
                      }}
                    />
                  </div>
                  <div className="card-body">
                    <h3 className="h4 mb-2" style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>{person.name}</h3>
                    <p className="text-danger mb-3" style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>{person.role}</p>
                    <p className="text-muted mb-4" style={{ fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>{person.description}</p>
                    
                    <h4 className="h5 mb-3" style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)' }}>Skills</h4>
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
                        to={`/teams/${person.id}`} 
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
    </div>
  );
};

export default Teams;