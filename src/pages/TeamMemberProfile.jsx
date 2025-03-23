import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const TeamMemberProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isDarkTheme } = useTheme();

  // Team members data
  const people = [
    {
      id: 1,
      name: "Priyanshu Jindal",
      role: "Team Lead",
      image: "/images/priyanshu.jpg",
      description: "Experienced team lead with expertise in project management and technical leadership",
      experiences: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      skills: ["Project Management", "Technical Leadership", "Team Building"],
      education: "B.tech in Computer Science, Chitkara University",
      linkedin: "https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/priyanshu"
    },
    {
      id: 2,
      name: "Raksham Sharma",
      role: "Frontend Developer",
      image: "/images/raksham.jpg",
      description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces",
      experiences: [
        "Created responsive web applications",
        "Implemented UI/UX designs",
        "Built reusable components"
      ],
      skills: ["React", "JavaScript", "CSS", "Tailwind CSS", "UI/UX"],
      education: "Bachelor's in Computer Applications, Chitkara University",
      linkedin: "https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      github: "https://github.com/raksham"
    },
    {
      id: 3,
      name: "Rajatvir Pandhi",
      role: "Backend Developer",
      image: "/images/rajat3.jpg",
      description: "Backend expert focused on scalable server architecture and database optimization",
      experiences: [
        "Designed RESTful APIs",
        "Managed database systems",
        "Implemented authentication systems"
      ],
      skills: ["Python", "Database Design", "API Development", "Node.js", "MongoDB"],
      education: "Bachelor's in Computer Science, Chitkara University",
      linkedin: "http://www.linkedin.com/in/rajatvir-pandhi-444585357",
      github: "https://github.com/rajatvir"
    },
    {
      id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/images/riya.jpg",
      description: "Creating intuitive, user-centered designs that combine functionality and visual appeal",
      experiences: [
        "Designed user interfaces",
        "Created wireframes and prototypes",
        "Conducted user research"
      ],
      skills: ["UI Design", "User Research", "Prototyping", "Figma", "Adobe XD"],
      education: "Bachelor's in Design, Chitkara University",
      linkedin: "https://www.linkedin.com/in/sarah-wilson",
      github: "https://github.com/riya"
    },
    {
      id: 5,
      name: "Rehat Singh",
      role: "UI/UX Designer",
      image: "/images/rehat.jpg",
      description: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless experience",
      experiences: [
        "Created user journeys and flows",
        "Designed mobile interfaces",
        "Conducted usability testing"
      ],
      skills: ["UI/UX Design", "User Research", "Prototyping", "Sketch", "InVision"],
      education: "Bachelor's in Multimedia Design, Chitkara University",
      linkedin: "https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      github: "https://github.com/rehat"
    }
  ];

  // Find the team member by ID
  const member = people.find(person => person.id === parseInt(id));

  // If member not found, redirect to teams page
  if (!member) {
    setTimeout(() => {
      navigate('/teams');
    }, 2000);
    return (
      <div className="container py-5 text-center">
        <h2>Team member not found</h2>
        <p>Redirecting to team page...</p>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: '#1e2124', 
      color: 'white',
      minHeight: '100vh'
    }}>
      {/* Header Section */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div style={{ 
              width: '280px',
              height: '280px',
              margin: '0 auto',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '4px solid #ff6b6b',
              maxWidth: '100%'
            }}
            className="mx-auto"
            >
              <img 
                src={member.image} 
                alt={member.name}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </div>
          
          <div className="col-md-8">
            <h1 style={{ 
              fontSize: 'clamp(2rem, 5vw, 3rem)', 
              fontWeight: '700',
              marginBottom: '0.5rem'
            }}>{member.name}</h1>
            
            <p style={{ 
              color: '#ff6b6b', 
              fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
              marginBottom: '1.5rem'
            }}>{member.role}</p>
            
            <p style={{ 
              fontSize: '1.1rem',
              marginBottom: '2rem'
            }}>{member.description}</p>
            
            <button 
              className="btn"
              onClick={() => navigate('/teams')}
              style={{
                border: '1px solid white',
                color: 'white',
                padding: '0.5rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <i className="bi bi-arrow-left"></i> Back to Team
            </button>
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 mb-5 mb-md-0">
            <h2 style={{ 
              fontSize: 'clamp(1.5rem, 4vw, 2rem)', 
              marginBottom: '2rem'
            }}>Experience</h2>
            
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {member.experiences.map((exp, index) => (
                <li 
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    marginBottom: '1rem',
                  }}
                >
                  <div style={{
                    backgroundColor: '#ff6b6b',
                    color: 'white',
                    padding: '0.5rem',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '1rem',
                    flexShrink: 0,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.06)',
                    transition: 'all 0.2s ease',
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
                    <i className="bi bi-check"></i>
                  </div>
                  <span style={{
                    fontSize: 'clamp(0.9rem, 3vw, 1.1rem)',
                    fontWeight: '400',
                    letterSpacing: '0.2px',
                    lineHeight: '1.5',
                    padding: '0.25rem 0'
                  }}>{exp}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-md-6">
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '1rem',
              padding: '1.5rem',
              color: 'black',
              height: '100%'
            }}>
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', 
                marginBottom: '1.5rem'
              }}>Skills</h2>
              
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginBottom: '2rem'
              }}>
                {member.skills.map((skill, index) => (
                  <span 
                    key={index}
                    style={{
                      backgroundColor: '#ff7f50',
                      color: 'white',
                      padding: '0.4rem 1rem',
                      borderRadius: '2rem',
                      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)',
                      marginBottom: '0.25rem'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <h2 style={{ 
                fontSize: 'clamp(1.5rem, 4vw, 1.75rem)', 
                marginBottom: '1rem'
              }}>Education</h2>
              
              <p style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>{member.education}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMemberProfile; 