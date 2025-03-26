import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! 👋 How can I help you with information about Squad 79?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef(null);
  
  // Auto-scroll to the bottom of the chat when new messages appear
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    // Add user message
    const newMessages = [...messages, { text: inputValue, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate typing delay (500ms) for bot response
    setTimeout(() => {
      const botResponse = generateResponse(inputValue);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  // Simple rule-based response generation
  const generateResponse = (userInput) => {
    const input = userInput.toLowerCase();
    
    // Define keywords and their responses
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return 'Hello! How can I assist you today?';
    } else if (input.includes('who') && (input.includes('squad') || input.includes('team') || input.includes('you'))) {
      return 'Squad 79 is a team of talented students who worked together on various projects. Our portfolio showcases our journey, skills, and accomplishments.';
    } else if (input.includes('project') || input.includes('work')) {
      return 'You can explore our projects in the Experience section. Each project showcases our skills and what we learned while building them.';
    } else if (input.includes('contact') || input.includes('reach')) {
      return 'You can find contact information for team members in their individual profiles. Navigate to the Teams or Students section to find specific team members.';
    } else if (input.includes('student') || input.includes('member')) {
      return 'You can find all our team members in the Teams section, or browse the Students section to see individual profiles.';
    } else if (input.includes('mentor')) {
      return 'Our mentors have played a crucial role in our journey. Check out the Mentors section to learn about them.';
    } else if (input.includes('thank')) {
      return 'You\'re welcome! Glad I could help.';
    } else if (input.includes('bye') || input.includes('goodbye')) {
      return 'Goodbye! Feel free to chat again if you have more questions.';
    } else {
      return 'I\'m not sure I understand. You can ask about our team, projects, students, or mentors.';
    }
  };

  return (
    <div className={`chatbot-container ${darkMode ? 'dark-mode' : ''}`}>
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h3>Squad 79 Assistant</h3>
            <button className="close-button" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender}`}>
                <div className="message-bubble">{message.text}</div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your question here..."
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
      <button 
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`} 
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? (
          <span>×</span>
        ) : (
          <span>💬</span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;
