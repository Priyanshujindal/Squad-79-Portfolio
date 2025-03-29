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
    image: "/rakshit2.jpg",
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
    image: "/riddhi2.jpg",
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
    image: "/priyansh2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/priyansh-thakur-504a38308?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 13,
    name: "Raghav Sharma",
    role: "React Developer",
    image: "/raghav2.jpg",
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
    image: "/sarthak3.jpg",
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
    image: "/pranay2.jpg",
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
    image: "/pavitr.jpg",
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
  },
  {
    id: 22,
    name: "Pukhraj Soni",
    role: "C++ Developer",
    image: "/pukhraj.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: 'https://www.linkedin.com/in/radhil-narula-6b1947331?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
  },
  {
    id: 23,
    name: "Riya Yadav",
    role: "C++ Developer",
    image: "/riya2.jpg",
    description: "Student of 1st Year at Chitkara",
    linkedin: ' https://www.linkedin.com/in/riya-y-166103324?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ium=android_app',
  }



];

const Students = () => {
  const { isDarkTheme } = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredStudents, setFilteredStudents] = useState(students);

  useEffect(() => {
    // Simulate data loading with longer duration
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // Increased from 1000ms to 2500ms

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Filter students based on search query
    const filtered = students.filter(student =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredStudents(filtered);
  }, [searchQuery]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ 
        background: isDarkTheme ? '#1a1a1a' : '#f8f9fa',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background decorative circles */}
        <div style={{
          position: 'absolute',
          top: '-20px',
          right: '-20px',
          width: '200px',
          height: '200px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.4)' : 'rgba(255, 107, 107, 0.5)'}, transparent 70%)`,
          filter: 'blur(8px)',
          animation: 'pulse 2s infinite'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '-30px',
          left: '-30px',
          width: '250px',
          height: '250px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.4)'}, transparent 70%)`,
          filter: 'blur(8px)',
          animation: 'pulse 2s infinite 0.5s'
        }} />
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '-40px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.5)' : 'rgba(255, 107, 107, 0.6)'}, transparent 70%)`,
          filter: 'blur(8px)',
          animation: 'pulse 2s infinite 1s'
        }} />
        
        <style>
          {`
            @keyframes pulse {
              0% { transform: scale(1); opacity: 0.5; }
              50% { transform: scale(1.1); opacity: 0.8; }
              100% { transform: scale(1); opacity: 0.5; }
            }

            @keyframes run {
              0% { transform: translateX(-150%) rotateY(0deg); }
              49% { transform: translateX(150%) rotateY(0deg); }
              50% { transform: translateX(150%) rotateY(180deg); }
              99% { transform: translateX(-150%) rotateY(180deg); }
              100% { transform: translateX(-150%) rotateY(360deg); }
            }

            @keyframes runLeg {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(45deg); }
              50% { transform: rotate(0deg); }
              75% { transform: rotate(-45deg); }
            }

            @keyframes runArm {
              0%, 100% { transform: rotate(0deg); }
              25% { transform: rotate(-45deg); }
              50% { transform: rotate(0deg); }
              75% { transform: rotate(45deg); }
            }

            @keyframes float {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-5px); }
            }

            .student-runner {
              position: relative;
              width: 120px;
              height: 120px;
              margin: 0 auto;
              perspective: 1000px;
            }

            .student-body {
              position: absolute;
              width: 100%;
              height: 100%;
              transform-style: preserve-3d;
              animation: run 4s infinite linear;
            }

            .student-front, .student-back {
              position: absolute;
              width: 100%;
              height: 100%;
              backface-visibility: hidden;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              animation: float 3s infinite ease-in-out;
            }

            .student-back {
              transform: rotateY(180deg);
            }

            .student-head {
              width: 45px;
              height: 45px;
              background: #ff6b6b;
              border-radius: 50%;
              margin-bottom: 12px;
              position: relative;
            }

            .student-head::after {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background: #ffffff;
              border-radius: 50%;
              top: 15px;
              left: 10px;
              animation: blink 2s infinite;
            }

            .student-head::before {
              content: '';
              position: absolute;
              width: 8px;
              height: 8px;
              background: #ffffff;
              border-radius: 50%;
              top: 15px;
              right: 10px;
              animation: blink 2s infinite;
            }

            .student-body-shape {
              width: 35px;
              height: 45px;
              background: #ff6b6b;
              border-radius: 12px;
              margin-bottom: 12px;
              position: relative;
            }

            .student-body-shape::before {
              content: '';
              position: absolute;
              width: 15px;
              height: 15px;
              background: #ff6b6b;
              border-radius: 50%;
              top: -8px;
              left: 50%;
              transform: translateX(-50%);
            }

            .student-arms {
              position: absolute;
              top: 15px;
              width: 100%;
              display: flex;
              justify-content: space-between;
              padding: 0 20px;
            }

            .student-arm {
              width: 8px;
              height: 25px;
              background: #ff6b6b;
              border-radius: 4px;
              transform-origin: top center;
              animation: runArm 0.8s infinite;
            }

            .student-arm:nth-child(2) {
              animation-delay: 0.4s;
            }

            .student-legs {
              display: flex;
              gap: 8px;
              margin-top: 5px;
            }

            .student-leg {
              width: 12px;
              height: 35px;
              background: #ff6b6b;
              border-radius: 6px;
              transform-origin: top center;
              animation: runLeg 0.8s infinite;
            }

            .student-leg:nth-child(2) {
              animation-delay: 0.4s;
            }

            .student-shoe {
              position: absolute;
              bottom: -5px;
              width: 15px;
              height: 8px;
              background: #ff6b6b;
              border-radius: 3px;
              transform-origin: center;
              animation: runLeg 0.8s infinite;
            }

            .student-leg:nth-child(1) .student-shoe {
              left: -2px;
            }

            .student-leg:nth-child(2) .student-shoe {
              right: -2px;
              animation-delay: 0.4s;
            }

            .loading-text {
              margin-top: 2.5rem;
              text-align: center;
              color: ${isDarkTheme ? '#ffffff' : '#000000'};
              font-size: 1.3rem;
              font-weight: 500;
              animation: fadeInOut 2s infinite;
              position: relative;
            }

            .loading-text::after {
              content: '';
              position: absolute;
              width: 100%;
              height: 2px;
              background: #ff6b6b;
              bottom: -5px;
              left: 0;
              transform: scaleX(0);
              transform-origin: left;
              animation: loadingLine 2s infinite;
            }

            @keyframes blink {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.3; }
            }

            @keyframes loadingLine {
              0% { transform: scaleX(0); }
              50% { transform: scaleX(1); }
              100% { transform: scaleX(0); }
            }

            @keyframes fadeInOut {
              0%, 100% { opacity: 0.5; transform: translateY(0); }
              50% { opacity: 1; transform: translateY(-5px); }
            }
          `}
        </style>

        <div className="text-center" style={{ position: 'relative', zIndex: 1 }}>
          <div className="student-runner">
            <div className="student-body">
              <div className="student-front">
                <div className="student-head"></div>
                <div className="student-arms">
                  <div className="student-arm"></div>
                  <div className="student-arm"></div>
                </div>
                <div className="student-body-shape"></div>
                <div className="student-legs">
                  <div className="student-leg">
                    <div className="student-shoe"></div>
                  </div>
                  <div className="student-leg">
                    <div className="student-shoe"></div>
                  </div>
                </div>
              </div>
              <div className="student-back">
                <div className="student-head"></div>
                <div className="student-arms">
                  <div className="student-arm"></div>
                  <div className="student-arm"></div>
                </div>
                <div className="student-body-shape"></div>
                <div className="student-legs">
                  <div className="student-leg">
                    <div className="student-shoe"></div>
                  </div>
                  <div className="student-leg">
                    <div className="student-shoe"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="loading-text">
            Loading Students...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'} hero-section`} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-4" style={{ color: '#ffffff' }}>Our Students</h1>
              <p className="lead" style={{ color: '#ffffff' }}>Meet the talented individuals shaping the future of technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-4 search-section" style={{ backgroundColor: isDarkTheme ? '#1a1a1a' : '#f8f9fa' , marginTop: '10px' , marginBottom: '10px' }}>
        <style>
          {`
            .search-input::placeholder {
              color: ${isDarkTheme ? '#ffffff' : '#6c757d'} !important;
              opacity: 1 !important;
            }
            .search-input::-webkit-input-placeholder {
              color: ${isDarkTheme ? '#ffffff' : '#6c757d'} !important;
              opacity: 1 !important;
            }
            .search-input:-ms-input-placeholder {
              color: ${isDarkTheme ? '#ffffff' : '#6c757d'} !important;
              opacity: 1 !important;
            }
            .search-input::-moz-placeholder {
              color: ${isDarkTheme ? '#ffffff' : '#6c757d'} !important;
              opacity: 1 !important;
            }
          `}
        </style>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="input-group">
                <span className="input-group-text" style={{ 
                  borderRadius: '25px 0 0 25px',
                  backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                  borderColor: isDarkTheme ? '#404040' : '#dee2e6',
                  color: isDarkTheme ? '#ffffff' : '#000000',
                  padding: '0.75rem 1.25rem'
                }}>
                  <i className="bi bi-search" style={{ color: isDarkTheme ? '#ffffff' : '#000000', fontSize: '1.1rem' }}></i>
                </span>
                <input
                  type="text"
                  className="form-control search-input"
                  placeholder="Search students by name..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    borderRadius: '0',
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    borderColor: isDarkTheme ? '#404040' : '#dee2e6',
                    color: isDarkTheme ? '#ffffff' : '#000000',
                    padding: '0.75rem 1.25rem',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: 'none',
                    ':focus': {
                      borderColor: '#ff6b6b',
                      boxShadow: '0 0 0 0.2rem rgba(255, 107, 107, 0.25)'
                    }
                  }}
                />
                <button
                  type="button"
                  className="btn"
                  onClick={() => setSearchQuery('')}
                  style={{
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    borderColor: isDarkTheme ? '#404040' : '#dee2e6',
                    color: isDarkTheme ? '#ffffff' : '#000000',
                    borderRadius: '0 25px 25px 0',
                    padding: '0.75rem 1.25rem',
                    transition: 'all 0.3s ease',
                    opacity: searchQuery ? '1' : '0.5',
                    cursor: searchQuery ? 'pointer' : 'default',
                    fontSize: '1.1rem'
                  }}
                  onMouseEnter={(e) => {
                    if (searchQuery) {
                      e.currentTarget.style.backgroundColor = isDarkTheme ? '#404040' : '#f8f9fa';
                      e.currentTarget.style.color = '#ff6b6b';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = isDarkTheme ? '#2d2d2d' : '#ffffff';
                    e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#000000';
                    e.currentTarget.style.opacity = searchQuery ? '1' : '0.5';
                  }}
                >
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
              {searchQuery && (
                <p className="mt-2 mb-0" style={{ 
                  color: isDarkTheme ? '#ffffff' : '#6c757d',
                  fontSize: '0.9rem'
                }}>
                  Found {filteredStudents.length} student{filteredStudents.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Student Cards */}
      <section className={`py-5 ${isDarkTheme ? 'bg-dark' : 'bg-light'}`}>
        <div className="container">
          <div className="row g-4">
            {filteredStudents.map(student => (
              <div key={student.id} className="col-lg-4">
                <div className="card h-100 border-0 shadow-lg student-card" style={{ 
                  borderRadius: '20px',
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                  color: isDarkTheme ? '#ffffff' : '#000000',
                  boxShadow: isDarkTheme 
                    ? '0 4px 6px rgba(255, 107, 107, 0.2), 0 1px 3px rgba(0, 0, 0, 0.2)' 
                    : '0 4px 6px rgba(255, 107, 107, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
                  border: `1px solid ${isDarkTheme ? '#2d2d2d' : '#e9ecef'}`,
                  position: 'relative',
                  backdropFilter: 'blur(10px)',
                  background: isDarkTheme 
                    ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                    : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                  e.currentTarget.style.boxShadow = isDarkTheme
                    ? '0 12px 20px rgba(255, 107, 107, 0.3), 0 4px 8px rgba(0, 0, 0, 0.3)'
                    : '0 12px 20px rgba(255, 107, 107, 0.2), 0 4px 8px rgba(0, 0, 0, 0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = isDarkTheme
                    ? '0 4px 6px rgba(255, 107, 107, 0.2), 0 1px 3px rgba(0, 0, 0, 0.2)'
                    : '0 4px 6px rgba(255, 107, 107, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)';
                }}
                >
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.4)' : 'rgba(255, 107, 107, 0.5)'}, transparent 70%)`,
                    zIndex: 0,
                    filter: 'blur(8px)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-30px',
                    left: '-30px',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.4)'}, transparent 70%)`,
                    zIndex: 0,
                    filter: 'blur(8px)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-40px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${isDarkTheme ? 'rgba(255, 107, 107, 0.5)' : 'rgba(255, 107, 107, 0.6)'}, transparent 70%)`,
                    zIndex: 0,
                    filter: 'blur(8px)'
                  }} />
                  <div className="img-container" style={{ 
                    height: '280px',
                    overflow: 'hidden',
                    position: 'relative',
                    borderRadius: '20px 20px 0 0',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    backgroundColor: isDarkTheme ? '#2d2d2d' : '#ffffff',
                    borderBottom: `1px solid ${isDarkTheme ? '#2d2d2d' : '#e9ecef'}`,
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                    background: 'linear-gradient(45deg, #ff6b6b, #ff8e8e)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: `linear-gradient(45deg, ${isDarkTheme ? 'rgba(255, 107, 107, 0.3)' : 'rgba(255, 107, 107, 0.2)'}, transparent)`,
                      zIndex: 1,
                      opacity: 0,
                      transition: 'opacity 0.3s ease'
                    }} />
                    <img 
                      src={student.image} 
                      className="card-img-top"
                      alt={student.name}
                      style={{ 
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: 'scale(1.02)',
                        border: '1px solid transparent',
                        borderRadius: '1rem',
                        filter: 'brightness(1.1) contrast(1.1)'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) brightness(1.2)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1.02) brightness(1.1)'}
                    />
                  </div>
                  <div className="card-body p-4 text-center" style={{
                    position: 'relative',
                    background: isDarkTheme 
                      ? 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)'
                      : 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    backdropFilter: 'blur(5px)'
                  }}>
                    <div style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                      height: '4px',
                      background: 'linear-gradient(90deg, #ff6b6b, #ff8e8e, #ff6b6b)',
                      backgroundSize: '200% 100%',
                      animation: 'gradient 3s linear infinite',
                      borderRadius: '20px 20px 0 0',
                      boxShadow: '0 2px 4px rgba(255, 107, 107, 0.3)'
                    }} />
                    <style>
                      {`
                        @keyframes gradient {
                          0% { background-position: 0% 50%; }
                          50% { background-position: 100% 50%; }
                          100% { background-position: 0% 50%; }
                        }
                      `}
                    </style>
                    <h3 className="h4 mb-3 fw-bold" style={{ 
                      color: isDarkTheme ? '#ffffff' : '#000000',
                      lineHeight: '1.4',
                      padding: '0.25rem 0',
                      fontSize: '1.4rem',
                      letterSpacing: '0.5px',
                      marginTop: '0.5rem'
                    }}>{student.name}</h3>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      marginBottom: '1.5rem',
                      flexWrap: 'wrap'
                    }}>
                      <div className="role-badge" style={{
                        padding: '0.4rem 0.75rem',
                        backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                        borderRadius: '20px',
                        border: `1px solid ${isDarkTheme ? '#404040' : '#e9ecef'}`,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <i className="bi bi-briefcase-fill" style={{ color: '#ff6b6b' }}></i>
                        <span style={{ 
                          color: isDarkTheme ? '#ffffff' : '#000000',
                          fontWeight: '500',
                          fontSize: '0.9rem'
                        }}>{student.role}</span>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center" style={{ marginTop: '1rem', padding: '0.25rem 0' }}>
                      <Link 
                        to={`/students/${student.id}`} 
                        className="btn"
                        style={{
                          flex: "1",
                          marginRight: "1rem",
                          fontSize: '0.95rem',
                          whiteSpace: 'nowrap',
                          border: `2px solid ${isDarkTheme ? '#ff6b6b' : '#ff6b6b'}`,
                          color: isDarkTheme ? '#ff6b6b' : '#ff6b6b',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          borderRadius: '30px',
                          backgroundColor: 'transparent',
                          padding: '10px 20px',
                          fontWeight: '500'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = isDarkTheme ? '#ff6b6b' : '#ff6b6b';
                          e.currentTarget.style.transform = 'translateY(0)';
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
                          padding: '10px 20px',
                          borderRadius: '30px',
                          fontSize: '0.95rem',
                          color: isDarkTheme ? '#ffffff' : '#000000',
                          borderColor: '#ff6b6b',
                          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          fontWeight: '500',
                          borderWidth: '2px'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = '#ff6b6b';
                          e.currentTarget.style.color = '#ffffff';
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                          e.currentTarget.style.color = isDarkTheme ? '#ffffff' : '#000000';
                          e.currentTarget.style.transform = 'translateY(0)';
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
                    backgroundColor: isDarkTheme ? '#1a1a1a' : '#ffffff',
                    color: isDarkTheme ? '#ffffff' : '#000000'
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
                        marginRight: '20px',
                        border: `3px solid ${isDarkTheme ? '#ff6b6b' : '#ff6b6b'}`
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
                        <h3 className="h4 mb-2 fw-bold" style={{ color: isDarkTheme ? '#ffffff' : '#000000' }}>{student.name}</h3>
                        <p className="text-danger mb-3 fw-medium" style={{ color: isDarkTheme ? '#ff6b6b' : '#dc3545' }}>{student.role}</p>
                        <p className="mb-0" style={{ fontSize: '0.9rem', color: isDarkTheme ? '#b3b3b3' : '#6c757d' }}>{student.description}</p>
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
