import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { projectsData, getMemberId } from '../data/projects';

const StudentProfile = () => {
  const { id } = useParams();
  const location = useLocation();
  const { isDarkTheme } = useTheme();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [studentProjects, setStudentProjects] = useState([]);
  const [student, setStudent] = useState(null);
  
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

  // Find student and their projects
  useEffect(() => {
    // Check which route we're using (students or more)
    const isMoreRoute = location.pathname.includes('/more/');
    
    // Define team members from More page to match when coming from more route
    const moreTeamMembers = [
      {
        id: 1,
        name: "Priyanshu Jindal",
        role: "Team Lead",
        image: "/priyanshu.jpg",
        description: "Experienced team lead with expertise in project management and technical leadership.",
        skills: ["Project Management", "Technical Leadership", "Team Building"],
        linkedin: "https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        education: "B.Tech in Computer Science, Chitkara University",
        experience: [
          "Mobile No: 9464939035",
          "Email: priyanshu.jindal@gmail.com"
        ]
      },
      {
        id: 2,
        name: "Raksham Sharma",
        role: "Frontend Developer",
        image: "/raksham.jpg",
        description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces.",
        skills: ["React", "JavaScript", "CSS", "HTML" , 'Bootstrap'],
        linkedin: "https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        education: "B.Tech in Computer Science, Chitkara University",
        experience: [
          "Mobile No: 9906280034",
          "Email: rakshamshar@gmail.com"
        ]
      },
      {
        id: 3,
        name: "Rajatvir Pandhi",
        role: "Backend Developer",
        image: "/rajat3.jpg",
        description: "Backend expert focused on scalable server architecture and database optimization.",
        skills: ["Python", ""],
        linkedin: "http://www.linkedin.com/in/rajatvir-pandhi-444585357",
        education: "B.Tech in Computer Science, Chitkara University",
        experience: [
          "Developed RESTful APIs",
          "Database optimization and management",
          "Server-side application development"
        ]
      },
      {
        id: 4,
        name: "Riya Garg",
        role: "UI/UX Designer",
        image: "/riya.jpg",
        description: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
        skills: ["UI Design", "User Research", "Prototyping"],
        linkedin: "https://www.linkedin.com/in/riya-garg-98a09a334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        education: "B.Tech in Computer Science, Chitkara University",
        experience: [
          "Designed user interfaces for multiple applications",
          "Conducted user research and usability testing",
          "Created wireframes and prototypes"
        ]
      },
      {
        id: 5,
        name: "Rehat Singh",
        role: "UI/UX Designer",
        image: "/rehat.jpg",
        description: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
        skills: ["UI/UX Design", "User Research", "Prototyping"],
        linkedin: "https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        education: "B.Tech in Computer Science, Chitkara University",
        experience: [
          "Created intuitive user interfaces",
          "Conducted usability testing and user research",
          "Designed prototypes and wireframes"
        ]
      }
    ];
    
    // Try to find the student in both arrays, regardless of route
    // This ensures students can be found when coming from either route
    let foundStudent = isMoreRoute 
      ? moreTeamMembers.find(s => s.id === parseInt(id))
      : students.find(s => s.id === parseInt(id));
    
    // If not found in the preferred array, check the other array as fallback
    if (!foundStudent) {
      foundStudent = isMoreRoute
        ? students.find(s => s.id === parseInt(id))
        : moreTeamMembers.find(s => s.id === parseInt(id));
    }
      
    setStudent(foundStudent);

    if (foundStudent) {
      // Filter projects where this student is in the team
      // Use a more robust matching approach that accounts for variations in name format
      const filteredProjects = projectsData.filter(project => {
        if (!project.team || project.team.length === 0) {
          return false;
        }
        
        // Check if any team member name matches the student name (case insensitive)
        return project.team.some(member => {
          const studentNameLower = foundStudent.name.toLowerCase();
          const memberNameLower = member.toLowerCase();
          
          // Check various matching conditions
          return (
            // Direct match
            memberNameLower === studentNameLower ||
            
            // First name only
            memberNameLower === studentNameLower.split(' ')[0].toLowerCase() ||
            
            // Last name only
            memberNameLower === studentNameLower.split(' ').slice(-1)[0].toLowerCase() ||
            
            // Substring match
            studentNameLower.includes(memberNameLower) ||
            memberNameLower.includes(studentNameLower)
          );
        });
      });
      
      setStudentProjects(filteredProjects);
    }
  }, [id, location.pathname]);

  // Get events that the student participated in
  const getStudentEvents = () => {
    if (!student) return [];
    
    return projectsData.filter(project => 
      project.category === "Events" && 
      project.team.some(member => {
        // Use the same robust matching function
        const studentNameLower = student.name.toLowerCase();
        const memberNameLower = member.toLowerCase();
        
        // Check various matching conditions
        return (
          // Direct match
          memberNameLower === studentNameLower ||
          
          // First name only
          memberNameLower === studentNameLower.split(' ')[0].toLowerCase() ||
          
          // Last name only
          memberNameLower === studentNameLower.split(' ').slice(-1)[0].toLowerCase() ||
          
          // Substring match
          studentNameLower.includes(memberNameLower) ||
          memberNameLower.includes(studentNameLower)
        );
      })
    );
  };

  // Get web development projects that the student worked on
  const getWebDevelopmentProjects = () => {
    if (!student) return [];
    
    return studentProjects.filter(project => 
      project.category === "Web Development"
    );
  };

  // Get workshops that the student participated in
  const getStudentWorkshops = () => {
    if (!student) return [];
    
    return projectsData.filter(project => 
      project.category === "Workshops" && 
      project.team.some(member => {
        // Use the same robust matching function
        const studentNameLower = student.name.toLowerCase();
        const memberNameLower = member.toLowerCase();
        
        // Check various matching conditions
        return (
          // Direct match
          memberNameLower === studentNameLower ||
          
          // First name only
          memberNameLower === studentNameLower.split(' ')[0].toLowerCase() ||
          
          // Last name only
          memberNameLower === studentNameLower.split(' ').slice(-1)[0].toLowerCase() ||
          
          // Substring match
          studentNameLower.includes(memberNameLower) ||
          memberNameLower.includes(studentNameLower)
        );
      })
    );
  };

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
        "Mobile No: 9464939035",
          "Email: priyanshu.jindal@gmail.com"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
  },
  {
    id: 2,
      name: "Raksham Sharma",
      role: "Frontend Developer",
      image: "/raksham.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      skills: ["React", "JavaScript", "UI/UX", "CSS"],
      bio: "Creative frontend developer passionate about building beautiful interfaces",
      experience: [
        "Mobile No: 9906280034",
          "Email: rakshamshar@gmail.com"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
  },
  {
    id: 3,
      name: "Rajatvir Pandhi",
      role: "Backend Developer",
      image: "/rajat3.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'http://www.linkedin.com/in/rajatvir-pandhi-444585357',
      skills: ["Python", "Node.js", "Database Design", "API Development"],
      bio: "Backend developer focused on building scalable server architectures",
      experience: [
        "Mobile No: 9888913914",
          "Email: rajatvirpandhi@gmail.com"
      ],
      education: "B.Tech in Computer Science, Chitkara University"
  },
  {
    id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/riya.jpg",
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
    },
    {
      id: 22,
      name: "Pukhraj Soni",
      role: "C++ Developer",
      image: "/pukhraj.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/radhil-narula-6b1947331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', 
      skills: ["C++", "Data Structures", "Algorithms", "Object-Oriented Programming"],    
      bio: "C++ developer with a passion for building efficient and scalable applications",
      experience: [
        "Developed C++ applications",
        "Implemented data structures",
        "Optimized code performance"
      ],    
      education: "B.Tech in Computer Science, Chitkara University"
    },
    {
      id: 23,
      name: "Riya Yadav", 
      role: "C++ Developer",
      image: "/riya2.jpg",
      description: "Student of 1st Year at Chitkara",
      linkedin: 'https://www.linkedin.com/in/riya-y-166103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ium=android_app',
      skills: ['Python loops not included'  ],    
      bio: "C++ developer with a passion for building efficient and scalable applications",
      experience: [
        "Developed C++ applications",
        "Implemented data structures",
        "Optimized code performance"
      ],    
      education: "B.Tech in Computer Science, Chitkara University"
    }
  ];  

  if (!student) {
    return (
      <div className={`container py-5 ${isDarkTheme ? 'text-white' : ''}`}>
        <div className="text-center">
          <h2>Student Not Found</h2>
          <Link to={window.location.pathname.includes('/more') ? '/more' : '/students'} className="btn btn-danger mt-3" onClick={scrollToTop}>
            <i className="bi bi-arrow-left me-2"></i>
            {window.location.pathname.includes('/more') ? 'Back to More' : 'Back to Students'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div style={{ 
      backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
      minHeight: '100vh',
      transition: 'background-color 0.8s ease'
    }}>
      {/* Hero Section */}
      <section className="text-white py-5" style={{ 
        background: isDarkTheme 
          ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
          : 'linear-gradient(135deg, #ff6b6b 0%, #ff8e8e 50%, #ff6b6b 100%)',
        transition: 'background-color 0.8s ease',
        position: 'relative',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
      }}>
        {/* Decorative gradient overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: isDarkTheme
            ? 'radial-gradient(circle at 30% 30%, rgba(255, 107, 107, 0.1), transparent 70%)'
            : 'radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2), transparent 70%)',
          pointerEvents: 'none'
        }} />

        {/* Decorative circles with enhanced effects */}
        <div style={{
          position: 'absolute',
          top: '-50px',
          right: '-50px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: isDarkTheme
            ? 'radial-gradient(circle, rgba(255, 107, 107, 0.15), transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)',
          filter: 'blur(8px)',
          animation: 'pulse 3s infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: isDarkTheme
            ? 'radial-gradient(circle, rgba(255, 107, 107, 0.15), transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)',
          filter: 'blur(8px)',
          animation: 'pulse 3s infinite 1s'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          background: isDarkTheme
            ? 'radial-gradient(circle, rgba(255, 107, 107, 0.15), transparent 70%)'
            : 'radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent 70%)',
          filter: 'blur(8px)',
          animation: 'pulse 3s infinite 2s'
        }} />

        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="profile-image-container" style={{
                width: '300px',
                height: '300px',
                margin: '0 auto',
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #ffffff',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)',
                padding: '5px'
              }}>
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="profile-image"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                {/* Decorative rings with enhanced effects */}
                <div style={{
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  border: '2px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '50%',
                  animation: 'wave 3s ease-in-out infinite'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-15px',
                  right: '-15px',
                  bottom: '-15px',
                  border: '2px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '50%',
                  animation: 'wave 4s ease-in-out infinite reverse'
                }} />
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3 profile-name" style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
                background: 'linear-gradient(45deg, #ffffff, #f8f9fa)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{student.name}</h1>
              <p className="lead text-white mb-4 profile-role" style={{
                fontSize: '1.5rem',
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
              }}>{student.role}</p>
              <p className="mb-4 profile-bio" style={{
                fontSize: '1.1rem',
                opacity: 0.8,
                lineHeight: '1.6',
                textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)'
              }}>{student.bio}</p>
              <div className="d-flex gap-3 profile-buttons">
                <Link 
                  to={window.location.pathname.includes('/more') ? '/more' : '/students'} 
                  className="btn btn-outline-light"
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    borderWidth: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <i className="bi bi-arrow-left me-2"></i>
                  {window.location.pathname.includes('/more') ? 'Back to More' : 'Back to Students'}
                </Link>
                <a 
                  href={student.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '30px',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    borderWidth: '2px'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
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
        padding: '4rem 0',
        position: 'relative'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div style={{
                backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease'
              }}>
                <h2 className="h3 mb-4" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  position: 'relative',
                  paddingBottom: '1rem'
                }}>
                  Experience
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                    borderRadius: '3px'
                  }} />
                </h2>
                <ul className="list-unstyled">
                  {student.experience.map((exp, index) => (
                    <li 
                      key={index} 
                      className="mb-4 d-flex align-items-start"
                      style={{
                        color: isDarkTheme ? '#ffffff' : '#333333',
                        transition: 'color 2s ease',
                        animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                        padding: '1rem',
                        borderRadius: '10px',
                        backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateX(10px)';
                        e.currentTarget.style.backgroundColor = isDarkTheme ? '#333333' : '#f1f1f1';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateX(0)';
                        e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#f8f9fa';
                      }}
                    >
                      <i className="bi bi-check-circle-fill text-danger me-3 mt-1" style={{ fontSize: '1.2rem' }}></i>
                      <span style={{ fontSize: '1.1rem' }}>{exp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div style={{ 
                backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.3s ease',
                height: '100%'
              }}>
                <h3 className="h4 mb-4" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  position: 'relative',
                  paddingBottom: '1rem'
                }}>
                  Skills
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                    borderRadius: '3px'
                  }} />
                </h3>
                <div className="d-flex flex-wrap gap-2">
                  {student.skills.map((skill, index) => (
                    <span key={index} className="badge" style={{
                      backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      padding: '0.5rem 1rem',
                      borderRadius: '20px',
                      fontSize: '0.9rem',
                      border: `1px solid ${isDarkTheme ? '#404040' : '#e9ecef'}`,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#ff6b6b';
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#f8f9fa';
                      e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#333333';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <h3 className="h4 mt-4 mb-3" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#333333',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  position: 'relative',
                  paddingBottom: '1rem'
                }}>
                  Education
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '50px',
                    height: '3px',
                    background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                    borderRadius: '3px'
                  }} />
                </h3>
                <p className="mb-0" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  transition: 'color 2s ease',
                  animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                  fontSize: '1.1rem',
                  lineHeight: '1.6'
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
        padding: '4rem 0',
        position: 'relative'
      }}>
        {/* Decorative background elements */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: isDarkTheme 
            ? 'radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.1), transparent 50%)'
            : 'radial-gradient(circle at 20% 20%, rgba(255, 107, 107, 0.05), transparent 50%)',
          pointerEvents: 'none'
        }} />
        
        <div className="container">
          {/* Projects Section */}
          <div style={{
            position: 'relative',
            marginBottom: '4rem'
          }}>
            <h2 className="h3 mb-4" style={{ 
              color: isDarkTheme ? '#ffffff' : '#333333',
              transition: 'color 2s ease',
              animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '0.5rem'
            }}>
              Web Development
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                borderRadius: '3px'
              }} />
            </h2>
            <div className="horizontal-scroll mb-5" style={{
              overflowX: 'auto',
              paddingBottom: '1rem',
              display: 'flex',
              gap: '1.5rem',
              position: 'relative'
            }}>
              {getWebDevelopmentProjects().length > 0 ? (
                getWebDevelopmentProjects().map((project, index) => (
                  <div 
                    key={index}
                    style={{
                      flex: '0 0 400px',
                      backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      transform: 'translateY(0)',
                      border: '1px solid transparent',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.borderColor = '#ff6b6b';
                      // Add zoom effect to the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = 'transparent';
                      // Reset zoom effect on the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {/* Project image container */}
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '1.5rem',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      backgroundColor: '#f8f9fa',
                      position: 'relative'
                    }}>
                      <img 
                        src={project.image.startsWith('./') ? project.image.substring(1) : project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/project-placeholder.jpg';
                        }}
                      />
                      {/* Overlay gradient */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }} />
                    </div>

                    {/* Project content */}
                    <h4 style={{ 
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>{project.title}</h4>
                    <p style={{ 
                      color: isDarkTheme ? '#ffffff' : '#6c757d',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {project.tags.map((tech, i) => (
                        <span key={i} className="badge" style={{
                          backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: `1px solid ${isDarkTheme ? '#404040' : '#e9ecef'}`,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#f8f9fa';
                          e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#333333';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="d-flex gap-2">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            padding: '0.6rem 1.2rem',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            border: '2px solid #ff6b6b',
                            color: '#ff6b6b',
                            backgroundColor: 'transparent',
                            flex: 1,
                            textAlign: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff6b6b';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#ff6b6b';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <i className="bi bi-play-circle me-2"></i>View Demo
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.id}`}
                        className="btn"
                        style={{
                          padding: '0.6rem 1.2rem',
                          borderRadius: '30px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease',
                          border: '2px solid #ff6b6b',
                          color: '#ff6b6b',
                          backgroundColor: 'transparent',
                          flex: 1,
                          textAlign: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#ff6b6b';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="bi bi-info-circle me-2"></i>View Detail
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center w-100" style={{
                  padding: '3rem',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa',
                  borderRadius: '20px',
                  color: isDarkTheme ? '#ffffff' : '#6c757d'
                }}>
                  <i className="bi bi-code-square display-4 mb-3"></i>
                  <h4>No web development projects found.</h4>
                  <p className="mb-0">This student hasn't participated in any web development projects yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Events Section */}
          <div style={{
            position: 'relative',
            marginBottom: '4rem'
          }}>
            <h2 className="h3 mb-4" style={{ 
              color: isDarkTheme ? '#ffffff' : '#333333',
              transition: 'color 2s ease',
              animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '0.5rem'
            }}>
              Events
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                borderRadius: '3px'
              }} />
            </h2>
            <div className="horizontal-scroll mb-5" style={{
              overflowX: 'auto',
              paddingBottom: '1rem',
              display: 'flex',
              gap: '1.5rem',
              position: 'relative'
            }}>
              {getStudentEvents().length > 0 ? (
                getStudentEvents().map((project, index) => (
                  <div 
                    key={index}
                    style={{
                      flex: '0 0 400px',
                      backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      transform: 'translateY(0)',
                      border: '1px solid transparent',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.borderColor = '#ff6b6b';
                      // Add zoom effect to the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = 'transparent';
                      // Reset zoom effect on the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {/* Project image container */}
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '1.5rem',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      backgroundColor: '#f8f9fa',
                      position: 'relative'
                    }}>
                      <img 
                        src={project.image.startsWith('./') ? project.image.substring(1) : project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/project-placeholder.jpg';
                        }}
                      />
                      {/* Overlay gradient */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }} />
                    </div>

                    {/* Project content */}
                    <h4 style={{ 
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>{project.title}</h4>
                    <p style={{ 
                      color: isDarkTheme ? '#ffffff' : '#6c757d',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {project.tags.map((tech, i) => (
                        <span key={i} className="badge" style={{
                          backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: `1px solid ${isDarkTheme ? '#404040' : '#e9ecef'}`,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#f8f9fa';
                          e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#333333';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="d-flex gap-2">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            padding: '0.6rem 1.2rem',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            border: '2px solid #ff6b6b',
                            color: '#ff6b6b',
                            backgroundColor: 'transparent',
                            flex: 1,
                            textAlign: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff6b6b';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#ff6b6b';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <i className="bi bi-play-circle me-2"></i>View Demo
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.id}`}
                        className="btn"
                        style={{
                          padding: '0.6rem 1.2rem',
                          borderRadius: '30px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease',
                          border: '2px solid #ff6b6b',
                          color: '#ff6b6b',
                          backgroundColor: 'transparent',
                          flex: 1,
                          textAlign: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#ff6b6b';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="bi bi-info-circle me-2"></i>View Detail
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center w-100" style={{
                  padding: '3rem',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa',
                  borderRadius: '20px',
                  color: isDarkTheme ? '#ffffff' : '#6c757d'
                }}>
                  <i className="bi bi-calendar-event display-4 mb-3"></i>
                  <h4>No events found.</h4>
                  <p className="mb-0">This student hasn't participated in any events yet.</p>
                </div>
              )}
            </div>
          </div>

          {/* Workshops Section */}
          <div style={{
            position: 'relative'
          }}>
            <h2 className="h3 mb-4" style={{ 
              color: isDarkTheme ? '#ffffff' : '#333333',
              transition: 'color 2s ease',
              animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
              position: 'relative',
              display: 'inline-block',
              paddingBottom: '0.5rem'
            }}>
              Workshops
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                height: '3px',
                background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e)',
                borderRadius: '3px'
              }} />
            </h2>
            <div className="horizontal-scroll" style={{
              overflowX: 'auto',
              paddingBottom: '1rem',
              display: 'flex',
              gap: '1.5rem'
            }}>
              {getStudentWorkshops().length > 0 ? (
                getStudentWorkshops().map((project, index) => (
                  <div 
                    key={index}
                    style={{
                      flex: '0 0 400px',
                      backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                      borderRadius: '20px',
                      padding: '1.5rem',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      transform: 'translateY(0)',
                      border: '1px solid transparent',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
                      e.currentTarget.style.borderColor = '#ff6b6b';
                      // Add zoom effect to the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1.1)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
                      e.currentTarget.style.borderColor = 'transparent';
                      // Reset zoom effect on the image
                      const img = e.currentTarget.querySelector('img');
                      if (img) {
                        img.style.transform = 'scale(1)';
                      }
                    }}
                  >
                    {/* Project image container */}
                    <div style={{
                      width: '100%',
                      height: '200px',
                      marginBottom: '1.5rem',
                      borderRadius: '15px',
                      overflow: 'hidden',
                      backgroundColor: '#f8f9fa',
                      position: 'relative'
                    }}>
                      <img 
                        src={project.image.startsWith('./') ? project.image.substring(1) : project.image} 
                        alt={project.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
                        }}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/images/project-placeholder.jpg';
                        }}
                      />
                      {/* Overlay gradient */}
                      <div style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: '50%',
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }} />
                    </div>

                    {/* Project content */}
                    <h4 style={{ 
                      color: isDarkTheme ? '#ffffff' : '#333333',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      fontSize: '1.4rem',
                      marginBottom: '1rem',
                      fontWeight: '600'
                    }}>{project.title}</h4>
                    <p style={{ 
                      color: isDarkTheme ? '#ffffff' : '#6c757d',
                      transition: 'color 2s ease',
                      animation: shouldAnimate ? 'fadeInOut 12s ease' : 'none',
                      marginBottom: '1.5rem',
                      fontSize: '1rem',
                      lineHeight: '1.6'
                    }}>{project.description}</p>
                    
                    {/* Tech stack */}
                    <div className="d-flex gap-2 flex-wrap mb-3">
                      {project.tags.map((tech, i) => (
                        <span key={i} className="badge" style={{
                          backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                          color: isDarkTheme ? '#ffffff' : '#333333',
                          padding: '0.5rem 1rem',
                          borderRadius: '20px',
                          fontSize: '0.9rem',
                          border: `1px solid ${isDarkTheme ? '#404040' : '#e9ecef'}`,
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#f8f9fa';
                          e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#333333';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Action buttons */}
                    <div className="d-flex gap-2">
                      {project.demoLink && (
                        <a 
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn"
                          style={{
                            padding: '0.6rem 1.2rem',
                            borderRadius: '30px',
                            fontSize: '0.9rem',
                            fontWeight: '500',
                            transition: 'all 0.3s ease',
                            border: '2px solid #ff6b6b',
                            color: '#ff6b6b',
                            backgroundColor: 'transparent',
                            flex: 1,
                            textAlign: 'center'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#ff6b6b';
                            e.currentTarget.style.color = 'white';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#ff6b6b';
                            e.currentTarget.style.transform = 'translateY(0)';
                          }}
                        >
                          <i className="bi bi-play-circle me-2"></i>View Demo
                        </a>
                      )}
                      <Link 
                        to={`/project/${project.id}`}
                        className="btn"
                        style={{
                          padding: '0.6rem 1.2rem',
                          borderRadius: '30px',
                          fontSize: '0.9rem',
                          fontWeight: '500',
                          transition: 'all 0.3s ease',
                          border: '2px solid #ff6b6b',
                          color: '#ff6b6b',
                          backgroundColor: 'transparent',
                          flex: 1,
                          textAlign: 'center'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = 'white';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#ff6b6b';
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <i className="bi bi-info-circle me-2"></i>View Detail
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center w-100" style={{
                  padding: '3rem',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa',
                  borderRadius: '20px',
                  color: isDarkTheme ? '#ffffff' : '#6c757d'
                }}>
                  <i className="bi bi-works display-4 mb-3"></i>
                  <h4>No workshops found.</h4>
                  <p className="mb-0">This student hasn't participated in any workshops yet.</p>
                </div>
              )}
            </div>
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

        .profile-name {
          animation: fadeIn 1s ease-out;
        }

        .profile-role {
          animation: fadeIn 1s ease-out 0.3s;
          animation-fill-mode: both;
        }

        .profile-bio {
          animation: fadeIn 1s ease-out 0.6s;
          animation-fill-mode: both;
        }

        .profile-buttons {
          animation: fadeIn 1s ease-out 0.9s;
          animation-fill-mode: both;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .profile-buttons .btn {
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .profile-buttons .btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        }

        .horizontal-scroll {
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .horizontal-scroll::-webkit-scrollbar {
          display: none;
        }

        .project-card {
          animation: float 6s ease-in-out infinite;
        }

        .project-card:nth-child(2) {
          animation-delay: 0.2s;
        }

        .project-card:nth-child(3) {
          animation-delay: 0.4s;
        }

        .project-card:nth-child(4) {
          animation-delay: 0.6s;
        }

        .project-card:nth-child(5) {
          animation-delay: 0.8s;
        }
      `}</style>
    </div>
  );
};

export default StudentProfile;