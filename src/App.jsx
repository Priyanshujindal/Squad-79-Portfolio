import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react"
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingAnimation from './components/LoadingAnimation';
import Chatbot from './components/Chatbot';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

// Lazy load all pages to improve initial loading performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Experience = lazy(() => import('./pages/Experience'));
const Teams = lazy(() => import('./pages/Teams'));
const TeamMemberProfile = lazy(() => import('./pages/TeamMemberProfile'));
const Students = lazy(() => import('./pages/Students'));
const StudentProfile = lazy(() => import('./pages/StudentProfile'));
const Mentors = lazy(() => import('./pages/Mentors'));
const TeamProfile = lazy(() => import('./pages/TeamProfile'));
const More = lazy(() => import('./pages/More'));
const ProjectDetails = lazy(() => import('./pages/ProjectDetails'));
const NotFound = lazy(() => import('./pages/NotFound'));
const OfflinePage = lazy(() => import('./pages/OfflinePage'));

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
      case '/404':
      case '/404-offline':
        title = 'Page Not Found | Squad 79 Portfolio';
        break;
      default:
        // Check if it's a team member profile page
        if (pathname.match(/^\/teams\/\d+$/)) {
          title = 'Team Member | Squad 79 Portfolio';
        } else if (pathname.match(/^\/more\/\d+$/)) {
          title = 'Student Profile | Squad 79 Portfolio';
        } else {
          title = 'Squad 79 Portfolio';
        }
    }
    
    document.title = title;
  }, [pathname]);
  
  return null;
};

// Component to monitor network status
const NetworkStatusMonitor = () => {
  useEffect(() => {
    // Function to show offline toast message
    const showOfflineToast = () => {
      // We're showing a toast message when offline
      const existingToast = document.getElementById('offline-toast');
      if (existingToast) return; // Don't create multiple toasts

      const toast = document.createElement('div');
      toast.id = 'offline-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = '#ff6b6b';
      toast.style.color = 'white';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '5px';
      toast.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
      toast.style.zIndex = '9999';
      toast.style.fontFamily = 'Poppins, sans-serif';
      toast.innerHTML = '<i class="bi bi-wifi-off me-2"></i>You are offline. Loading offline mode...';
      document.body.appendChild(toast);

      // After showing the message, redirect to offline page
      setTimeout(() => {
        // Only redirect if still offline and not already on the offline or 404 page
        if (!navigator.onLine && 
            !window.location.pathname.includes('404') && 
            !window.location.pathname.includes('offline')) {
          window.location.href = '/404-offline';
        }
        // Remove the toast after 5 seconds
        setTimeout(() => {
          if (toast.parentNode) {
            toast.parentNode.removeChild(toast);
          }
        }, 5000);
      }, 2000);
    };

    // Function to show back online toast
    const showOnlineToast = () => {
      const existingToast = document.getElementById('online-toast');
      if (existingToast) return; // Don't create multiple toasts

      const toast = document.createElement('div');
      toast.id = 'online-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '20px';
      toast.style.left = '50%';
      toast.style.transform = 'translateX(-50%)';
      toast.style.background = '#38B2AC'; // Teal color
      toast.style.color = 'white';
      toast.style.padding = '10px 20px';
      toast.style.borderRadius = '5px';
      toast.style.boxShadow = '0 3px 10px rgba(0,0,0,0.2)';
      toast.style.zIndex = '9999';
      toast.style.fontFamily = 'Poppins, sans-serif';
      toast.innerHTML = '<i class="bi bi-wifi me-2"></i>You are back online!';
      document.body.appendChild(toast);

      // Remove the toast after 5 seconds
      setTimeout(() => {
        if (toast.parentNode) {
          toast.parentNode.removeChild(toast);
        }
      }, 5000);
    };

    // Event listeners for online/offline status
    window.addEventListener('offline', showOfflineToast);
    window.addEventListener('online', showOnlineToast);

    // Check initial status
    if (!navigator.onLine) {
      showOfflineToast();
    }

    // Cleanup
    return () => {
      window.removeEventListener('offline', showOfflineToast);
      window.removeEventListener('online', showOnlineToast);
    };
  }, []);

  return null;
};

// Component to handle the App routing with immediate rendering for NotFound
const AppRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    // Check if we should skip loading animation
    const skipLoading = () => {
      const path = location.pathname;
      
      // Skip loading for any invalid routes that will show 404
      const validRoutes = ['/', '/about', '/experience', '/teams', '/students', 
                          '/mentors', '/team', '/more', '/project'];
      
      // Check if path is a valid route or starts with a valid route followed by a parameter
      const isValidRoute = validRoutes.some(route => 
        path === route || path.startsWith(`${route}/`)
      );
      
      // Skip loading if not a valid route (404 will show)
      if (!isValidRoute) {
        return true;
      }
      
      // Skip loading for explicit 404 pages
      if (path.includes('404')) {
        return true;
      }
      
      // Skip loading when coming from chatbot profile view
      const urlParams = new URLSearchParams(location.search);
      if (urlParams.get('chatbot') === 'true') {
        return true;
      }
      
      return false;
    };

    if (skipLoading()) {
      // Skip loading animation immediately
      setIsLoading(false);
    } else {
      // Otherwise use normal loading animation
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [location]);

  // If it's a 404 page, render immediately without loading
  if (location.pathname.includes('404') || location.pathname === '*') {
    return (
      <Suspense fallback={<LoadingAnimation />}>
        <Navbar />
        <NotFound />
        <Footer />
        <Chatbot />
      </Suspense>
    );
  }

  // For all other routes
  return isLoading ? (
    <LoadingAnimation />
  ) : (
    <Suspense fallback={<LoadingAnimation />}>
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
        <Route path="/more/:id" element={<StudentProfile />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/404-offline" element={<OfflinePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <Chatbot />
    </Suspense>
  );
};

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <TitleUpdater />
        <NetworkStatusMonitor />
        <div className="app">
          <AppRoutes />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
