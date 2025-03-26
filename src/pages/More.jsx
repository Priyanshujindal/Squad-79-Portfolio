import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { Link } from 'react-router-dom';
import '../styles/fire-animation.css';

const More = () => {
  const { isDarkTheme } = useContext(ThemeContext);

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
                <div className={`card h-100 shadow-sm team-card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                  {/* Fire animation element */}
                  <div className="fire-animation">
                    <div className="flame flame-1"></div>
                    <div className="flame flame-2"></div>
                    <div className="flame flame-3"></div>
                    <div className="flame flame-4"></div>
                    <div className="flame flame-5"></div>
                    <div className="flame flame-6"></div>
                    <div className="flame flame-7"></div>
                  </div>

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
                    <h3 className="h4 mb-2" style={{ 
                      fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
                      color: isDarkTheme ? '#ffffff' : '#333333'
                    }}>{person.name}</h3>
                    <p className="text-danger mb-3" style={{ fontSize: 'clamp(0.9rem, 3vw, 1rem)' }}>{person.role}</p>
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
                          className="skill-tag"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                      <Link 
                        to={`/more/${person.id}`} 
                        className="btn profile-btn"
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
                      >
                        View Profile
                      </Link>
                      <a 
                        href={person.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn linkedin-btn"
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
            {memories.map((memory, index) => (
              <div key={index} className="col-md-4">
                <div className={`card h-100 border-0 shadow-lg memory-card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                  <img 
                    src={memory.image} 
                    alt={memory.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>{memory.title}</h5>
                    <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>{memory.description}</p>
                    <small style={{ color: isDarkTheme ? '#808080' : '#999999' }}>Date: {memory.date}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributions Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center mb-5" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>Contributions</h2>
          <div className="row g-4">
            {contributions.map((contribution, index) => (
              <div key={index} className="col-md-4">
                <div className={`card h-100 border-0 shadow-lg contribution-card ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
                  <img 
                    src={contribution.image} 
                    alt={contribution.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="card-body p-4">
                    <h5 className="mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>{contribution.title}</h5>
                    <p style={{ color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>{contribution.description}</p>
                    <small style={{ color: isDarkTheme ? '#808080' : '#999999' }}>Date: {contribution.date}</small>
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

export default More;