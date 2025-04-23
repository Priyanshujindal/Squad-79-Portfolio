import React from 'react';
import { useParams, Link } from 'react-router-dom';
import rakshamImage from '../assets/img/raksham.jpg';

const TeamProfile = () => {
  const { id } = useParams();
  
  // This would typically come from an API or database
  const people = [
    {
      id: 1,
      name: "Priyanshu Jindal",
      role: "Team Lead",
      image: "/images/priyanshu.jpg",
      description: "Experienced team lead with expertise in project management and technical leadership.",
      skills: ["Project Management", "Technical Leadership", "Team Building"],
      bio: "Experienced team lead with expertise in project management and technical leadership",
      experience: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      education: "B.tech in Computer Science, Chitkara University"
    },
    {
      id: 2,
      name: "Raksham Sharma",
      role: "Frontend Developer",
      image: "/images/raksham.jpg",
      description: "Creative frontend developer passionate about creating beautiful and user-friendly interfaces.",
      skills: ["React", "JavaScript", "CSS", 'react'],
      bio: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
      experience: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      education: "B.tech in Computer Science, Chitkara University"
    },
    {
      id: 3,
      name: "Rajat Pandi",
      role: "Backend Developer",
      image: "/images/rajat2.jpg",
      description: "Backend expert focused on scalable server architecture and database optimization.",
      skills: ["Python", "Database Design"],
      bio: "Backend expert focused on scalable server architecture and database optimization.",
      experience: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      education: "B.tech in Computer Science, Chitkara University"
    },
    {
      id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/images/riya.jpg",
      description: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
      skills: ["UI Design", "User Research", "Prototyping"],
      bio: "Creating intuitive, user-centered designs that combine functionality and visual appeal for optimal user experiences.",
      experience: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      education: "B.tech in Computer Science, Chitkara University"
    },
    {
      id: 5,
      name: "Rehat Singh",
      role: "UI/UX Designer",
      image: "/images/rehat.jpg",
      description: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
      skills: ["UI/UX Design", "User Research", "Prototyping"],
      bio: "Designing clean, intuitive interfaces that prioritize user needs, ensuring a seamless and enjoyable experience across digital platforms",
      experience: [
        "Worked on multiple projects",
        "Knows about the latest technologies",
        "Good at problem solving"
      ],
      education: "B.tech in Computer Science, Chitkara University"
    }
  ];

  const person = people.find(p => p.id === parseInt(id));

  if (!person) {
    return (
      <div className="container py-5">
        <div className="text-center">
          <h2>Team Member Not Found</h2>
          <Link to="/teams" className="btn btn-danger mt-3">Back to Team</Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="profile-image-container">
                <img 
                  src={person.image} 
                  alt={person.name}
                  className="profile-image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <h1 className="display-4 fw-bold mb-3">{person.name}</h1>
              <p className="lead text-danger mb-4">{person.role}</p>
              <p className="mb-4">{person.bio}</p>
              <Link to="/teams" className="btn btn-outline-light">
                <i className="bi bi-arrow-left me-2"></i>Back to Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Details Section */}
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="h3 mb-4">Experience</h2>
              <ul className="list-unstyled">
                {person.experience.map((exp, index) => (
                  <li key={index} className="mb-3">
                    {exp.toLowerCase().includes('mobile') || exp.toLowerCase().includes('phone') ? (
                      <i className="bi bi-telephone-fill text-danger me-2"></i>
                    ) : exp.toLowerCase().includes('email') ? (
                      <i className="bi bi-envelope-fill text-danger me-2"></i>
                    ) : (
                      <i className="bi bi-check-circle-fill text-danger me-2"></i>
                    )}
                    {exp}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-4">
              <div className="card border-0 shadow-sm" style={{ borderRadius: '1rem' }}>
                <div className="card-body">
                  <h3 className="h4 mb-4">Skills</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {person.skills.map((skill, index) => (
                      <span key={index} className="badge bg-danger">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <h3 className="h4 mt-4 mb-3">Education</h3>
                  <p className="mb-0">{person.education}</p>
                </div>
              </div>
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
          border: 5px solid #ff7e5f;
        }

        .profile-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </div>
  );
};

export default TeamProfile; 