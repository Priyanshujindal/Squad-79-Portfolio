import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const StudentProfile = () => {
  const { id } = useParams();
  const { isDarkTheme } = useTheme();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  
  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    setShouldAnimate(true);
    const timer = setTimeout(() => {
      setShouldAnimate(false);
    }, 12000); // Reset after animation duration
    return () => clearTimeout(timer);
  }, [isDarkTheme]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // This would typically come from an API or database
  const students = [
    {
      id: 1,
      name: "Priyanshu Jindal",
      role: "Frontend Developer",
      image: "/priyanshu.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Passionate frontend developer with expertise in modern web technologies",
      experience: [
        "Worked on multiple frontend projects",
        "Proficient in React and modern JavaScript",
        "Good at problem solving and team collaboration"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 2,
      name: "Raksham Sharma",
      role: "Frontend Developer",
      image: "/images/raksham.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "UI/UX", "CSS"],
      bio: "Creative frontend developer passionate about building beautiful interfaces",
      experience: [
        "Developed responsive web applications",
        "Experienced in modern frontend frameworks",
        "Strong problem-solving skills"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 3,
      name: "Rajatvir Pandhi",
      role: "Backend Developer",
      image: "/images/rajat3.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'http://www.linkedin.com/in/rajatvir-pandhi-444585357',
      skills: ["Python", "Node.js", "Database Design", "API Development"],
      bio: "Backend developer focused on building scalable server architectures",
      experience: [
        "Developed RESTful APIs",
        "Database optimization and management",
        "Server-side application development"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/images/riya.jpg", 
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/riya-garg-98a09a334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["UI Design", "User Research", "Prototyping", "Figma"],
      bio: "Creative UI/UX designer passionate about creating intuitive user experiences",
      experience: [
        "Designed user interfaces for web applications",
        "Conducted user research and testing",
        "Created interactive prototypes"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 5,
      name: "Rehat Singh",
      role: "UI/UX Designer",
      image: "/images/rehat.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      skills: ["UI/UX Design", "Wireframing", "User Testing", "Adobe XD"],
      bio: "Detail-oriented UI/UX designer focused on creating seamless user experiences",
      experience: [
        "Created wireframes and prototypes",
        "Conducted usability testing",
        "Collaborated with development teams"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 6,
      name: "Parth Doomra",
      role: "UI/UX Designer",
      image: "/pasth.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/parth-doomra-444585357',
      skills: ["UI Design", "Visual Design", "Interaction Design", "Sketch"],
      bio: "UI/UX designer with a strong focus on visual aesthetics and user interaction",
      experience: [
        "Designed mobile and web interfaces",
        "Created design systems",
        "Improved user experience metrics"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 7,
      name: "Ramanpreet Singh",
      role: "UI/UX Designer",
      image: "/images/raman2.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      skills: ["UI/UX Design", "Information Architecture", "User Research", "InVision"],
      bio: "UI/UX designer specializing in creating user-centered digital experiences",
      experience: [
        "Developed user personas and journeys",
        "Created responsive designs",
        "Conducted design workshops"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 8,
      name: "Rakshit",
      role: "UI/UX Designer",
      image: "/images/rakshit.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      skills: ["UI Design", "Prototyping", "User Testing", "Adobe Creative Suite"],
      bio: "Creative designer focused on building engaging digital experiences",
      experience: [
        "Designed user interfaces",
        "Created interactive prototypes",
        "Conducted usability testing"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 9,
      name: "Shivani Jindal",
      role: "UI/UX Designer",
      image: "/images/shivani.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/shivani-jindal-7b6066329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["UI Design", "Visual Design", "Prototyping", "Figma"],
      bio: "UI/UX designer passionate about creating beautiful and functional interfaces",
      experience: [
        "Designed web and mobile interfaces",
        "Created design systems",
        "Conducted user research"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 10,
      name: "Riddhi Garg",
      role: "Figma",
      image: "/images/riddhi.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/riddhi-garg-4951b234b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["Figma", "UI Design", "Prototyping", "Visual Design"],
      bio: "Figma specialist focused on creating modern and responsive designs",
      experience: [
        "Created UI components in Figma",
        "Developed design systems",
        "Collaborated with development teams"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 11,
      name: "Pranav Arora",
      role: "Hacker",
      image: "/images/pranav2.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/pranav-arora-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["Ethical Hacking", "Cybersecurity", "Network Security", "Penetration Testing"],
      bio: "Security enthusiast focused on identifying and fixing vulnerabilities",
      experience: [
        "Conducted security audits",
        "Performed penetration testing",
        "Implemented security measures"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 12,
      name: "Priyansh Thakur",
      role: "Frontend Developer",
      image: "/images/priyansh.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/priyansh-thakur-504a38308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer specializing in modern web technologies",
      experience: [
        "Built responsive web applications",
        "Implemented UI components",
        "Optimized website performance"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 13,
      name: "Raghav Sharma",
      role: "React Developer",
      image: "/images/raghav.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/raghav-sharma-9861a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "Redux", "JavaScript", "Web Development"],
      bio: "React developer focused on building scalable web applications",
      experience: [
        "Developed React components",
        "Implemented state management",
        "Built responsive interfaces"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 14,
      name: "Rishab Bansal",
      role: "Dance Enthusiast",
      image: "/images/rishab.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/rahul-verma-7b6066329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["Choreography", "Performance", "Dance Instruction", "Event Management"],
      bio: "Passionate dancer combining technical skills with creative expression",
      experience: [
        "Choreographed dance performances",
        "Led dance workshops",
        "Organized dance events"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 15,
      name: "Piyanshi",
      role: "Frontend Developer",
      image: "/images/priyanshi.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/piyanshi-56ab00330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer passionate about creating engaging web experiences",
      experience: [
        "Developed web applications",
        "Created responsive layouts",
        "Implemented UI/UX designs"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 16,
      name: "Sarthak Khurana",
      role: "UI/UX Designer",
      image: "/images/sarthak.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/sarthak-khurana-279399325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["UI Design", "UX Research", "Prototyping", "Wireframing"],
      bio: "UI/UX designer focused on creating intuitive digital experiences",
      experience: [
        "Designed user interfaces",
        "Conducted user research",
        "Created interactive prototypes"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 17,
      name: "Sanchita Bhandari",
      role: "Frontend Developer",
      image: "/sanchita.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/sanchita-bhandari-901207332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer with a passion for clean and efficient code",
      experience: [
        "Built responsive websites",
        "Implemented UI components",
        "Optimized web performance"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 18,
      name: "Pranay Obero",
      role: "Designer",
      image: "/pranay.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/pranay-oberoi-058747312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["Graphic Design", "UI Design", "Visual Design", "Adobe Creative Suite"],
      bio: "Creative designer specializing in visual communication and branding",
      experience: [
        "Created brand identities",
        "Designed marketing materials",
        "Developed visual guidelines"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 19,
      name: "Prachi Behal",
      role: "Frontend Developer",
      image: "/images/prachi.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/prachi-behal',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer passionate about creating engaging web experiences",
      experience: [
        "Built responsive web applications",
        "Implemented modern UI components",
        "Collaborated on team projects"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 20,
      name: "Pavitar Kumar",
      role: "Frontend Developer",
      image: "/images/pavitar.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/pavitar-kumar',
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer focused on creating modern web applications",
      experience: [
        "Developed responsive websites",
        "Built interactive UI components",
        "Worked on frontend optimization"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 21,
      name: "Radhil Narula",
      role: "Frontend Developer", 
      image: "/images/radhil.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: "https://www.linkedin.com/in/radhil-narula-7b6066329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      bio: "Frontend developer passionate about building modern web applications",
      experience: [
        "Developed responsive websites",
        "Built interactive UI components",
        "Collaborated on team projects"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
    }
  ];

  const student = students.find(s => s.id === parseInt(id));

  if (!student) {
    return (
      <div className={`container py-5 ${isDarkTheme ? 'text-white' : ''}`}>
        <div className="text-center">
          <h2>Student Not Found</h2>
          <Link to="/students" className="btn btn-danger mt-3" onClick={scrollToTop}>Back to Students</Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
      minHeight: '100vh',
      transition: 'background-color 0.8s ease'
    }}>
      {/* Hero Section */}
      <section className="text-white py-5" style={{ 
        backgroundColor: isDarkTheme ? '#000000' : '#ff6b6b',
        transition: 'background-color 0.8s ease'
      }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="profile-image-container">
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="profile-image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">{student.name}</h1>
              <p className="lead text-white mb-4">{student.role}</p>
              <p className="mb-4">{student.bio}</p>
              <div className="d-flex gap-3">
                <Link to="/students" className="btn btn-outline-light" onClick={scrollToTop}>
                  <i className="bi bi-arrow-left me-2"></i>Back to Students
                </Link>
                <a 
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  <i className="bi bi-linkedin me-2"></i>LinkedIn Profile
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section style={{
        backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
        transition: 'background-color 0.8s ease',
        padding: '3rem 0'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="h3 mb-4" style={{ 
                color: isDarkTheme ? '#ffffff' : '#333333',
                transition: 'color 2s ease',
                animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
              }}>Experience</h2>
              <ul className="list-unstyled">
                {student.experience.map((exp, index) => (
                  <li 
                    key={index} 
                    className="mb-3 d-flex align-items-start"
                    style={{ 
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
                    }}
                  >
                    <i className="bi bi-check-circle-fill text-danger me-2 mt-1"></i>
                    <span>{exp}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <div style={{ 
                backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'background-color 0.8s ease'
              }}>
                <h3 className="h4 mb-4" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
                }}>Skills</h3>
                <div className="d-flex flex-wrap gap-2">
                  {student.skills.map((skill, index) => (
                    <span key={index} className="badge bg-danger">
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="h4 mt-4 mb-3" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
                }}>Education</h3>
                <p className="mb-0" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
                }}>{student.education}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horizontal Scrolling Sections */}
      <section style={{
        backgroundColor: isDarkTheme ? '#000000' : '#ffffff',
        transition: 'background-color 0.8s ease',
        padding: '3rem 0'
      }}>
        <div className="container">
          {/* Projects Section */}
          <h2 className="h3 mb-4" style={{ 
            color: isDarkTheme ? '#ffffff' : '#333333',
            transition: 'color 2s ease',
            animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
          }}>Web Development</h2>
          <div className="horizontal-scroll mb-5" style={{
            overflowX: 'auto',
            paddingBottom: '1rem',
            display: 'flex',
            gap: '1.5rem'
          }}>
            {[
              {
                title: "Spotify Clone",
                image: "/soptify.png",
                description: "A clone of the popular music streaming platform, Spotify. This project allows users to listen to their favorite music and discover new artists.",
                technologies: ["HTML", "CSS", "JavaScript"]
              },
              {
                title: "Netflix Clone",
                image: "/class.jpg",
                description: "A streaming platform clone featuring a responsive design, dynamic content loading, and user authentication system.",
                technologies: ["React", "Firebase", "CSS"]
              },
              {
                title: "E-Commerce Website",
                image: "/raksham.jpg",
                description: "A full-featured online shopping platform with product catalog, cart functionality, and secure checkout process.",
                technologies: ["React", "Node.js", "MongoDB"]
              },
              {
                title: "Weather Dashboard",
                image: "/priyanshu.jpg",
                description: "Real-time weather application providing detailed forecasts, interactive maps, and location-based weather data.",
                technologies: ["React", "API", "Bootstrap"]
              },
              {
                title: "Task Management App",
                image: "/images/raksham.jpg",
                description: "A productivity tool for managing tasks, setting deadlines, and collaborating with team members.",
                technologies: ["React", "Redux", "Firebase"]
              },
              {
                title: "Social Media Dashboard",
                image: "/images/rajat3.jpg",
                description: "Analytics dashboard for tracking social media metrics across multiple platforms in real-time.",
                technologies: ["React", "Chart.js", "API"]
              },
              {
                title: "Recipe Finder",
                image: "/images/riya.jpg",
                description: "Search and discover recipes from around the world with filtering options and step-by-step instructions.",
                technologies: ["React", "API", "Tailwind"]
              },
              {
                title: "Portfolio Website",
                image: "/images/rehat.jpg",
                description: "Modern and responsive portfolio website showcasing projects, skills, and professional experience.",
                technologies: ["React", "Three.js", "GSAP"]
              }
            ].map((project, index) => (
              <div 
                key={index}
                style={{
                  flex: '0 0 400px',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  marginBottom: '1.5rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden',
                  backgroundColor: '#f8f9fa'
                }}>
                  <img 
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/project-placeholder.jpg';
                    }}
                  />
                </div>
                <h4 style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  fontSize: '1.25rem',
                  marginBottom: '1rem'
                }}>{project.title}</h4>
                <p style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>{project.description}</p>
                <div className="d-flex gap-2 flex-wrap">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="badge bg-danger">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Events Section */}
          <h2 className="h3 mb-4" style={{ 
            color: isDarkTheme ? '#ffffff' : '#333333',
            transition: 'color 2s ease',
            animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
          }}>Events</h2>
          <div className="horizontal-scroll mb-5" style={{
            overflowX: 'auto',
            paddingBottom: '1rem',
            display: 'flex',
            gap: '1.5rem'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                style={{
                  flex: '0 0 400px',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  marginBottom: '1.5rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/class.jpg"
                    alt={`Event ${item}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/project-placeholder.jpg';
                    }}
                  />
                </div>
                <h4 style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  fontSize: '1.25rem',
                  marginBottom: '1rem'
                }}>Hackathon {item}</h4>
                <p style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>48-hour coding challenge to build innovative solutions. Join us for an exciting weekend of coding, learning, and collaboration.</p>
                <div className="d-flex align-items-center" style={{ 
                  color: isDarkTheme ? '#ff6b6b' : '#dc3545'
                }}>
                  <i className="bi bi-calendar-event-fill me-2"></i>
                  <span>March 15-16, 2024</span>
                </div>
              </div>
            ))}
          </div>

          {/* Workshops Section */}
          <h2 className="h3 mb-4" style={{ 
            color: isDarkTheme ? '#ffffff' : '#333333',
            transition: 'color 2s ease',
            animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none'
          }}>Workshops</h2>
          <div className="horizontal-scroll" style={{
            overflowX: 'auto',
            paddingBottom: '1rem',
            display: 'flex',
            gap: '1.5rem'
          }}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div 
                key={item}
                style={{
                  flex: '0 0 400px',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  transform: 'translateY(0)',
                  border: '1px solid transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
                  e.currentTarget.style.borderColor = '#ff6b6b';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
                  e.currentTarget.style.borderColor = 'transparent';
                }}
              >
                <div style={{
                  width: '100%',
                  height: '200px',
                  marginBottom: '1.5rem',
                  borderRadius: '0.5rem',
                  overflow: 'hidden'
                }}>
                  <img 
                    src="/images/raksham.jpg"
                    alt={`Workshop ${item}`}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/project-placeholder.jpg';
                    }}
                  />
                </div>
                <h4 style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  fontSize: '1.25rem',
                  marginBottom: '1rem'
                }}>React Workshop {item}</h4>
                <p style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  marginBottom: '1rem',
                  fontSize: '0.9rem',
                  lineHeight: '1.5'
                }}>Hands-on workshop series covering React fundamentals, hooks, state management, and best practices.</p>
                <div className="d-flex align-items-center" style={{ 
                  color: isDarkTheme ? '#ff6b6b' : '#dc3545'
                }}>
                  <i className="bi bi-calendar-event-fill me-2"></i>
                  <span>Every Tuesday & Thursday</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx="true">{`
        .profile-image-container {
          width: 300px;
          height: 300px;
          margin: 0 auto;
          position: relative;
          border-radius: 50%;
          overflow: hidden;
          border: 5px solid #ffffff;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .horizontal-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none;  /* Internet Explorer 10+ */
        }

        .horizontal-scroll::-webkit-scrollbar {
          display: none; /* WebKit */
        }

        /* Remove the unused scrollbar styles */
        .horizontal-scroll::-webkit-scrollbar-track {
          display: none;
        }

        .horizontal-scroll::-webkit-scrollbar-thumb {
          display: none;
        }

        @keyframes fadeInOut {
          0% {
            opacity: 1;
          }
          15% {
            opacity: 0;
          }
          30% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default StudentProfile; 