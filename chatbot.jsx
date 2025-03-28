import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './Chatbot.css';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendationHistory, setRecommendationHistory] = useState({});
  const messagesEndRef = useRef(null);
  const [chatMode, setChatMode] = useState('initial');
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedWorkMode, setSelectedWorkMode] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const [availableSkills, setAvailableSkills] = useState([]);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [allPredefinedQuestions, setAllPredefinedQuestions] = useState([]);
  const [predefinedAnswers, setPredefinedAnswers] = useState({});

  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message to chat
    const userMessage = { text: input, sender: 'user' };
    setMessages([...messages, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // Send request to backend
      const response = await axios.post('/api/chat', {
        message: input,
        recommendationHistory: recommendationHistory // Send history to help backend avoid bias
      });

      // If response contains team recommendations, update history
      if (response.data.recommendedTeam) {
        updateRecommendationHistory(response.data.recommendedTeam);
      }

      // Add bot response to chat
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response.data.response, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error communicating with chatbot:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Sorry, I encountered an error. Please try again.', sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Update history to track which students have been recommended
  const updateRecommendationHistory = (recommendedTeam) => {
    const updatedHistory = { ...recommendationHistory };
    
    recommendedTeam.forEach(student => {
      const studentId = student.id || student.name;
      updatedHistory[studentId] = (updatedHistory[studentId] || 0) + 1;
    });
    
    setRecommendationHistory(updatedHistory);
  };

  // Function to request a balanced team recommendation
  const requestBalancedTeam = async (teamSize = 4, skills = []) => {
    setIsLoading(true);
    try {
      const response = await axios.post('/api/recommend-team', {
        teamSize,
        skills,
        recommendationHistory
      });
      
      if (response.data.recommendedTeam) {
        updateRecommendationHistory(response.data.recommendedTeam);
      }
      
      setMessages(prevMessages => [
        ...prevMessages,
        { text: response.data.response, sender: 'bot' }
      ]);
    } catch (error) {
      console.error('Error getting team recommendations:', error);
      setMessages(prevMessages => [
        ...prevMessages,
        { text: 'Sorry, I had trouble creating a balanced team recommendation.', sender: 'bot' }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  // Quick action buttons for common requests
  const renderQuickActions = () => {
    return (
      <div className="quick-actions">
        <button 
          onClick={() => {
            setMessages([...messages, { text: "Recommend a balanced team of 4 students", sender: 'user' }]);
            requestBalancedTeam(4);
          }}
        >
          Recommend Team (4)
        </button>
        <button 
          onClick={() => {
            setMessages([...messages, { text: "Show team recommendation stats", sender: 'user' }]);
            showRecommendationStats();
          }}
        >
          Show Stats
        </button>
        <button 
          onClick={() => {
            setMessages([...messages, { text: "Reset recommendation history", sender: 'user' }]);
            resetRecommendationHistory();
          }}
        >
          Reset History
        </button>
      </div>
    );
  };

  // Show statistics about how often each student has been recommended
  const showRecommendationStats = () => {
    if (Object.keys(recommendationHistory).length === 0) {
      setMessages([...messages, { 
        text: "No recommendations have been made yet.", 
        sender: 'bot' 
      }]);
      return;
    }

    // Sort students by recommendation count for transparency
    const sortedStats = Object.entries(recommendationHistory)
      .sort((a, b) => a[1] - b[1])
      .map(([student, count]) => `${student}: ${count} time${count !== 1 ? 's' : ''}`)
      .join('\n');
    
    setMessages([...messages, { 
      text: "Recommendation Statistics:\n" + sortedStats, 
      sender: 'bot' 
    }]);
  };

  // Reset the recommendation history to eliminate accumulated bias
  const resetRecommendationHistory = () => {
    setRecommendationHistory({});
    setMessages([...messages, { 
      text: "Recommendation history has been reset. Future recommendations will start fresh.", 
      sender: 'bot' 
    }]);
  };

  const handleOptionClick = (option) => {
    // Add user's selection to chat
    setMessages(prev => [...prev, { sender: 'user', text: option }]);

    // Handle based on current mode
    if (chatMode === 'initial') {
      if (option === 'Hire talent') {
        // Switch to hire mode
        setChatMode('hire');
        setSelectedSkill('');
        setSelectedExperience('');
        setSelectedWorkMode('');
        setSelectedNumber('');
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: "Great! Let's find the right team member for you. First, what skills are you looking for?",
            skills: availableSkills
          });
        }, 800);
      } else if (option === 'Get help') {
        // Switch to help mode
        setChatMode('help');
        
        // Reset selections for help mode
        setSelectedSkill('');
        setSelectedExperience('');
        setSelectedWorkMode('');
        setSelectedNumber('');
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: "I can answer some common questions about Squad 79. What would you like to know?",
            questions: availableQuestions
          });
        }, 800);
      }
    } else if (chatMode === 'hire') {
      // Handle hire mode logic...
      // (existing code for handling hire mode)
    } else if (chatMode === 'help') {
      // Display answer to selected question
      const answer = predefinedAnswers[option] || "I don't have information about that specific question.";
      
      // Remove selected question from available questions
      const updatedQuestions = availableQuestions.filter(q => q !== option);
      
      // Add a new random question that's not already in the list
      const remainingQuestions = allPredefinedQuestions.filter(
        q => !updatedQuestions.includes(q) && q !== option
      );
      
      let newAvailableQuestions = [...updatedQuestions];
      
      // If we have remaining questions and room for more
      if (remainingQuestions.length > 0 && updatedQuestions.length < 5) {
        const newQuestion = remainingQuestions[Math.floor(Math.random() * remainingQuestions.length)];
        newAvailableQuestions = [...updatedQuestions, newQuestion];
      }
      
      setAvailableQuestions(newAvailableQuestions);
      
      // Show answer first with a delay
      setTimeout(() => {
        addBotMessage({ sender: 'bot', text: answer });
        
        // Then show follow-up question after a longer delay to allow reading
        setTimeout(() => {
          if (newAvailableQuestions.length > 0) {
            addBotMessage({ 
              sender: 'bot', 
              text: "Is there anything else you'd like to know?",
              questions: newAvailableQuestions
            });
          } else {
            addBotMessage({ 
              sender: 'bot', 
              text: "I've answered all common questions. Is there anything else I can help you with?",
              options: ['Hire talent', 'Start over']
            });
          }
        }, 3000);
      }, 1000);
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <h2>Team Recommendation Assistant</h2>
      </div>
      
      <div className="chatbot-messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
        {isLoading && (
          <div className="message bot loading">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      
      {renderQuickActions()}
      
      <form className="chatbot-input" onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask about team recommendations..."
          disabled={isLoading}
        />
        <button type="submit" disabled={isLoading || !input.trim()}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Chatbot;
