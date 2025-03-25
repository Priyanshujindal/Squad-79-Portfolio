import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Experience from './pages/Experience';
import Teams from './pages/Teams';
import TeamMemberProfile from './pages/TeamMemberProfile';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile';
import Mentors from './pages/Mentors';
import TeamProfile from './pages/TeamProfile';
import More from './pages/More';
import LoadingAnimation from './components/LoadingAnimation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const TitleUpdater = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Default title
    let title = 'Squad 79 Portfolio';
    
    // Set page-specific titles
    switch(pathname) {
      case '/':
        title = 'Home | Squad 79 Portfolio';
        break;
      case '/about':
        title = 'About Us | Squad 79 Portfolio';
        break;
      case '/experience':
        title = 'Experience | Squad 79 Portfolio';
        break;
      case '/teams':
        title = 'Our Teams | Squad 79 Portfolio';
        break;
      case '/students':
        title = 'Students | Squad 79 Portfolio';
        break;
      case '/mentors':
        title = 'Mentors | Squad 79 Portfolio';
        break;
      case '/more':
        title = 'More | Squad 79 Portfolio';
        break;
      default:
        // Check if it's a team member profile page
        if (pathname.match(/^\/teams\/\d+$/)) {
          title = 'Team Member | Squad 79 Portfolio';
        } else {
          title = 'Squad 79 Portfolio';
        }
    }
    
    document.title = title;
  }, [pathname]);
  
  return null;
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Router>
        {isLoading ? (
          <LoadingAnimation />
        ) : (
          <>
            <ScrollToTop />
            <TitleUpdater />
            <div className="app">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/teams" element={<Teams />} />
                <Route path="/teams/:id" element={<TeamMemberProfile />} />
                <Route path="/students" element={<Students />} />
                <Route path="/students/:id" element={<StudentProfile />} />
                <Route path="/mentors" element={<Mentors />} />
                <Route path="/team" element={<TeamProfile />} />
                <Route path="/more" element={<More />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </Router>
    </ThemeProvider>
  );
}

export default App;
