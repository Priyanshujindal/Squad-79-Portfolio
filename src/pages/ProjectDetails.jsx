import React, { useEffect, useState, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const { isDarkTheme } = useContext(ThemeContext);

  // Project data matching the Experience.jsx projects
  const projectsData = [
    {
      id: 1,
      title: "Spotify Clone",
      description: "A clone of the popular music streaming platform, Spotify. This project allows users to listen to their favorite music and discover new artists.",
      image: "./images/soptify.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: ["Priyanshu"],
      demoLink: "https://spotifyfree.netlify.app/",
      features: [
        "Music player interface",
        "Playlist management",
        "Artist discovery",
        "Responsive design",
        "Song search functionality"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      description_long: "This Spotify clone application provides users with a familiar music streaming interface. The web app mimics the core functionality of Spotify, allowing users to browse songs, create playlists, and play music.\n\nBuilt using vanilla JavaScript, HTML, and CSS, this project demonstrates strong front-end development skills without relying on heavy frameworks. The responsive design ensures the application works seamlessly across desktop and mobile devices.\n\nThe project incorporates best practices for audio handling in the browser and implements a clean, intuitive user interface that closely resembles the official Spotify application."
    },
    {
      id: 2,
      title: "2 days workshop",
      description: "A workshop on the python libary like numpy, pandas, matplotlib, etc.",
      image: "./images/workshop.JPG",
      category: "Workshops",
      tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
      team: ["Raksham", "Priyanshu", "Rehat", "Rajat"],
      features: [
        "Hands-on coding sessions",
        "Data visualization techniques",
        "Data manipulation with Pandas",
        "Statistical analysis with NumPy",
        "Real-world case studies"
      ],
      technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
      description_long: "This intensive two-day workshop focused on essential Python libraries for data science and analysis. Participants learned how to manipulate data with Pandas, perform numerical operations with NumPy, and create insightful visualizations with Matplotlib.\n\nThe workshop included practical exercises and real-world case studies to reinforce learning. Participants worked with actual datasets to solve common data analysis problems and develop their skills in a collaborative environment.\n\nBy the end of the workshop, attendees gained practical experience with these powerful Python libraries and were able to apply their new skills to their own data analysis projects."
    },
    {
      id: 3,
      title: "Tic Tac Toe Game",
      description: "A classic two-player game built with modern web technologies. Features include responsive design, player turn indicators, and win detection logic.",
      image: "./images/TickTacToe.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: [ "Priyanshu"],
      demoLink: "https://relastic-tac-toe.netlify.app/",
      features: [
        "Two-player gameplay",
        "Win condition detection",
        "Score tracking",
        "Responsive design",
        "Game reset functionality"
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      description_long: "This interactive Tic Tac Toe game provides a modern take on the classic paper-and-pencil game. Players can take turns placing X's and O's on a 3x3 grid, with the application automatically detecting winning combinations and draws.\n\nThe game features a clean, intuitive interface built with HTML and CSS, with JavaScript handling the game logic. Player scores are tracked across multiple rounds, and animations add visual feedback to player actions.\n\nThe responsive design ensures the game is playable on devices of all sizes, from desktop computers to mobile phones. This project demonstrates strong fundamentals in front-end web development and interactive application design."
    },
    {
      id: 4,
      title: "Leetcode Event by Kalvium",
      description: "A coding event on real life coding questions to improve coding skills.",
      image: "./images/leetcode.jpg",
      category: "Events",
      tags: ["Python"],
      team: ["Raksham","Rehat", "Rajat"],
      features: [
        "Competitive programming challenges",
        "Real-world algorithm problems",
        "Code optimization exercises",
        "Peer code reviews",
        "Collaborative problem solving"
      ],
      technologies: ["Python", "Data Structures", "Algorithms", "LeetCode Platform"],
      description_long: "This Leetcode event hosted by Kalvium focused on improving coding skills through competitive programming challenges. Participants tackled a variety of algorithm and data structure problems designed to enhance their problem-solving abilities and coding efficiency.\n\nThe event included both individual challenges and collaborative problem-solving sessions. Participants learned optimization techniques and best practices for solving complex programming problems under time constraints.\n\nBy participating in this event, students gained valuable experience in technical interview preparation and developed a deeper understanding of algorithm complexity and efficient code implementation."
    },
    {
      id: 5,
      title: "Money Tracking Website",
      description: "A comprehensive financial management application that helps users track their expenses, income, and savings. Features include expense categorization.",
      image: "./images/MoneyTracker.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript", "React"],
      team: ["Priyanshu"],
      demoLink: "https://moneytrackering.netlify.app/",
      features: [
        "Expense and income tracking",
        "Budget planning tools",
        "Category-based spending analysis",
        "Financial reports and charts",
        "Responsive design for desktop and mobile"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      description_long: "This money tracking application provides users with comprehensive tools to manage their personal finances. The app allows users to log expenses and income, categorize transactions, and track their overall financial health.\n\nBuilt with React, the application offers a dynamic and responsive user interface that makes financial management intuitive and accessible. Users can visualize their spending patterns through interactive charts and generate reports to better understand their financial habits.\n\nThe project implements best practices for state management and data persistence, ensuring user data is securely stored and easily accessible. The responsive design makes the application usable on both desktop and mobile devices, allowing users to manage their finances on the go."
    },
    {
      id: 6,
      title: "Classic Dino Game",
      description: "A fun and engaging endless runner game inspired by the classic Chrome Dino game. Features include smooth animations, score tracking, and obstacle avoidance mechanics.",
      image: "./images/DinoGame.png",
      category: "Web Development",
      tags: ["HTML", "CSS", "JavaScript"],
      team: ["Priyanshu"],
      demoLink: "https://classic-dinogame.netlify.app/",
      features: [
        "Endless runner gameplay",
        "Progressive difficulty",
        "Score tracking and high scores",
        "Responsive controls",
        "Collision detection"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
      description_long: "This recreation of the classic Chrome Dino game offers an engaging endless runner experience. Players control a dinosaur character that must jump over cacti and avoid other obstacles to achieve the highest possible score.\n\nThe game is built using HTML Canvas and JavaScript, with smooth animations and responsive controls. The difficulty progressively increases as the player's score gets higher, providing a challenging experience for players of all skill levels.\n\nThe project demonstrates strong game development fundamentals, including collision detection, sprite animation, and game state management, all implemented using vanilla JavaScript without relying on external game engines or libraries."
    },
    {
      id: 7,
      title: "Netflix Clone",
      description: "A modern streaming platform login page UI clone",
      image: "./images/netflix-clone.png",
      category: "Web Development",
      tags: ["HTML", "CSS"],
      team: ["Priyanshu"],
      demoLink: "https://netlify-79.netlify.app/",
      features: [
        "Responsive UI design",
        "Interactive form elements",
        "CSS animations and transitions",
        "Mobile-first approach",
        "Cross-browser compatibility"
      ],
      technologies: ["HTML", "CSS"],
      description_long: "This Netflix login page clone recreates the sleek, modern user interface of the popular streaming platform's entry point. The project focuses on pixel-perfect UI implementation and responsive design principles.\n\nBuilt using only HTML and CSS, the clone demonstrates strong front-end development skills, particularly in creating visually appealing layouts and implementing modern design patterns without JavaScript dependencies.\n\nThe responsive design ensures the login page looks and functions properly across devices of all sizes, from mobile phones to large desktop displays. This project showcases attention to detail in replicating complex UI components and implementing them with clean, maintainable code."
    }
  ];

  const getMemberId = (member) => {
    // Comprehensive mapping of all team member names to correct student IDs
    const memberMap = {
      // Priyanshu variations
      "Priyanshu": 1,
      "Priyanshu Jindal": 1,
      "P Jindal": 1,
      "P. Jindal": 1,
      
      // Raksham variations
      "Raksham": 2,
      "Raksham Sharma": 2,
      "R Sharma": 2,
      "R. Sharma": 2,
      
      // Rajatvir variations  
      "Rajat": 3,
      "Rajatvir": 3,
      "Rajatvir Pandhi": 3,
      "R Pandhi": 3,
      "R. Pandhi": 3,
      
      // Riya variations
      "Riya": 4,
      "Riya Garg": 4,
      "R Garg": 4,
      "R. Garg": 4,
      
      // Rehat variations
      "Rehat": 5,
      "Rehat Singh": 5,
      "R Singh": 5,
      "R. Singh": 5,
      
      // New members (Pranav etc.)
      "Parth Dommera": 6,
      "Ramanpreet Singh": 7,
      "Rakshit": 8,
      "Shivani Jindal": 9,
      "Riddhi Garg": 10,
      "Pranav Arora": 11,
      "Priyansh Thakur": 12,
      "Raghav Sharma": 13,
      "Rishab Bansal": 14,
      "Piyanshi": 15,
      "Sarthak Khurana": 16,
      "Sanchita Bhandari": 17,
      "Pranay Obero": 18,
      "Prachi Behal": 19,
      "Pavitar Kumar":20,
      "Radhil Narula":21
    };
    
    // Function to get the most likely match from the memberMap
    const getMostLikelyMatch = (inputName) => {
      // Direct match
      if (memberMap[inputName]) {
        return memberMap[inputName];
      }
      
      // Convert to lowercase for case-insensitive comparison
      const lowerInputName = inputName.toLowerCase();
      
      // Check for substring matches (e.g. if input is "Priyanshu J" it should match "Priyanshu Jindal")
      for (const [name, id] of Object.entries(memberMap)) {
        const lowerMapName = name.toLowerCase();
        
        // Complete inclusion (inputName includes mapName or vice versa)
        if (lowerInputName.includes(lowerMapName) || lowerMapName.includes(lowerInputName)) {
          return id;
        }
        
        // First name match
        const inputFirstName = lowerInputName.split(' ')[0];
        const mapFirstName = lowerMapName.split(' ')[0];
        if (inputFirstName === mapFirstName) {
          return id;
        }
      }
      
      // Default fallback - if using the more page route, return ID 1 which is Priyanshu
      return 1;
    };
    
    return getMostLikelyMatch(member);
  };

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      
      // Ensure image path is adjusted for correct rendering
      if (foundProject) {
        // If path starts with ./ or doesn't start with /, add the leading / to make it absolute
        if (foundProject.image.startsWith('./')) {
          foundProject.image = foundProject.image.substring(1); // Remove the dot
        } else if (!foundProject.image.startsWith('/')) {
          foundProject.image = '/' + foundProject.image;
        }
      }
      
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="py-5 text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
        <div className="spinner-border" style={{ color: '#ff6b6b' }} role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-5 text-center" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
        <h2>Project not found</h2>
        <Link to="/experience" className="btn mt-3" style={{ backgroundColor: '#ff6b6b', color: 'white' }}>
          Back to Experience
        </Link>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: isDarkTheme ? '#121212' : '#f8f9fa', color: isDarkTheme ? '#ffffff' : '#333333' }}>
      {/* Hero Section */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Link to="/experience" className="mb-4 d-inline-block" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
                <i className="bi bi-arrow-left me-2"></i> Back to Experience
              </Link>
              <h1 className="display-5 fw-bold mb-4" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>{project.title}</h1>
              <div className="d-flex flex-wrap mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="badge me-2 mb-2" style={{ 
                    backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                    color: isDarkTheme ? '#ffffff' : '#333333',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500'
                  }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Image */}
      <section className="py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="img-container mb-4" style={{ 
                position: 'relative',
                paddingTop: '66.67%', // 3:2 aspect ratio
                overflow: 'hidden',
                borderRadius: '1rem',
                background: 'var(--card-bg)'
              }}>
                <img 
                  src={project.image} 
                  className="img-fluid rounded-3 shadow-lg" 
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
                    borderRadius: '1rem'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <h2 className="h3 mb-4">Project Overview</h2>
                <p className="mb-0" style={{ whiteSpace: 'pre-line', lineHeight: '1.6' }}>
                  {project.description_long}
                </p>
              </div>

              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 className="h3 mb-4">Key Features</h2>
                <ul className="list-unstyled">
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-3">
                      <i className="bi bi-check-circle-fill me-2" style={{ color: '#ff6b6b' }}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                marginBottom: '1.5rem'
              }}>
                <h2 className="h4 mb-3">Technologies Used</h2>
                <div className="d-flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge me-2 mb-2" style={{
                      backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      padding: '0.35rem 0.75rem',
                      borderRadius: '0.5rem',
                      fontSize: '0.875rem',
                      fontWeight: '500'
                    }}>{tech}</span>
                  ))}
                </div>
              </div>

              {project.demoLink && (
                <div style={{
                  backgroundColor: 'var(--card-bg)',
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  padding: '1.5rem',
                  borderRadius: '1rem',
                  boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
                  marginBottom: '1.5rem'
                }}>
                  <h2 className="h4 mb-3">Project Links</h2>
                  <div className="d-grid gap-2">
                    <a 
                      href={project.demoLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn"
                      style={{
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
                      <i className="bi bi-display me-2"></i> Live Demo
                    </a>
                  </div>
                </div>
              )}

              <div style={{
                backgroundColor: 'var(--card-bg)',
                color: isDarkTheme ? '#ffffff' : '#333333',
                padding: '1.5rem',
                borderRadius: '1rem',
                boxShadow: isDarkTheme ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)'
              }}>
                <h2 className="h4 mb-3">Team Members</h2>
                <ul className="list-unstyled">
                  {project.team.map((member, index) => (
                    <li key={index} className="mb-3">
                      <Link to={`/students/${getMemberId(member)}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div className="d-flex align-items-center" style={{
                          transition: 'transform 0.2s ease, opacity 0.2s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.opacity = '0.9';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.opacity = '1';
                        }}>
                          <div className="rounded-circle d-flex align-items-center justify-content-center me-3" style={{ 
                            width: '40px', 
                            height: '40px', 
                            backgroundColor: isDarkTheme ? 'rgba(255, 126, 95, 0.2)' : 'rgba(255, 126, 95, 0.1)',
                            color: isDarkTheme ? '#ffffff' : '#333333'
                          }}>
                            {member.charAt(0)}
                          </div>
                          <div>
                            <p className="mb-0 fw-bold">{member}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;