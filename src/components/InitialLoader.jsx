import React, { useEffect, useState, useRef } from 'react';

const InitialLoader = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [iframeMounted, setIframeMounted] = useState(false);
  const iframeRef = useRef(null);

  // Window onload event to ensure everything is fully loaded
  useEffect(() => {
    // Function to handle window load
    const handleLoad = () => {
      console.log('Window fully loaded!');
      setWindowLoaded(true);
    };
    
    // Check if window is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      // Add event listener for window load
      window.addEventListener('load', handleLoad);
    }
    
    // Also listen for DOMContentLoaded which happens earlier
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM content loaded!');
    });
    
    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  // Progress bar logic
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setShowLoader(false);
          }, 500);
          return 100;
        }
        return prevProgress + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Add the iframe once component mounts
  useEffect(() => {
    // Wait a bit for component to render
    setTimeout(() => {
      setIframeMounted(true);
    }, 1000);
  }, []);

  // Function to play sound via YouTube iframe
  const playSound = () => {
    if (iframeRef.current) {
      try {
        // Send play message to iframe
        iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
        setSoundPlayed(true);
      } catch (error) {
        console.error('Error playing YouTube sound:', error);
        // Use alert as fallback
        alert('Netflix sound effect played!');
        setSoundPlayed(true);
      }
    } else {
      console.error('YouTube iframe not ready');
      // Use alert as fallback
      alert('Netflix sound effect played!');
      setSoundPlayed(true);
    }
  };

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Hidden YouTube iframe */}
      {iframeMounted && (
        <div style={{ display: 'none' }}>
          <iframe
            ref={iframeRef}
            width="1"
            height="1"
            src="https://www.youtube.com/embed/GV3HUDMQ-F8?enablejsapi=1&autoplay=0&controls=0"
            title="Netflix Sound"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      )}

      <div className="text-center">
        <div className="mb-8">
          <div className="flex items-baseline justify-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-4xl font-bold">Squad</span>
            <span className="text-white mx-1.5 text-4xl font-bold" style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal'}}>79</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-red-400 to-red-500 text-4xl font-bold">Portfolio</span>
          </div>
        </div>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-red-500 via-red-400 to-red-500 transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="mt-4 text-white">
          {progress < 20 ? (
            <span>Loading Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal'}}>79</span>...</span>
          ) : progress < 40 ? (
            'Initializing components...'
          ) : progress < 60 ? (
            'Loading assets...'
          ) : progress < 80 ? (
            'Preparing content...'
          ) : (
            'Almost there...'
          )}
        </p>
        
        {/* Sound control */}
        <div className="mt-6 text-center">
          {soundPlayed ? (
            <div className="text-green-500 flex items-center justify-center">
              <span className="mr-2 text-2xl">✓</span> 
              <span className="text-lg">Netflix Intro Played</span>
            </div>
          ) : (
            <button 
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto shadow-lg"
              onClick={playSound}
              disabled={!iframeMounted}
            >
              <span className="mr-2 text-xl">🔊</span> 
              <span className="font-bold text-lg">PLAY NETFLIX INTRO</span>
            </button>
          )}
        </div>
        
        <div className="mt-8 text-gray-400 text-sm">
          &copy; Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal'}}>79</span> {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;