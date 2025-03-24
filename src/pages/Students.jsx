import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Link } from 'react-router-dom';

const students = [
  {
    id: 1,
      name: "Priyanshu Jindal",
      role: "Frontend Developer",
      image: "/priyanshu.jpg",
      description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/priyanshu-jindal-18a103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  },
  {
    id: 2,
    name: "Raksham Sharma",
    role: "Frontend Developer",
    image: "/images/raksham.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/raksham-sharma-715629330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"'
  },
  {
    id: 3,
    name: "Rajatvir Pandhi",
    role: "Backend Developer",
    image: "/images/rajat3.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'http://www.linkedin.com/in/rajatvir-pandhi-444585357'
  },
  {
    id: 4,
      name: "Riya Garg",
      role: "UI/UX Designer",
      image: "/images/riya.jpg",
      description: "Student of 1st Year at Chitkara",
     linkedin: 'https://www.linkedin.com/in/riya-garg-98a09a334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 5,
    name: "Rehat Singh",
    role: "UI/UX Designer",
    image: "/images/rehat.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    id: 6,
    name: "Parth Doomra",
    role: "UI/UX Designer",
    image: "/images/pasth.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/parth-doomra-444585357',
  },
  {
    id: 7,
    name: "Ramanpreet Singh",
    role: "UI/UX Designer",
    image: "/images/raman2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    id: 8,
    name: "Rakshit",
    role: "UI/UX Designer",
    image: "/images/rakshit.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/rehat-singh-jagirdar-9a6881254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
  },
  {
    id: 9,
    name: "Shivani Jindal",
    role: "UI/UX Designer",
    image: "/images/shivani.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/shivani-jindal-7b6066329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 10,
    name: "Riddhi Garg",
    role: "Figma",
    image: "/images/riddhi.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/riddhi-garg-4951b234b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 11,
    name: "Pranav Arora",
    role: "Hacker",
    image: "/images/pranav2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/pranav-arora-?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 12,
    name: "Priyansh Thakur",
    role: "Frontend Developer",
    image: "/images/priyansh.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/priyansh-thakur-504a38308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 13,
    name: "Raghav Sharma",
    role: "React Developer",
    image: "/images/raghav.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/raghav-sharma-9861a6347?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 14,
    name: "Rishab Bansal",
    role: "Dance Enthusiast",
    image: "/images/rishab.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/rahul-verma-7b6066329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 15,
    name: "Piyanshi",
    role: "Frontend Developer",
    image: "/images/priyanshi.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/piyanshi-56ab00330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 16,
    name: "Sarthak Khurana",
    role: "UI/UX Designer",
    image: "/images/sarthak2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/sarthak-khurana-279399325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 17,
    name: "Sanchita Bhandari",
    role: "Frontend Developer",
    image: "/images/sanchita.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/sanchita-bhandari-901207332?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 18,
    name: "Pranay Obero",
    role: "Designer",
    image: "/images/pranay.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/pranay-oberoi-058747312?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 19,
    name: "Prachi Behal",
    role: "Python Developer",
    image: "/images/prachi.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/prachi-behal-36944a331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 20,
    name: "Pavitar Kumar",
    role: "Java Developer",
    image: "/images/team2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/pavitar-kumar-915b79325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 21,
    name: "Radhil Narula",
    role: "C++ Developer",
    image: "/images/radil.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/radhil-narula-6b1947331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  }



];

const Students = () => {
  const { isDarkTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-danger" role="status" style={{ width: '5rem', height: '5rem' }}>
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'}`} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>Our Students</h1>
              <p className="lead" style={{ color: '#ffffff' }}>Meet the talented individuals shaping the future of technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Cards */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
        <div className="container">
          <div className="row g-4">
            {students.map(student => (
              <div key={student.id} className="col-lg-4">
                <div className="card h-100 border-0 shadow-lg" style={{ 
                  borderRadius: '15px',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#ffffff',
                  color: '#000000'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div className="img-container" style={{ 
                    height: '250px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '15px',
                    transition: 'all 0.3s ease',
                    backgroundColor: '#ffffff'
                  }}>
                    <img 
                      src={student.image} 
                      className="card-img-top"
                      alt={student.name}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'transform 0.3s ease',
                        transform: 'scale(1.02)',
                        border: '1px solid transparent',
                        borderRadius: '1rem'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    />
                  </div>
                  <div className="card-body p-4 text-center">
                    <h3 className="h4 mb-2 fw-bold" style={{ color: '#000000' }}>{student.name}</h3>
                    <p className="text-danger mb-2 fw-medium" style={{ color: '#000000' }}>{student.role}</p>
                    <p className="text-muted mb-4" style={{ fontSize: '0.9rem', color: '#000000' }}>{student.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link 
                        to={`/students/${student.id}`} 
                        className="btn"
                        style={{
                          flex: "1",
                          marginRight: "1rem",
                          fontSize: '0.9rem',
                          whiteSpace: 'nowrap',
                          border: '1px solid #ff6b6b',
                          color: '#ff6b6b',
                          transition: 'all 0.3s ease',
                          borderRadius: '25px',
                          backgroundColor: 'transparent'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = 'white';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#ff6b6b';
                        }}
                      >
                        View Profile
                      </Link>
                      <a 
                        href={student.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-danger"
                        style={{
                          padding: '8px 20px',
                          borderRadius: '25px',
                          fontSize: '0.9rem',
                          color: '#000000',
                          borderColor: '#ff6b6b',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = '#000000';
                        }}
                      >
                        <i className="bi bi-linkedin me-2"></i>LinkedIn
                      </a>
                    </div>
                  </div>
                  <div className="card-body p-4 hover-content" style={{
                    opacity: 0,
                    visibility: 'hidden',
                    transition: 'all 0.3s ease',
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    padding: '20px',
                    backgroundColor: '#ffffff',
                    color: '#000000'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = 1;
                    e.currentTarget.style.visibility = 'visible';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = 0;
                    e.currentTarget.style.visibility = 'hidden';
                  }}
                  >
                    <div className="d-flex align-items-center">
                      <div className="profile-image" style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        marginRight: '20px'
                      }}>
                        <img 
                          src={student.image} 
                          alt={student.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover'
                          }}
                        />
                      </div>
                      <div className="profile-info">
                        <h3 className="h4 mb-2 fw-bold" style={{ color: '#000000' }}>{student.name}</h3>
                        <p className="text-danger mb-3 fw-medium" style={{ color: '#000000' }}>{student.role}</p>
                        <p className="mb-0" style={{ fontSize: '0.9rem', color: '#000000' }}>{student.description}</p>
                      </div>
                    </div>
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

export default Students;
