import React from 'react';
import ContactForm from '../components/ContactForm';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

const Mentors = () => {
  const { isDarkTheme } = useTheme();

  // Sample mentor data
  const mentors = [
    {
      id: 1,
      name: 'Kanchan Kumari',
      role: 'Program Manager',
      image: './images/kanchan2.jpg',
      bio: 'Driving Learning & Delivering Excellence | Program Manager at Kalvium.',
      specialties: ['Patience','Confidence','Communication'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/kanchan-kumari-151404250/'
    },
    {
      id: 2,
      name: 'Manav Verma',
      role: 'Tech Mentor',
      image: './images/manav.jpeg',
      bio: 'Full Stack Web Developer  | Skilled in HTML, CSS, JavaScript, Python, React.js, Node.js, Mongo DB.',
      specialties: ['React', 'Python', 'Performance Optimization'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/manav-verma-414927188/'
    },
    {
      id: 3,
      name: 'Aparna Tiwari',
      role: 'BOCS Mentor',
      image: './images/aparna2.jpg',
      bio: 'Dynamic Full Stack Developer (MERN) | Proficient in JavaScript, React.js, Node.js , MongoDB , HTML , CSS |.',
      specialties: ['MERN', 'HTML', 'Node.js'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/aparna-tiwari-642038274/'
    },
    {
      id: 4,
      name: 'Junaid Khan',
      role: 'DBMS Mentor',
      image: './images/junaid.jpg',
      bio: 'Full Stack Web Developer(MERN) | JavaScript | Typescript | React JS | Redux | Node JS | Express JS | MongoDB | MySQL | Java',
      specialties: ['MERN', 'JavaScript', 'Typescript'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/junaidify-khan/'
    },
    {
      id: 5,
      name: 'Rohit Gupta',
      role: 'Full Stack Developer',
      image: './images/rohit.jpg',
      bio: 'Full Stack Developer | Skilled in HTML, CSS, JavaScript, Python, React.js, Node.js, Mongo DB.',
      specialties: ['React', 'Python', 'Performance Optimization'],
      company: 'Kalvium',
      linkedin: 'https://www.linkedin.com/in/rohit-gupta-b70000325/'
    }
  ];

  return (
    <div className={`min-h-screen ${isDarkTheme ? ' text-white' : ' text-dark'}`}>
      {/* Header */}
      <section className={`py-20 ${isDarkTheme ? 'bg-dark' : 'bg-gradient-primary'} `} style={{ backgroundColor: '#ff6b6b' }}>
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>Our Mentors</h1>
            <p className="text-xl mb-10 max-w-2xl mx-auto" style={{ color: '#ffffff' }}>
              Meet the industry experts who guide and support Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal', color: '#ffffff'}}>79</span> in our journey to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mentorship Benefits */}
      <section className={`py-16 ${isDarkTheme ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`text-3xl font-bold mb-8 ${isDarkTheme ? 'text-white' : 'text-black'}`}>Benefits of Our Mentorship</h2>
            <div className="row g-4">
              <div className="col-md-4">
                <div className={`card border-0 shadow-sm h-100 ${isDarkTheme ? 'bg-gray-900 text-black' : 'bg-white text-black'}`} style={{ borderRadius: '1rem' }}>
                  <div className="card-body text-center">
                    <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Expert Guidance</h3>
                    <p>Learn from industry professionals with years of practical experience in their respective fields.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={`card border-0 shadow-sm h-100 ${isDarkTheme ? 'bg-gray-900 text-black' : 'bg-white text-black'}`} style={{ borderRadius: '1rem' }}>
                  <div className="card-body text-center">
                    <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Personalized Guidance</h3>
                    <p>Receive tailored advice and feedback specific to your projects and career growth.</p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className={`card border-0 shadow-sm h-100 ${isDarkTheme ? 'bg-gray-900 text-black' : 'bg-white text-black'}`} style={{ borderRadius: '1rem' }}>
                  <div className="card-body text-center">
                    <div className="bg-danger text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4" style={{ width: '64px', height: '64px' }}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 019-9"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">Network Building</h3>
                    <p>Connect with professionals in the industry and build valuable relationships for your future career.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentors Profiles */}
      <section className={`py-20 ${isDarkTheme ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-3xl font-bold mb-16 text-center ${isDarkTheme ? 'text-white' : 'text-black'}`} style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}>Meet Our Mentors</h2>

          <div className="row g-5">
            {mentors.map(mentor => (
              <div key={mentor.id} className="col-sm-12 col-md-6">
                <div className={`card border-0 shadow h-100 ${isDarkTheme ? 'bg-gray-800 text-black' : 'bg-white text-black'}`} style={{ borderRadius: '1rem', overflow: 'hidden' }}>
                  <div className="row g-0 h-100">
                    <div className="col-4 col-md-4 position-relative" style={{ minHeight: '100%' }}>
                      <img 
                        src={mentor.image} 
                        className="card-img-zoom"
                        alt={mentor.name}
                        style={{ 
                          objectFit: 'cover',
                          width: '100%',
                          height: '100%',
                          position: 'absolute',
                          top: '0',
                          left: '0'
                        }}
                      />
                    </div>
                    <div className="col-8 col-md-8">
                      <div className="card-body">
                        <h3 className={`card-title h4 fw-bold text-black`} style={{ fontSize: 'clamp(1.1rem, 4vw, 1.5rem)' }}>{mentor.name}</h3>
                        <p className="text-danger mb-3" style={{ fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>{mentor.role}</p>
                        <p className={`mb-3 text-black`} style={{ fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)' }}><small>{mentor.company}</small></p>
                        <p className={`mb-4 text-black`} style={{ fontSize: 'clamp(0.8rem, 3vw, 1rem)' }}>{mentor.bio}</p>
                        <div className="mb-4">
                          <h4 className={`text-sm font-semibold mb-2 text-black`} style={{ fontSize: 'clamp(0.85rem, 3vw, 1rem)' }}>Specialties:</h4>
                          <div className="d-flex flex-wrap gap-1 gap-md-2">
                            {mentor.specialties.map((specialty, index) => (
                              <span key={index} className={`badge me-1 me-md-2 mb-2 bg-gray-200 text-black`} style={{ fontSize: 'clamp(0.7rem, 2.5vw, 0.8rem)' }}>{specialty}</span>
                            ))}
                          </div>
                        </div>
                        <a 
                          href={mentor.linkedin} 
                          className="btn d-inline-flex align-items-center justify-content-center gap-2" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          style={{
                            backgroundColor: '#0A66C2',
                            color: 'white',
                            borderRadius: '6px',
                            padding: '7px 14px',
                            fontWeight: '600',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                            border: 'none',
                            fontSize: 'clamp(0.8rem, 3vw, 0.9rem)',
                            minWidth: '120px'
                          }}
                          onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0077B5'}
                          onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#0A66C2'}
                        >
                          <i className="bi bi-linkedin" style={{ fontSize: '1rem' }}></i>
                          LinkedIn
                        </a>
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

export default Mentors;