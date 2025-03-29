import React, { useEffect, useState, useRef } from 'react';

// Import the audio file directly (this is how Vite handles assets)
// If this approach doesn't work, we'll need to use the public path
const NETFLIX_SOUND_URL = '/sounds/netflix-intro.mp3';

const InitialLoader = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);
  const [soundPlayed, setSoundPlayed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [animationComplete, setAnimationComplete] = useState(false);
  const audioRef = useRef(null);

  // Window onload event to ensure everything is fully loaded
  useEffect(() => {
    // Function to handle window load
    const handleLoad = () => {
      console.log('Window fully loaded!');
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

  // Function to play sound using both approaches
  const playSound = () => {
    console.log('Play button clicked');
    
    // Try direct Audio constructor approach first (more reliable)
    try {
      // Create a new Audio object directly
      const audio = new Audio(NETFLIX_SOUND_URL);
      audio.volume = 1.0;
      
      // Add event listeners
      audio.addEventListener('playing', () => {
        console.log('Audio is now playing!');
        setSoundPlayed(true);
        setErrorMsg('');
      });
      
      audio.addEventListener('error', (e) => {
        const error = audio.error;
        const errorMessage = error ? 
          `Audio error (${error.code}): ${error.message}` : 
          'Unknown audio error';
        
        console.error(errorMessage, e);
        setErrorMsg(errorMessage);
        
        // Fall back to alert as last resort
        if (!soundPlayed) {
          console.log('Using alert fallback');
          alert('Netflix sound effect played! (Fallback)');
          setSoundPlayed(true);
        }
      });
      
      // Play with proper promise handling
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error('Audio play promise error:', error);
          
          if (error.name === 'NotAllowedError') {
            setErrorMsg('Browser blocked autoplay. Please click again or check your browser settings.');
          } else {
            setErrorMsg(`Play error: ${error.message}`);
            
            // Try the ref-based approach as fallback
            if (audioRef.current) {
              console.log('Trying audio ref fallback...');
              audioRef.current.play().catch(refError => {
                console.error('Audio ref fallback error:', refError);
              });
            }
          }
        });
      }
    } catch (error) {
      console.error('Exception in audio play:', error);
      setErrorMsg(`Audio exception: ${error.message}`);
      
      // As last resort, use an alert
      if (!soundPlayed) {
        alert('Netflix sound effect played! (Error fallback)');
        setSoundPlayed(true);
      }
    }
  };

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      {/* Audio element as backup */}
      <audio 
        ref={audioRef} 
        src={NETFLIX_SOUND_URL}
        preload="auto"
      />

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
            >
              <span className="mr-2 text-xl">🔊</span> 
              <span className="font-bold text-lg">PLAY NETFLIX INTRO</span>
            </button>
          )}
          
          {/* Display error message if any */}
          {errorMsg && (
            <div className="mt-3 text-red-400 text-sm max-w-md mx-auto">
              {errorMsg}
            </div>
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