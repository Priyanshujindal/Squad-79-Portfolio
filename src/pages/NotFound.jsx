import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const NotFound = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(100); // Lower is faster
  
  // Game settings
  const canvasWidth = 320;
  const canvasHeight = 320;
  const gridSize = 16;
  
  // Game state tracking refs (to use in animation frame callback)
  const snakeRef = useRef([{ x: 8, y: 8 }]); // Initial snake position
  const foodRef = useRef({ x: 3, y: 3 });
  const directionRef = useRef({ x: 1, y: 0 }); // Initial direction is right
  const scoreRef = useRef(0);
  const gameOverRef = useRef(false);
  const gameLoopRef = useRef(null);
  const lastRenderTimeRef = useRef(0);

  // Generate random food position
  const generateFood = () => {
    const food = {
      x: Math.floor(Math.random() * (canvasWidth / gridSize)),
      y: Math.floor(Math.random() * (canvasHeight / gridSize))
    };
    
    // Ensure food doesn't appear on snake
    const snake = snakeRef.current;
    for (let i = 0; i < snake.length; i++) {
      if (snake[i].x === food.x && snake[i].y === food.y) {
        return generateFood(); // Try again
      }
    }
    
    return food;
  };

  // Change direction on key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!gameStarted || gameOver) return;
      
      // Prevent reversing into self
      switch (e.key) {
        case 'ArrowUp':
          if (directionRef.current.y !== 1) {
            directionRef.current = { x: 0, y: -1 };
          }
          break;
        case 'ArrowDown':
          if (directionRef.current.y !== -1) {
            directionRef.current = { x: 0, y: 1 };
          }
          break;
        case 'ArrowLeft':
          if (directionRef.current.x !== 1) {
            directionRef.current = { x: -1, y: 0 };
          }
          break;
        case 'ArrowRight':
          if (directionRef.current.x !== -1) {
            directionRef.current = { x: 1, y: 0 };
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver) return;
    
    const gameLoop = (timestamp) => {
      if (gameOverRef.current) return;
      
      const canvas = canvasRef.current;
      if (!canvas) return;
      
      const context = canvas.getContext('2d');
      
      // Control game speed
      if (timestamp - lastRenderTimeRef.current < gameSpeed) {
        gameLoopRef.current = requestAnimationFrame(gameLoop);
        return;
      }
      
      lastRenderTimeRef.current = timestamp;
      
      // Clear canvas
      context.clearRect(0, 0, canvasWidth, canvasHeight);
      
      // Draw background grid
      context.fillStyle = isDarkTheme ? 'rgba(30, 30, 30, 0.5)' : 'rgba(240, 240, 240, 0.5)';
      for (let i = 0; i < canvasWidth / gridSize; i++) {
        for (let j = 0; j < canvasHeight / gridSize; j++) {
          if ((i + j) % 2 === 0) {
            context.fillRect(i * gridSize, j * gridSize, gridSize, gridSize);
          }
        }
      }
      
      // Update snake position
      const snake = snakeRef.current;
      const head = { x: snake[0].x + directionRef.current.x, y: snake[0].y + directionRef.current.y };
      
      // Check collision with walls
      if (
        head.x < 0 || 
        head.x >= canvasWidth / gridSize || 
        head.y < 0 || 
        head.y >= canvasHeight / gridSize
      ) {
        gameOverRef.current = true;
        setGameOver(true);
        return;
      }
      
      // Check collision with self
      for (let i = 0; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
          gameOverRef.current = true;
          setGameOver(true);
          return;
        }
      }
      
      // Add new head
      snake.unshift(head);
      
      // Check if snake eats food
      const food = foodRef.current;
      if (head.x === food.x && head.y === food.y) {
        // Generate new food
        foodRef.current = generateFood();
        
        // Increase score
        scoreRef.current += 1;
        setScore(scoreRef.current);
        if (scoreRef.current > highScore) {
          setHighScore(scoreRef.current);
        }
        
        // Increase speed
        if (scoreRef.current % 5 === 0 && gameSpeed > 50) {
          setGameSpeed(prev => Math.max(prev - 10, 50));
        }
      } else {
        // Remove tail if not eating
        snake.pop();
      }
      
      // Draw snake
      context.fillStyle = '#ff6b6b';
      snake.forEach((segment, index) => {
        // Head is brighter
        if (index === 0) {
          context.fillStyle = '#ff4757';
        } else {
          context.fillStyle = `rgba(255, 107, 107, ${0.8 - (index / snake.length) * 0.4})`;
        }
        
        context.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
        
        // Draw eyes on head
        if (index === 0) {
          context.fillStyle = 'white';
          
          // Determine eye position based on direction
          const eyeSize = gridSize / 4;
          if (directionRef.current.x === 1) {
            context.fillRect((segment.x * gridSize) + (gridSize * 0.7), (segment.y * gridSize) + (gridSize * 0.25), eyeSize, eyeSize);
            context.fillRect((segment.x * gridSize) + (gridSize * 0.7), (segment.y * gridSize) + (gridSize * 0.65), eyeSize, eyeSize);
          } else if (directionRef.current.x === -1) {
            context.fillRect((segment.x * gridSize) + (gridSize * 0.2), (segment.y * gridSize) + (gridSize * 0.25), eyeSize, eyeSize);
            context.fillRect((segment.x * gridSize) + (gridSize * 0.2), (segment.y * gridSize) + (gridSize * 0.65), eyeSize, eyeSize);
          } else if (directionRef.current.y === 1) {
            context.fillRect((segment.x * gridSize) + (gridSize * 0.25), (segment.y * gridSize) + (gridSize * 0.7), eyeSize, eyeSize);
            context.fillRect((segment.x * gridSize) + (gridSize * 0.65), (segment.y * gridSize) + (gridSize * 0.7), eyeSize, eyeSize);
          } else if (directionRef.current.y === -1) {
            context.fillRect((segment.x * gridSize) + (gridSize * 0.25), (segment.y * gridSize) + (gridSize * 0.2), eyeSize, eyeSize);
            context.fillRect((segment.x * gridSize) + (gridSize * 0.65), (segment.y * gridSize) + (gridSize * 0.2), eyeSize, eyeSize);
          }
        }
      });
      
      // Draw food
      context.fillStyle = '#4dabf7';
      context.beginPath();
      context.arc(
        (food.x * gridSize) + (gridSize / 2),
        (food.y * gridSize) + (gridSize / 2),
        gridSize / 2,
        0,
        Math.PI * 2
      );
      context.fill();
      
      // Continue loop
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };
    
    gameLoopRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, gameSpeed, isDarkTheme]);

  const startGame = () => {
    // Reset game state
    snakeRef.current = [{ x: 8, y: 8 }];
    foodRef.current = generateFood();
    directionRef.current = { x: 1, y: 0 };
    scoreRef.current = 0;
    gameOverRef.current = false;
    lastRenderTimeRef.current = 0;
    
    setScore(0);
    setGameSpeed(100);
    setGameOver(false);
    setGameStarted(true);
  };

  // Touch controls for mobile users
  const handleTouchStart = (e) => {
    if (!gameStarted || gameOver) return;
    
    const touchStartX = e.touches[0].clientX;
    const touchStartY = e.touches[0].clientY;
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate the direction based on touch position relative to center
    const dx = touchStartX - centerX;
    const dy = touchStartY - centerY;
    
    // Determine primary direction (horizontal or vertical)
    if (Math.abs(dx) > Math.abs(dy)) {
      // Horizontal
      if (dx > 0 && directionRef.current.x !== -1) {
        directionRef.current = { x: 1, y: 0 };
      } else if (dx < 0 && directionRef.current.x !== 1) {
        directionRef.current = { x: -1, y: 0 };
      }
    } else {
      // Vertical
      if (dy > 0 && directionRef.current.y !== -1) {
        directionRef.current = { x: 0, y: 1 };
      } else if (dy < 0 && directionRef.current.y !== 1) {
        directionRef.current = { x: 0, y: -1 };
      }
    }
  };

  return (
    <div className="min-vh-100 d-flex flex-column justify-content-center align-items-center py-5" 
      style={{ 
        backgroundColor: isDarkTheme ? '#121212' : '#f8f9fa',
        color: isDarkTheme ? '#ffffff' : '#333333'
      }}
    >
      <div className="text-center mb-5">
        <h1 className="display-1 fw-bold" style={{ color: '#ff6b6b' }}>404</h1>
        <h2 className="mb-4">Oops! Page Not Found</h2>
        <p className="lead mb-4">
          The page you're looking for doesn't exist, but don't worry! <br/>
          While you're here, have some fun with a game of Snake!
        </p>
        <Link 
          to="/" 
          className="btn btn-danger mt-3 mb-5"
          style={{ 
            backgroundColor: '#ff6b6b',
            borderColor: '#ff6b6b',
            padding: '10px 20px',
            borderRadius: '8px',
            fontWeight: '500'
          }}
        >
          Return Home
        </Link>
      </div>

      <div className="game-container" style={{
        background: isDarkTheme ? 'rgba(30, 30, 30, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        maxWidth: '400px',
        width: '100%'
      }}>
        <h3 className="text-center mb-4" style={{ color: '#ff6b6b' }}>Snake Game</h3>
        
        <div className="score-container d-flex justify-content-between mb-3">
          <div className="score-card p-2 rounded text-center" style={{
            backgroundColor: isDarkTheme ? 'rgba(60, 60, 60, 0.8)' : 'rgba(230, 230, 230, 0.8)',
            width: '45%'
          }}>
            <div className="score-title">Score</div>
            <div className="score-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{score}</div>
          </div>
          <div className="score-card p-2 rounded text-center" style={{
            backgroundColor: isDarkTheme ? 'rgba(60, 60, 60, 0.8)' : 'rgba(230, 230, 230, 0.8)',
            width: '45%'
          }}>
            <div className="score-title">High Score</div>
            <div className="score-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{highScore}</div>
          </div>
        </div>
        
        <div className="canvas-wrapper mb-4" style={{ 
          width: '320px', 
          height: '320px',
          margin: '0 auto',
          border: isDarkTheme ? '2px solid #444' : '2px solid #ddd',
          borderRadius: '8px',
          overflow: 'hidden',
          touchAction: 'none'
        }}
        onTouchStart={handleTouchStart}
        >
          {!gameStarted && !gameOver && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDarkTheme ? 'rgba(30, 30, 30, 0.8)' : 'rgba(240, 240, 240, 0.8)',
              flexDirection: 'column'
            }}>
              <p style={{ fontSize: '1.2rem', marginBottom: '1rem', textAlign: 'center' }}>
                Use arrow keys to control the snake<br/>
                (or tap screen on mobile)
              </p>
              <button 
                onClick={startGame}
                className="btn"
                style={{ 
                  backgroundColor: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500'
                }}
              >
                Start Game
              </button>
            </div>
          )}
          
          {gameOver && (
            <div style={{
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: isDarkTheme ? 'rgba(30, 30, 30, 0.8)' : 'rgba(240, 240, 240, 0.8)',
              flexDirection: 'column'
            }}>
              <h4 style={{ color: '#ff6b6b', marginBottom: '1rem' }}>Game Over!</h4>
              <p>Your Score: <strong>{score}</strong></p>
              <button 
                onClick={startGame}
                className="btn mt-3"
                style={{ 
                  backgroundColor: '#ff6b6b',
                  borderColor: '#ff6b6b',
                  color: 'white',
                  padding: '8px 16px',
                  borderRadius: '8px',
                  fontWeight: '500'
                }}
              >
                Play Again
              </button>
            </div>
          )}
          
          <canvas 
            ref={canvasRef} 
            width={canvasWidth} 
            height={canvasHeight}
            style={{ 
              display: (gameStarted && !gameOver) ? 'block' : 'none',
              backgroundColor: isDarkTheme ? 'rgba(20, 20, 20, 0.9)' : 'rgba(250, 250, 250, 0.9)'
            }}
          />
        </div>
        
        <div className="text-center" style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          <p>Controls: Use Arrow Keys (⬆️ ⬇️ ⬅️ ➡️) or tap screen</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
