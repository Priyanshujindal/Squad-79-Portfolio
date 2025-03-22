import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Teams from './pages/Teams';
import TeamProfile from './pages/TeamProfile';
import Mentors from './pages/Mentors';
import MentorDetails from './components/MentorDetails';
import Students from './pages/Students';
import StudentProfile from './pages/StudentProfile'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const AppContent = () => {
  const { isDarkTheme } = useTheme();

  return (
    <Router>
      <ScrollToTop />
      <div className={isDarkTheme ? 'dark' : 'light'}>
        <div 
          className="min-vh-100 d-flex flex-column"
          style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            transition: 'background-color 0.3s ease, color 0.3s ease'
          }}
        >
          <Navbar />
          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/:id" element={<ProjectDetails />} />
              <Route path="/teams" element={<Teams />} />
              <Route path="/teams/:id" element={<TeamProfile />} />
              <Route path="/mentors" element={<Mentors />} />
              <Route path="/mentors/:id" element={<MentorDetails />} />
              <Route path="/students" element={<Students />} />
              <Route path="/student/:id" element={<StudentProfile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
