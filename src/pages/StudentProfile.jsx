import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const students = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    image: 'https://picsum.photos/id/1005/400/400',
    role: 'Full Stack Developer',
    description: 'Passionate about building scalable web applications.',
    linkedin: 'https://www.linkedin.com'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    image: 'https://picsum.photos/id/1011/400/400',
    role: 'Frontend Developer',
    description: 'Specializes in creating beautiful and responsive UIs.',
    linkedin: 'https://www.linkedin.com'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    image: 'https://picsum.photos/id/1027/400/400',
    role: 'Backend Developer',
    description: 'Expert in building robust server-side applications.',
    linkedin: 'https://www.linkedin.com'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    image: 'https://picsum.photos/id/1025/400/400',
    role: 'UI/UX Designer',
    description: 'Creates intuitive and user-friendly interfaces.',
    linkedin: 'https://www.linkedin.com'
  },
  {
    id: 5,
    name: 'David Chen',
    email: 'david@example.com',
    image: 'https://picsum.photos/id/177/400/400',
    role: 'DevOps Engineer',
    description: 'Ensures smooth deployment and infrastructure management.',
    linkedin: 'https://www.linkedin.com'
  }
];

const StudentProfile = () => {
  const { id } = useParams();
  const { isDarkTheme } = useTheme();
  const student = students.find(s => s.id === parseInt(id));

  if (!student) {
    return (
      <div className="container">
        <div className="text-center">
          <h2>Student Not Found</h2>
          <Link to="/students" className="btn btn-danger mt-3">Back to Students</Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-vh-100 ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
      <section className={`py-3 ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="profile-image-container" style={{
                width: '200px',
                height: '200px',
                margin: '0 auto',
                position: 'relative',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '5px solid #ff7e5f',
                backgroundColor: isDarkTheme ? '#333333' : '#ffffff'
              }}>
                <img 
                  src={student.image} 
                  alt={student.name}
                  className="profile-image"
                />
              </div>
            </div>
            <div className="col-lg-8">
              <div className="student-info" style={{
                marginTop: '0',
                marginBottom: '0',
                marginLeft: '-15px',
                marginRight: '-15px'
              }}>
                <h1 className="display-4 fw-bold mb-1" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>{student.name}</h1>
                <p className="lead mb-1" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>{student.role}</p>
                <p style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>{student.description}</p>
                <div className="d-flex align-items-center mt-2">
                  <a 
                    href={student.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-light me-2"
                    style={{
                      padding: '5px 12px',
                      fontSize: '0.85rem'
                    }}
                  >
                    <i className="bi bi-linkedin me-1"></i>LinkedIn
                  </a>
                  <Link to="/students" className="btn btn-outline-light"
                    style={{
                      padding: '5px 12px',
                      fontSize: '0.85rem'
                    }}
                  >
                    <i className="bi bi-arrow-left me-1"></i>Back to Students
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">{`
        .profile-image-container {
          width: 200px;
          height: 200px;
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

        .btn-outline-light {
          color: ${isDarkTheme ? '#ffffff' : '#000000'};
          border-color: ${isDarkTheme ? '#ffffff' : '#000000'};
        }

        .btn-outline-light:hover {
          background-color: ${isDarkTheme ? '#ffffff' : '#000000'};
          color: ${isDarkTheme ? '#000000' : '#ffffff'};
        }

        .text-danger {
          color: #ff7e5f !important;
        }

        .bi-check-circle-fill {
          color: #ff7e5f;
        }
      `}</style>
    </div>
  );
};

export default StudentProfile;
