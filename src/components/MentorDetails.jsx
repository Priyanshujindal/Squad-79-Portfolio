import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MentorDetails = () => {
  const { id } = useParams();

  // Mock mentor data - in a real app, this would be fetched from an API
  const mentor = {
    id: 1,
    name: "John Doe",
    role: "Senior Software Engineer",
    category: "frontend",
    image: "/images/mentor1.jpg",
    bio: "Experienced frontend developer with 10+ years of experience in React and modern web technologies. Former tech lead at Google and Microsoft.",
    expertise: ["React", "TypeScript", "Next.js", "UI/UX", "Performance Optimization"],
    achievements: [
      "Google Tech Lead (2018-2021)",
      "Microsoft Senior Developer (2015-2018)",
      "Published 20+ technical articles",
      "Speaker at React Conf 2023"
    ],
    students: 150,
    rating: 4.9,
    experience: "15+ years",
    education: [
      "PhD in Computer Science - Stanford University",
      "MS in Software Engineering - MIT",
      "BS in Computer Science - UC Berkeley"
    ],
    publications: [
      {
        title: "Building Scalable Frontend Applications",
        year: 2023,
        link: "https://example.com/publication1"
      },
      {
        title: "Modern React Patterns and Best Practices",
        year: 2022,
        link: "https://example.com/publication2"
      }
    ],
    social: {
      github: "https://github.com/sarahchen",
      linkedin: "https://linkedin.com/in/sarahchen",
      twitter: "https://twitter.com/sarahchen"
    },
    courses: [
      {
        title: "Advanced React Development",
        description: "Learn advanced React patterns and best practices",
        duration: "8 weeks",
        level: "Advanced"
      },
      {
        title: "Frontend Performance Optimization",
        description: "Master techniques for optimizing frontend performance",
        duration: "6 weeks",
        level: "Intermediate"
      }
    ]
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <Link to="/mentors" className="text-white mb-4 d-inline-block">
                <i className="bi bi-arrow-left me-2"></i> Back to Mentors
              </Link>
              <div className="d-flex align-items-center mb-4">
                <img 
                  src={mentor.image} 
                  alt={mentor.name} 
                  className="rounded-circle me-4"
                  style={{ width: '120px', height: '120px', objectFit: 'cover' }}
                />
                <div>
                  <h1 className="display-5 fw-bold mb-2">{mentor.name}</h1>
                  <p className="lead text-danger mb-2">{mentor.role}</p>
                  <div className="d-flex align-items-center">
                    <div className="text-warning me-2">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <span className="text-muted">({mentor.rating})</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Details */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4" style={{ borderRadius: '1rem' }}>
                <h2 className="h3 mb-4">About</h2>
                <p className="mb-0">{mentor.bio}</p>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4">
                <h2 className="h3 mb-4">Expertise</h2>
                <div className="d-flex flex-wrap gap-2">
                  {mentor.expertise.map((skill, index) => (
                    <span key={index} className="badge bg-danger">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4">
                <h2 className="h3 mb-4">Achievements</h2>
                <ul className="list-unstyled">
                  {mentor.achievements.map((achievement, index) => (
                    <li key={index} className="mb-3">
                      <i className="bi bi-check-circle-fill text-danger me-2"></i>
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm">
                <h2 className="h3 mb-4">Publications</h2>
                <ul className="list-unstyled">
                  {mentor.publications.map((pub, index) => (
                    <li key={index} className="mb-3">
                      <a 
                        href={pub.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white text-decoration-none"
                      >
                        <i className="bi bi-journal-text me-2"></i>
                        {pub.title}
                      </a>
                      <span className="text-muted ms-2">({pub.year})</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4" style={{ borderRadius: '1rem' }}>
                <h2 className="h4 mb-3">Experience</h2>
                <p className="mb-0">{mentor.experience}</p>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4" style={{ borderRadius: '1rem' }}>
                <h2 className="h4 mb-3">Education</h2>
                <ul className="list-unstyled">
                  {mentor.education.map((edu, index) => (
                    <li key={index} className="mb-2">
                      <i className="bi bi-mortarboard-fill text-danger me-2"></i>
                      {edu}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm mb-4" style={{ borderRadius: '1rem' }}>
                <h2 className="h4 mb-3">Social Links</h2>
                <div className="d-flex gap-3">
                  <a 
                    href={mentor.social.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white"
                  >
                    <i className="bi bi-github fs-5"></i>
                  </a>
                  <a 
                    href={mentor.social.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white"
                  >
                    <i className="bi bi-linkedin fs-5"></i>
                  </a>
                  <a 
                    href={mentor.social.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-white"
                  >
                    <i className="bi bi-twitter fs-5"></i>
                  </a>
                </div>
              </div>

              <div className="bg-dark text-white p-4 rounded-3 shadow-sm">
                <h2 className="h4 mb-3">Courses</h2>
                <div className="d-grid gap-3">
                  {mentor.courses.map((course, index) => (
                    <div key={index} className="p-3 bg-secondary rounded">
                      <h3 className="h5 mb-2">{course.title}</h3>
                      <p className="text-muted small mb-2">{course.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span className="badge bg-danger">{course.level}</span>
                        <small className="text-muted">{course.duration}</small>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MentorDetails; 