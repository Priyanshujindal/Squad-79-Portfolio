import React, { useEffect, useState } from 'react';

const InitialLoader = () => {
  const [progress, setProgress] = useState(0);
  const [showLoader, setShowLoader] = useState(true);

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

  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
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
            <span>Loading Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal'}}>79</span> Portfolio Website...</span>
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
        
        <div className="mt-8 text-gray-400 text-sm">
          © Squad <span style={{verticalAlign: 'baseline', display: 'inline-block', lineHeight: 'normal'}}>79</span> Portfolio Website {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};

export default InitialLoader; 