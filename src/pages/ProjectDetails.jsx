import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock project data - in a real app, this would be fetched from an API
  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce platform with real-time inventory management.",
      image: "/images/project1.jpg",
      category: "web",
      tags: ["React", "Redux", "Chart.js"],
      features: [
        "Responsive design for all devices",
        "Interactive data visualizations",
        "Real-time sales tracking",
        "Inventory management",
        "Customer behavior analytics"
      ],
      technologies: ["React", "Redux", "Chart.js", "Node.js", "Express", "MongoDB"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/example/project",
      teamMembers: [
        { name: "John Doe", role: "Frontend Developer" },
        { name: "Jane Smith", role: "Backend Developer" },
        { name: "Mark Johnson", role: "UI/UX Designer" }
      ],
      description_long: "This e-commerce dashboard provides a comprehensive solution for online store owners to manage their business operations effectively. The dashboard features intuitive visualizations of sales data, inventory levels, and customer behavior metrics.\n\nThe frontend is built with React and Redux, providing a smooth and responsive user experience. Chart.js is used for creating beautiful and interactive data visualizations. The backend is powered by Node.js and Express, with MongoDB as the database.\n\nThe project follows best practices for code organization, state management, and API design. It includes comprehensive testing and documentation to ensure maintainability and scalability."
    },
    {
      id: 2,
      title: "Social Media App",
      description: "A social media platform with real-time messaging and content sharing.",
      image: "/images/project2.jpg",
      category: "web",
      tags: ["React", "Node.js", "Socket.io"],
      features: [
        "User authentication and profiles",
        "Real-time messaging",
        "Post creation and sharing",
        "Notifications system",
        "Friends and connections"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/example/project",
      teamMembers: [
        { name: "Alex Thompson", role: "Full-stack Developer" },
        { name: "Sarah Wilson", role: "Backend Developer" },
        { name: "Michael Brown", role: "Frontend Developer" }
      ],
      description_long: "This social media platform enables users to connect, share content, and communicate in real-time. The application features a modern, intuitive interface built with React, real-time messaging powered by Socket.io, and a robust backend built with Node.js and Express.\n\nUsers can create accounts, customize their profiles, share posts with text and images, and engage with content through likes and comments. The real-time messaging system enables instant communication between users, with features like typing indicators and read receipts.\n\nThe application uses MongoDB for data storage, with AWS S3 for image uploads and storage. The codebase follows a modular architecture, with reusable components and well-defined API endpoints."
    },
    {
      id: 3,
      title: "AI Image Recognition",
      description: "Machine learning model for real-time image recognition and classification.",
      image: "/images/project3.jpg",
      category: "web",
      tags: ["React", "Node.js", "Socket.io"],
      features: [
        "User authentication and profiles",
        "Real-time messaging",
        "Post creation and sharing",
        "Notifications system",
        "Friends and connections"
      ],
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "AWS S3"],
      demoLink: "https://demo-link.com",
      githubLink: "https://github.com/example/project",
      teamMembers: [
        { name: "Alex Thompson", role: "Full-stack Developer" },
        { name: "Sarah Wilson", role: "Backend Developer" },
        { name: "Michael Brown", role: "Frontend Developer" }
      ],
      description_long: "This social media platform enables users to connect, share content, and communicate in real-time. The application features a modern, intuitive interface built with React, real-time messaging powered by Socket.io, and a robust backend built with Node.js and Express.\n\nUsers can create accounts, customize their profiles, share posts with text and images, and engage with content through likes and comments. The real-time messaging system enables instant communication between users, with features like typing indicators and read receipts.\n\nThe application uses MongoDB for data storage, with AWS S3 for image uploads and storage. The codebase follows a modular architecture, with reusable components and well-defined API endpoints."
    },
    // More projects...
  ];

  useEffect(() => {
    // Simulate API fetch
    setLoading(true);
    setTimeout(() => {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) {
    return (
      <div className="py-5 text-center text-white">
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="py-5 text-center text-white">
        <h2>Project not found</h2>
        <Link to="/projects" className="btn btn-danger mt-3">
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Link to="/projects" className="text-white mb-4 d-inline-block">
                <i className="bi bi-arrow-left me-2"></i> Back to Projects
              </Link>
              <h1 className="display-5 fw-bold mb-4">{project.title}</h1>
              <div className="d-flex flex-wrap mb-4">
                {project.tags.map((tag, index) => (
                  <span key={index} className="badge bg-danger me-2 mb-2">{tag}</span>
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
              <div className="img-container mb-4">
                <img 
                  src={project.image} 
                  className="img-fluid rounded-3 shadow-lg card-img-zoom" 
                  alt={project.title}
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
              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4">
                <h2 className="h3 mb-4">Project Overview</h2>
                <p className="mb-0" style={{ whiteSpace: 'pre-line' }}>
                  {project.description_long}
                </p>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm">
                <h2 className="h3 mb-4">Key Features</h2>
                <ul className="list-unstyled">
                  {project.features.map((feature, index) => (
                    <li key={index} className="mb-3">
                      <i className="bi bi-check-circle-fill text-danger me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4">
                <h2 className="h4 mb-3">Technologies Used</h2>
                <div className="d-flex flex-wrap">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-secondary me-2 mb-2">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4">
                <h2 className="h4 mb-3">Project Links</h2>
                <div className="d-grid gap-2">
                  <a 
                    href={project.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-danger"
                  >
                    <i className="bi bi-display me-2"></i> Live Demo
                  </a>
                  <a 
                    href={project.githubLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-light"
                  >
                    <i className="bi bi-github me-2"></i> GitHub Repository
                  </a>
                </div>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm">
                <h2 className="h4 mb-3">Team Members</h2>
                <ul className="list-unstyled">
                  {project.teamMembers.map((member, index) => (
                    <li key={index} className="mb-3">
                      <div className="d-flex align-items-center">
                        <div className="rounded-circle bg-secondary text-white d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>
                          {member.name.charAt(0)}
                        </div>
                        <div>
                          <p className="mb-0 fw-bold">{member.name}</p>
                          <small className="text-secondary">{member.role}</small>
                        </div>
                      </div>
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