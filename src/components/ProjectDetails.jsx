import React from 'react';
import { useParams, Link } from 'react-router-dom';

const ProjectDetails = () => {
  const { id } = useParams();
  
  // Mock project data - replace with actual data from API
  const project = {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive e-commerce dashboard with real-time analytics, inventory management, and order processing capabilities.",
    image: "/images/project1.jpg",
    category: "Full Stack",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    features: [
      "Real-time analytics dashboard",
      "Inventory management system",
      "Order processing workflow",
      "Customer management",
      "Sales reporting"
    ],
    team: [
      { name: "John Doe", role: "Frontend Developer" },
      { name: "Jane Smith", role: "Backend Developer" },
      { name: "Mike Johnson", role: "UI/UX Designer" }
    ],
    mentor: {
      name: "Dr. Sarah Wilson",
      role: "Senior Software Engineer",
      image: "/images/mentor1.jpg"
    },
    timeline: "3 months",
    status: "Completed",
    github: "https://github.com/kalvium/ecommerce-dashboard",
    demo: "https://demo.ecommerce-dashboard.com"
  };

  return (
    <div className="project-details">
      {/* Hero Section */}
      <section className="hero bg-dark-accent py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="hero-title mb-4">{project.title}</h1>
              <p className="hero-description mb-4">{project.description}</p>
              <div className="d-flex gap-3">
                <Link to={project.github} className="btn btn-primary" target="_blank">
                  <i className="bi bi-github me-2"></i>View on GitHub
                </Link>
                <Link to={project.demo} className="btn btn-outline-light" target="_blank">
                  <i className="bi bi-play-circle me-2"></i>Live Demo
                </Link>
              </div>
            </div>
            <div className="col-lg-6">
              <img src={project.image} alt={project.title} className="img-fluid rounded-custom shadow-custom" />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            {/* Main Content */}
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title mb-4">Project Overview</h2>
                  <div className="mb-4">
                    <h5 className="text-primary mb-3">Technologies Used</h5>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="badge bg-primary">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h5 className="text-primary mb-3">Key Features</h5>
                    <ul className="list-unstyled">
                      {project.features.map((feature, index) => (
                        <li key={index} className="mb-2">
                          <i className="bi bi-check-circle-fill text-primary me-2"></i>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Team Section */}
              <div className="card mb-4">
                <div className="card-body">
                  <h2 className="card-title mb-4">Project Team</h2>
                  <div className="row">
                    {project.team.map((member, index) => (
                      <div key={index} className="col-md-4 mb-3">
                        <div className="team-card">
                          <div className="team-body">
                            <h5 className="team-name">{member.name}</h5>
                            <p className="team-role">{member.role}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="col-lg-4">
              {/* Project Info */}
              <div className="card mb-4">
                <div className="card-body">
                  <h5 className="card-title mb-4">Project Information</h5>
                  <ul className="list-unstyled">
                    <li className="mb-3">
                      <i className="bi bi-calendar-event text-primary me-2"></i>
                      <strong>Timeline:</strong> {project.timeline}
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-check-circle text-primary me-2"></i>
                      <strong>Status:</strong> {project.status}
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-tag text-primary me-2"></i>
                      <strong>Category:</strong> {project.category}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Mentor Info */}
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title mb-4">Project Mentor</h5>
                  <div className="d-flex align-items-center mb-3">
                    <img src={project.mentor.image} alt={project.mentor.name} className="rounded-circle me-3" style={{ width: '60px', height: '60px', objectFit: 'cover' }} />
                    <div>
                      <h6 className="mb-0">{project.mentor.name}</h6>
                      <small className="text-muted">{project.mentor.role}</small>
                    </div>
                  </div>
                  <Link to={`/mentors/${project.mentor.id}`} className="btn btn-outline-primary w-100">
                    View Mentor Profile
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;