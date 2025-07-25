import React, { useState, useEffect, useRef, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';

const OfflinePage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [reconnectAttempts, setReconnectAttempts] = useState(0);
  const [showGameSection, setShowGameSection] = useState(false);
  const canvasRef = useRef(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameSpeed, setGameSpeed] = useState(150);
  const [level, setLevel] = useState(1);
  
  // Game settings and refs (same as NotFound page)
  const canvasWidth = 480;
  const canvasHeight = 480;
  const gridSize = 20;
  const snakeRef = useRef([{ x: 8, y: 8 }]);
  const foodRef = useRef({ x: 3, y: 3 });
  const directionRef = useRef({ x: 1, y: 0 });
  const scoreRef = useRef(0);
  const gameOverRef = useRef(false);
  const gameLoopRef = useRef(null);
  const lastRenderTimeRef = useRef(0);
  const lastFoodTimeRef = useRef(0);

  const navigate = useNavigate();

  // Check connection status
  useEffect(() => {
    const checkConnection = () => {
      if (navigator.onLine) {
        // If back online, refresh the page after a small delay
        setTimeout(() => {
          navigate('/');
        }, 2000);
      } else {
        setReconnectAttempts(prev => prev + 1);
      }
    };

    const interval = setInterval(checkConnection, 5000);
    window.addEventListener('online', checkConnection);

    return () => {
      clearInterval(interval);
      window.removeEventListener('online', checkConnection);
    };
  }, []);

  // Show game section after a few reconnect attempts
  useEffect(() => {
    if (reconnectAttempts >= 3) {
      setShowGameSection(true);
    }
  }, [reconnectAttempts]);

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
        case 'w': case 'ArrowUp':
          if (directionRef.current.y !== 1) {
            directionRef.current = { x: 0, y: -1 };
          }
          break;
        case 's': case 'ArrowDown':
          if (directionRef.current.y !== -1) {
            directionRef.current = { x: 0, y: 1 };
          }
          break;
        case 'a': case 'ArrowLeft':
          if (directionRef.current.x !== 1) {
            directionRef.current = { x: -1, y: 0 };
          }
          break;
        case 'd': case 'ArrowRight':
          if (directionRef.current.x !== -1) {
            directionRef.current = { x: 1, y: 0 };
          }
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [gameStarted, gameOver]);

  // Handle touch controls
  const handleTouchStart = (e) => {
    if (!gameStarted) {
      startGame();
      return;
    }

    if (gameOver) {
      startGame();
      return;
    }

    const touch = e.touches[0];
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();
    
    const touchX = touch.clientX - rect.left;
    const touchY = touch.clientY - rect.top;
    
    const canvasCenterX = canvas.width / 2;
    const canvasCenterY = canvas.height / 2;
    
    const xDiff = touchX - canvasCenterX;
    const yDiff = touchY - canvasCenterY;
    
    // Determine swipe direction based on which difference is greater
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      // Horizontal swipe
      if (xDiff > 0 && directionRef.current.x !== -1) {
        directionRef.current = { x: 1, y: 0 }; // Right
      } else if (xDiff < 0 && directionRef.current.x !== 1) {
        directionRef.current = { x: -1, y: 0 }; // Left
      }
    } else {
      // Vertical swipe
      if (yDiff > 0 && directionRef.current.y !== -1) {
        directionRef.current = { x: 0, y: 1 }; // Down
      } else if (yDiff < 0 && directionRef.current.y !== 1) {
        directionRef.current = { x: 0, y: -1 }; // Up
      }
    }
    
    e.preventDefault(); // Prevent scrolling when swiping
  };

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
      
      // Implement wrap-around instead of collision with walls
      if (head.x < 0) head.x = Math.floor(canvasWidth / gridSize) - 1;
      if (head.x >= canvasWidth / gridSize) head.x = 0;
      if (head.y < 0) head.y = Math.floor(canvasHeight / gridSize) - 1;
      if (head.y >= canvasHeight / gridSize) head.y = 0;
      
      // Check if snake hits itself
      for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
          gameOverRef.current = true;
          setGameOver(true);
          return;
        }
      }
      
      // Check if snake eats food
      if (head.x === foodRef.current.x && head.y === foodRef.current.y) {
        // Increase score
        scoreRef.current += 10 * level;
        setScore(scoreRef.current);
        
        const now = Date.now();
        const timeSinceLastFood = now - lastFoodTimeRef.current;
        lastFoodTimeRef.current = now;
        
        // Generate new food
        foodRef.current = generateFood();
        
        // Snake grows longer
        snake.push({});
        
        // Increase level and speed every 5 food items
        if (scoreRef.current % 50 === 0) {
          const newLevel = Math.floor(scoreRef.current / 50) + 1;
          setLevel(newLevel);
          setGameSpeed(Math.max(50, 150 - (newLevel * 10))); // Increase speed with level
        }
      } else {
        // Remove tail
        snake.pop();
      }
      
      // Move snake forward
      for (let i = snake.length - 1; i > 0; i--) {
        snake[i] = { ...snake[i - 1] };
      }
      snake[0] = head;
      
      // Draw food
      context.fillStyle = '#ff6b6b';
      context.shadowColor = '#ff6b6b';
      context.shadowBlur = 10;
      context.beginPath();
      context.arc(
        foodRef.current.x * gridSize + gridSize / 2,
        foodRef.current.y * gridSize + gridSize / 2,
        gridSize / 2 - 2,
        0,
        2 * Math.PI
      );
      context.fill();
      context.shadowBlur = 0;
      
      // Draw snake
      for (let i = 0; i < snake.length; i++) {
        context.fillStyle = i === 0 
          ? '#4cd3c2' // Head color
          : `rgba(76, 211, 194, ${0.8 - (i / snake.length) * 0.5})`; // Body with gradient

        context.shadowColor = '#4cd3c2';
        context.shadowBlur = i === 0 ? 10 : 0;
        context.fillRect(
          snake[i].x * gridSize + 1,
          snake[i].y * gridSize + 1,
          gridSize - 2,
          gridSize - 2
        );
        context.shadowBlur = 0;
      }
      
      // Continue game loop
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };
    
    gameLoopRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [gameStarted, gameOver, gameSpeed, isDarkTheme]);

  // Start/restart game
  const startGame = () => {
    // Reset game state
    snakeRef.current = [{ x: 8, y: 8 }];
    foodRef.current = generateFood();
    directionRef.current = { x: 1, y: 0 };
    scoreRef.current = 0;
    lastFoodTimeRef.current = Date.now();
    gameOverRef.current = false;
    
    setScore(0);
    setLevel(1);
    setGameSpeed(150);
    setGameOver(false);
    setGameStarted(true);
    
    // Save current high score
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('snakeHighScore', score.toString());
    }
  };

  // Load high score from localStorage on mount
  useEffect(() => {
    const savedHighScore = localStorage.getItem('snakeHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore, 10));
    }
  }, []);

  return (
    <div className="container-fluid py-5 min-vh-100 d-flex align-items-center">
      <div className="container text-center py-5">
        <div className="row mb-4 justify-content-center">
          <div className="col-lg-8">
            <div className="offline-alert p-3 mb-4" style={{
              backgroundColor: isDarkTheme ? 'rgba(255, 107, 107, 0.2)' : 'rgba(255, 107, 107, 0.1)',
              border: '1px solid #ff6b6b',
              borderRadius: '8px',
              animation: 'pulse 2s infinite'
            }}>
              <i className="bi bi-wifi-off me-2" style={{ fontSize: '1.5rem' }}></i>
              <span style={{ fontSize: '1.2rem', fontWeight: '500' }}>You are currently offline</span>
            </div>

            <h1 className="display-4 mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
              No Connection
            </h1>
            
            <p className="lead mb-4" style={{ color: isDarkTheme ? '#e0e0e0' : '#555555' }}>
              It looks like you're not connected to the internet. 
              We're trying to reconnect (Attempt {reconnectAttempts})...
            </p>
            
            <div className="card mb-4" style={{
              backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
              color: isDarkTheme ? '#e0e0e0' : '#555555',
              border: isDarkTheme ? '1px solid #444' : '1px solid #ddd',
            }}>
              <div className="card-body">
                <h5 className="card-title" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
                  <i className="bi bi-info-circle me-2"></i>
                  What you can do
                </h5>
                <ul className="list-group list-group-flush text-start" style={{ backgroundColor: 'transparent' }}>
                  <li className="list-group-item" style={{ backgroundColor: 'transparent', color: isDarkTheme ? '#e0e0e0' : '#555555', borderColor: isDarkTheme ? '#444' : '#ddd' }}>
                    <i className="bi bi-arrow-repeat me-2"></i> Check your internet connection
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: 'transparent', color: isDarkTheme ? '#e0e0e0' : '#555555', borderColor: isDarkTheme ? '#444' : '#ddd' }}>
                    <i className="bi bi-wifi me-2"></i> Connect to a different network
                  </li>
                  <li className="list-group-item" style={{ backgroundColor: 'transparent', color: isDarkTheme ? '#e0e0e0' : '#555555', borderColor: isDarkTheme ? '#444' : '#ddd' }}>
                    <i className="bi bi-arrow-clockwise me-2"></i> Try refreshing the page
                  </li>
                </ul>
              </div>
            </div>

            <button 
              onClick={() => window.location.reload()}
              className="btn me-2 mb-3"
              style={{ 
                backgroundColor: '#4cd3c2',
                borderColor: '#4cd3c2',
                color: 'white',
              }}
            >
              <i className="bi bi-arrow-clockwise me-2"></i>
              Refresh Page
            </button>
            
            <Link to="/" className="btn mb-3" style={{ 
              backgroundColor: '#ff6b6b',
              borderColor: '#ff6b6b',
              color: 'white'
            }}>
              <i className="bi bi-house-door me-2"></i>
              Try Homepage
            </Link>
          </div>
        </div>

        {showGameSection && (
          <div className="row justify-content-center mt-4 mb-4 fade-in">
            <div className="col-lg-8">
              <div className="card" style={{
                backgroundColor: isDarkTheme ? '#2d2d2d' : '#f8f9fa',
                color: isDarkTheme ? '#e0e0e0' : '#555555',
                border: isDarkTheme ? '1px solid #444' : '1px solid #ddd',
              }}>
                <div className="card-body">
                  <h3 className="card-title mb-3" style={{ color: isDarkTheme ? '#ffffff' : '#333333' }}>
                    <i className="bi bi-controller me-2"></i>
                    While You Wait...
                  </h3>
                  <p>Why not play a quick game of Snake?</p>

                  <div className="score-container d-flex justify-content-center gap-3 mb-3">
                    <div className="score-card p-2 rounded text-center" style={{
                      backgroundColor: isDarkTheme ? '#1e293b' : '#e9ecef',
                      color: isDarkTheme ? '#ecf0f1' : '#2c3e50'
                    }}>
                      <div className="score-title">Score</div>
                      <div className="score-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{score}</div>
                    </div>
                    <div className="score-card p-2 rounded text-center" style={{
                      backgroundColor: isDarkTheme ? '#1e293b' : '#e9ecef',
                      color: isDarkTheme ? '#ecf0f1' : '#2c3e50'
                    }}>
                      <div className="score-title">Level</div>
                      <div className="score-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{level}</div>
                    </div>
                    <div className="score-card p-2 rounded text-center" style={{
                      backgroundColor: isDarkTheme ? '#1e293b' : '#e9ecef',
                      color: isDarkTheme ? '#ecf0f1' : '#2c3e50'
                    }}>
                      <div className="score-title">High Score</div>
                      <div className="score-value" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{highScore}</div>
                    </div>
                  </div>
                  
                  <div className="canvas-wrapper mb-4" style={{ 
                    width: '100%', 
                    maxWidth: '480px', 
                    height: 'auto', 
                    aspectRatio: '1/1', 
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
                          Use <strong>Arrow Keys</strong> or <strong>W A S D</strong> to control the snake<br/>
                          (or tap/swipe on mobile)
                        </p>
                        <button 
                          onClick={startGame}
                          className="btn"
                          style={{ 
                            backgroundColor: '#4cd3c2',
                            borderColor: '#4cd3c2',
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
                        <p>Level Reached: <strong>{level}</strong></p>
                        <button 
                          onClick={startGame}
                          className="btn mt-3"
                          style={{ 
                            backgroundColor: '#4cd3c2',
                            borderColor: '#4cd3c2',
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
                        backgroundColor: isDarkTheme ? 'rgba(20, 20, 20, 0.9)' : 'rgba(250, 250, 250, 0.9)',
                        width: '100%', 
                        height: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OfflinePage;
