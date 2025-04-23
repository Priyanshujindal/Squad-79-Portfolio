import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 5000); // Animation will run for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      animation: 'fadeOut 1s ease forwards 4s'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        {/* Add sparkling stars */}
        <div className="stars-container">
          {[...Array(120)].map((_, index) => (
            <div
              key={index}
              className="star"
              style={{
                left: `${Math.random() * 160 - 30}%`,
                top: `${Math.random() * 160 - 30}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        {/* Wrapper for logo and text that handles the scaling animation */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 'clamp(10px, 2vw, 20px)',
          animation: 'textAnimation 5s ease forwards',
          flexWrap: 'wrap',
          justifyContent: 'center',
          padding: '0 20px',
          maxWidth: '100%'
        }}>
          {/* Logo Container */}
          <div style={{
            width: 'clamp(50px, 10vw, 80px)',
            height: 'clamp(50px, 10vw, 80px)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            {/* First Logo - Kalvium Logo */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'logoFadeInOut 5s ease-in-out forwards'
            }}>
              <img 
                src="/kalvium2.jpg" 
                alt="Kalvium Logo"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>

            {/* Second Logo */}
            <div style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              animation: 'logoFadeInOutReverse 5s ease-in-out forwards'
            }}>
              <img 
                src="/chitkara2.jpg" 
                alt="Kalvium Logo 2"
                style={{
                  width: '80%',
                  height: '80%',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.3))'
                }}
              />
            </div>
          </div>

          {/* Main text */}
          <div style={{
            fontSize: 'clamp(24px, 5vw, 48px)',
            fontWeight: '800',
            textAlign: 'center',
            textTransform: 'uppercase',
            letterSpacing: 'clamp(2px, 0.5vw, 4px)',
            fontFamily: "'Poppins', sans-serif",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            gap: 'clamp(4px, 1vw, 8px)',
            whiteSpace: 'nowrap',
            flexWrap: 'wrap'
          }}>
            <span style={{
              background: 'linear-gradient(45deg, #ff8c00, #ffa500)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientMove 5s ease infinite',
            }}>
              Squad
            </span>
            <span style={{
              background: 'linear-gradient(45deg, #ff4500, #ff6347)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientMove 5s ease infinite',
            }}>
              79
            </span>
            <span style={{
              background: 'linear-gradient(45deg, #ff8c00, #ffa500)',
              backgroundSize: '200% 200%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              animation: 'gradientMove 5s ease infinite',
            }}>
            
            </span>
          </div>
        </div>
      </div>

      <style jsx="true">{`
        @keyframes textAnimation {
          0% {
            opacity: 0;
            transform: scale(0.3);
          }
          20% {
            opacity: 1;
            transform: scale(1);
          }
          80% {
            opacity: 1;
            transform: scale(2);
          }
          100% {
            opacity: 0;
            transform: scale(3);
          }
        }

        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes logoFadeInOut {
          0%, 45% {
            opacity: 1;
            transform: scale(1);
          }
          50%, 100% {
            opacity: 0;
            transform: scale(0.8);
          }
        }

        @keyframes logoFadeInOutReverse {
          0%, 45% {
            opacity: 0;
            transform: scale(0.8);
          }
          50%, 100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
          }
          to {
            opacity: 0;
            visibility: hidden;
          }
        }

        .stars-container {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: visible;
          pointer-events: none;
          perspective: 1000px;  /* Add 3D perspective */
        }

        .star {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          opacity: 0;
        }

        /* Create different star types with varying sizes and animations */
        .star:nth-child(6n) {
          width: 2px;
          height: 2px;
          animation: floatAround1 3s ease-in-out infinite;
        }

        .star:nth-child(6n+1) {
          width: 3px;
          height: 3px;
          animation: floatAround2 4s ease-in-out infinite;
        }

        .star:nth-child(6n+2) {
          width: 1px;
          height: 1px;
          animation: floatAround3 2.5s ease-in-out infinite;
        }

        .star:nth-child(6n+3) {
          width: 2px;
          height: 2px;
          animation: floatAround4 3.5s ease-in-out infinite;
        }

        .star:nth-child(6n+4) {
          width: 3px;
          height: 3px;
          animation: floatAround5 4.5s ease-in-out infinite;
        }

        .star:nth-child(6n+5) {
          width: 2px;
          height: 2px;
          animation: floatAround6 3.8s ease-in-out infinite;
        }

        @keyframes floatAround1 {
          0% {
            opacity: 0;
            transform: translate3d(-100px, 100px, 0) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(50px, -50px, 50px) rotate(120deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(150px, -150px, -50px) rotate(240deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(300px, -300px, 0) rotate(360deg) scale(0);
          }
        }

        @keyframes floatAround2 {
          0% {
            opacity: 0;
            transform: translate3d(100px, 100px, 50px) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(-50px, -150px, -50px) rotate(120deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(-150px, -50px, 50px) rotate(240deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-300px, -200px, -50px) rotate(360deg) scale(0);
          }
        }

        @keyframes floatAround3 {
          0% {
            opacity: 0;
            transform: translate3d(-50px, -50px, -50px) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(100px, 100px, 50px) rotate(180deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(200px, 50px, -50px) rotate(300deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(300px, 200px, 50px) rotate(360deg) scale(0);
          }
        }

        @keyframes floatAround4 {
          0% {
            opacity: 0;
            transform: translate3d(50px, -100px, 50px) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(-100px, 50px, -50px) rotate(150deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(-200px, 150px, 50px) rotate(270deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-300px, 300px, -50px) rotate(360deg) scale(0);
          }
        }

        @keyframes floatAround5 {
          0% {
            opacity: 0;
            transform: translate3d(100px, 50px, -50px) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(-50px, -100px, 50px) rotate(160deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(-150px, -200px, -50px) rotate(280deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(-250px, -300px, 50px) rotate(360deg) scale(0);
          }
        }

        @keyframes floatAround6 {
          0% {
            opacity: 0;
            transform: translate3d(-100px, -50px, 50px) rotate(0deg) scale(0);
          }
          30% {
            opacity: 1;
            transform: translate3d(100px, 100px, -50px) rotate(140deg) scale(1);
          }
          70% {
            opacity: 1;
            transform: translate3d(200px, 200px, 50px) rotate(260deg) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(300px, 300px, -50px) rotate(360deg) scale(0);
          }
        }

        /* Enhanced glowing effect */
        .star::after {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          border-radius: 50%;
          background: radial-gradient(circle at center, 
            rgba(255,255,255,0.9) 0%, 
            rgba(255,255,255,0.3) 50%,
            rgba(255,255,255,0) 100%);
          filter: blur(1px);
          animation: pulse 2s ease-in-out infinite alternate;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.5;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }

        /* Improved twinkling effect */
        .star:nth-child(3n)::before {
          content: '';
          position: absolute;
          top: -1px;
          left: -1px;
          right: -1px;
          bottom: -1px;
          background: white;
          border-radius: 50%;
          animation: twinkle 1.5s ease-in-out infinite alternate;
        }

        @keyframes twinkle {
          0% {
            opacity: 0.2;
            transform: scale(0.5);
          }
          50% {
            opacity: 1;
            transform: scale(1.5);
          }
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingAnimation; 