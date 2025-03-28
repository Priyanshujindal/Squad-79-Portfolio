import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chatbot.css';
import { FaRobot, FaUser, FaTimes, FaTrash, FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';
import studentData from '../data/students';

const Chatbot = () => {
  const { isDarkTheme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [availableQuestions, setAvailableQuestions] = useState([]);
  const [chatMode, setChatMode] = useState('initial'); // 'initial', 'hire', 'help'
  const [selectedSkill, setSelectedSkill] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedWorkMode, setSelectedWorkMode] = useState('');
  const [selectedNumber, setSelectedNumber] = useState('');
  const messageContainerRef = useRef(null);

  // All possible predefined questions
  const allPredefinedQuestions = [
    "What projects has Squad 79 created?",
    "How can I navigate the portfolio site?",
    "Who are the members of Squad 79?",
    "What technologies do you use?",
    "Tell me about the Spotify Clone project",
    "How does the name matching system work?",
    "What's the 2-day workshop about?",
    "How can I access live demos?",
    "Tell me about the back navigation feature",
    "What's on the More page?",
    "How does the light/dark mode work?",
    "Are there any educational events?",
    "How responsive is the portfolio site?",
    "What is the Tic Tac Toe project?",
    "What is the Money Tracking Website?",
    "Tell me about the Classic Dino Game",
    "What is the Netflix Clone project?"
  ];

  // Predefined answers to questions
  const predefinedAnswers = {
    "What projects has Squad 79 created?": "Squad 79 has created several exciting web development projects including: Spotify Clone (music streaming interface), Tic Tac Toe Game, Money Tracking Website (for financial management), Classic Dino Game (inspired by Chrome's offline game), and a Netflix Clone (login page UI). Each project showcases different web development skills and technologies.",
    
    "How can I navigate the portfolio site?": "Our portfolio site has several main sections accessible from the navigation menu: \n\n• Home - Landing page with featured projects\n• About - Information about Squad 79's mission\n• Experience - All our projects and workshops\n• Teams - Our team members grouped by projects\n• Students - Individual student profiles\n• Mentors - Those who guided our journey\n• More - Additional resources and information",
    
    "Who are the members of Squad 79?": "Squad 79's core members include Priyanshu Jindal, Raksham Sharma, Rajatvir Pandhi, Rehat Singh, and others who have collaborated on various web development projects and workshops. We also have extended team members like Parth, Ramanpreet, Rakshit, Shivani, Riddhi, and others who contribute their unique skills to our collective projects.",
    
    "What technologies do you use?": "Squad 79 members are skilled in various web technologies including HTML, CSS, and JavaScript for frontend development, with projects also incorporating React for more complex applications. We've also worked with Python and its data science libraries (NumPy, Pandas, Matplotlib) for our workshop and educational events.",
    
    "Tell me about the Spotify Clone project": "The Spotify Clone project is a music streaming interface that mimics the popular platform. It features a music player interface, playlist management, artist discovery, responsive design, and song search functionality. It was built using HTML, CSS, and JavaScript and has a live demo available on the site. Priyanshu was the primary developer on this project.",
    
    "How does the name matching system work?": "Our portfolio uses an advanced name matching system implemented in the getMemberId function. It supports case-insensitive matching, handles full names (like 'Priyanshu Jindal'), partial names (like 'P Jindal'), and first-name-only references (like 'Priyanshu'). The system uses both direct matching and substring matching to ensure you can always find the right person's profile from any project reference.",
    
    "What's the 2-day workshop about?": "The 2-day workshop focused on Python libraries like NumPy, Pandas, and Matplotlib. It featured hands-on coding sessions, data visualization techniques, data manipulation with Pandas, statistical analysis with NumPy, and real-world case studies. The workshop was conducted by Raksham, Priyanshu, Rehat, and Rajat.",
    
    "How can I access live demos?": "Many of our projects have live demos available. When viewing a project's details page, look for the 'View Demo' or 'Live Preview' button that will take you to a working version of the project. For example, the Spotify Clone has a demo at https://spotifyfree.netlify.app/",
    
    "Tell me about the back navigation feature": "Our portfolio site features smart contextual navigation. When viewing student profiles from the More page, the back button will correctly return you to the More page instead of the Teams page. This is because we've implemented a special routing system where links from the More page point to '/more/${person.id}' instead of '/teams/${person.id}'.",
    
    "What's on the More page?": "The More page contains additional information and resources about Squad 79. You can access it by clicking 'More' in the main navigation menu. This section includes extra content that doesn't fit into the other main categories. From here, you can also click on student profiles, which will maintain proper back navigation to return to the More page when you're done.",
    
    "How does the light/dark mode work?": "Our portfolio site supports both light and dark modes! You can toggle between them by clicking the theme switch icon in the top-right corner of the navigation bar. This feature allows you to customize your viewing experience based on your preference or lighting conditions.",
    
    "Are there any educational events?": "Yes! Squad 79 has organized educational events including a 2-day workshop on Python libraries (NumPy, Pandas, Matplotlib) and participated in a LeetCode coding event focused on algorithm challenges. These events were aimed at sharing knowledge and helping others develop practical skills in programming and data analysis.",
    
    "How responsive is the portfolio site?": "Our portfolio site is fully responsive! It is designed to provide an optimal viewing experience across a wide range of devices, from mobile phones to desktop monitors. The layout will automatically adjust based on your screen size, ensuring that content remains accessible and visually appealing regardless of how you are accessing the site.",
    
    "What is the Tic Tac Toe project?": "The Tic Tac Toe project is an interactive implementation of the classic game. It features a clean user interface, win detection logic, score tracking, and responsive design. It was built using HTML, CSS, and JavaScript and demonstrates game logic implementation in web development.",
    
    "What is the Money Tracking Website?": "The Money Tracking Website is a financial management application that allows users to track their income and expenses. It includes features like transaction categorization, budget planning tools, visual reports and graphs, and secure user authentication. It demonstrates both frontend and backend development skills.",
    
    "Tell me about the Classic Dino Game": "The Classic Dino Game is inspired by Chrome's offline dinosaur game. It's an endless runner where players jump over obstacles. It features increasing difficulty levels, score tracking, collision detection, and responsive controls. It was built using HTML, CSS, and JavaScript and demonstrates game development concepts.",
    
    "What is the Netflix Clone project?": "The Netflix Clone project recreates the login page UI of the popular streaming platform. It features a responsive design, form validation, and visual elements matching the Netflix brand. It demonstrates attention to detail in frontend development and UI/UX design principles."
  };
  
  // Available experience levels for filtering
  const experienceLevels = ["Fresher", "Experienced"];

  // Available work modes for filtering
  const workModes = ["Remote", "In-office", "Hybrid"];

  // Initialize available questions
  useEffect(() => {
    // Randomly select 5 initial questions
    const randomQuestions = [...allPredefinedQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setAvailableQuestions(randomQuestions);
  }, []);

  // Scroll to the bottom of message container
  const scrollToBottom = () => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop = messageContainerRef.current.scrollHeight;
    }
  };

  // Auto-scroll to the latest message whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to add a bot message with automatic scrolling
  const addBotMessage = (messageContent) => {
    setMessages(prev => [...prev, messageContent]);
  };

  // Helper function to manage message timing
  const sendDelayedMessage = (message, delay) => {
    return new Promise(resolve => {
      setTimeout(() => {
        addBotMessage(message);
        resolve();
      }, delay);
    });
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    
    // Only initialize if opening and no messages yet
    if (!isOpen && messages.length === 0) {
      // Initial welcome message when opening
      setMessages([
        { 
          sender: 'bot', 
          text: "Welcome to Squad 79's portfolio! How can I assist you today?",
          options: ['Hire talent', 'Get help']
        }
      ]);
      setChatMode('initial');
    }
  };

  const resetChat = () => {
    setMessages([]);
    setChatMode('initial');
    // Randomly select 5 questions again
    const randomQuestions = [...allPredefinedQuestions]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    setAvailableQuestions(randomQuestions);
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
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: "I can answer some common questions about Squad 79. What would you like to know?",
            questions: availableQuestions
          });
        }, 800);
      }
    } else if (chatMode === 'hire') {
      if (option === "Search again") {
        setSelectedSkill('');
        setSelectedExperience('');
        setSelectedWorkMode('');
        setSelectedNumber('');
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: "Let's try again. What skills are you looking for?",
            skills: availableSkills
          });
        }, 1000);
      } else if (!selectedSkill) {
        setSelectedSkill(option);
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: `What experience level are you looking for?`,
            experienceLevels: experienceLevels
          });
        }, 1000);
      } else if (!selectedExperience) {
        setSelectedExperience(option);
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: `How many team members do you need?`,
            numberOptions: [1, 2, 3, 4, 5]
          });
        }, 1000);
      } else if (!selectedNumber) {
        setSelectedNumber(parseInt(option));
        
        // Shuffle array for fair selection
        const shuffleArray = (array) => {
          for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
          }
          return array;
        };
        
        let matchingMembers;
        
        matchingMembers = shuffleArray(teamMemberSkills.filter(member => 
          member.skills.includes(selectedSkill) && 
          member.experience === selectedExperience &&
          member.workMode.includes(selectedWorkMode)
        )).slice(0, parseInt(option));
        
        // First show results
        setTimeout(() => {
          if (matchingMembers.length > 0) {
            addBotMessage({ 
              sender: 'bot', 
              text: `Here are the team members that match your criteria:`,
              members: matchingMembers
            });
          } else {
            // Try a less strict filter if no exact matches
            let partialMatches;
            
            // First try with most important criteria
            partialMatches = teamMemberSkills.filter(member => 
              member.skills.includes(selectedSkill) && 
              member.experience === selectedExperience
            );
            
            // If still no matches, try with just the skill
            if (partialMatches.length === 0) {
              partialMatches = teamMemberSkills.filter(member => 
                member.skills.includes(selectedSkill)
              );
            }
            
            if (partialMatches.length > 0) {
              addBotMessage({ 
                sender: 'bot', 
                text: `I couldn't find an exact match for all your criteria, but here are team members who match your core requirements:`,
                members: partialMatches
              });
            } else {
              addBotMessage({ 
                sender: 'bot', 
                text: `I couldn't find team members matching your criteria. Would you like to try a different skill?`,
                skills: availableSkills
              });
              // Reset selections to start over
              setSelectedSkill('');
              setSelectedExperience('');
              setSelectedWorkMode('');
              setSelectedNumber('');
            }
          }
          
          // Add a "filter again" option with longer delay
          setTimeout(() => {
            addBotMessage({ 
              sender: 'bot', 
              text: "Would you like to search with different criteria?",
              options: ['Search again', 'Get help']
            });
          }, 3000); // Longer delay to allow reading
        }, 1000);
      }
      // Handle "Search again" option
      else if (option === "Search again") {
        setSelectedSkill('');
        setSelectedExperience('');
        setSelectedWorkMode('');
        setSelectedNumber('');
        
        setTimeout(() => {
          addBotMessage({ 
            sender: 'bot', 
            text: "Let's try again. What skills are you looking for?",
            skills: availableSkills
          });
        }, 1000);
      }
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
    } else if (option === 'Start over') {
      // Reset chat
      handleDeleteChat();
      
      setTimeout(() => {
        addBotMessage({
          sender: 'bot',
          text: "Hi there! 👋 I'm the Squad 79 assistant. How can I assist you today?",
          options: ['Hire talent', 'Get help']
        });
      }, 500);
    }
  };

  const handleDeleteChat = () => {
    resetChat();
    setMessages([
      { 
        sender: 'bot', 
        text: "Chat history cleared. How can I assist you today?",
        options: ['Hire talent', 'Get help']
      }
    ]);
    setChatMode('initial');
  };

  // Available skills for filtering (for hire path)
  const availableSkills = [
    // Frontend Development
    "React", "JavaScript", "HTML", "CSS",
    // Backend Development
    "Python",  "API Development",
    // Programming Languages
    "C++", "Data Structures", "Algorithms", "Object-Oriented Programming",
    // UI/UX Design
    "UI/UX Design", "UI Design", "Visual Design", "Interaction Design",
    // Other Skills
    "Game Development", "Data Analysis", "Event Management", "Content Creation"
  ];

  // Transform student data for filtering
  const teamMemberSkills = [
    {
      id: 1,
      name: "Priyanshu Jindal",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Experienced",
      projects: ["Spotify Clone", "Dino Game"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 2,
      name: "Raksham Sharma",
      skills: ["React", "JavaScript", "UI/UX", "CSS", "Python", "C++", "Data Structures", "Algorithms"],
      experience: "Experienced",
      projects: ["Money Tracking Website", "Python Workshop", "C++ Projects"],
      workMode: ["In-office"]
    },
    {
      id: 3,
      name: "Rajatvir Pandhi",
      skills: ["Python", "Node.js", "Database Design", "API Development"],
      experience: "Experienced",
      projects: ["Tic Tac Toe", "Python Workshop"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 4,
      name: "Riya Garg",
      skills: ["UI Design", "User Research", "Prototyping", "Figma"],
      experience: "Fresher",
      projects: ["Netflix Clone"],
      workMode: ["In-office", "Hybrid"]
    },
    {
      id: 5,
      name: "Rehat Singh",
      skills: ["UI/UX Design", "Wireframing", "User Testing", "Adobe XD"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 6,
      name: "Parth Doomra",
      skills: ["UI Design", "Visual Design", "Interaction Design", "Sketch"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["In-office"]
    },
    {
      id: 7,
      name: "Ramanpreet Singh",
      skills: ["UI/UX Design", "Information Architecture", "User Research", "InVision"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["Remote"]
    },
    {
      id: 8,
      name: "Rakshit",
      skills: ["UI Design", "Prototyping", "User Testing", "Adobe Creative Suite"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["In-office"]
    },
    {
      id: 9,
      name: "Shivani Jindal",
      skills: ["UI Design", "Visual Design", "Prototyping", "Figma"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 10,
      name: "Riddhi Garg",
      skills: ["Figma", "UI Design", "Prototyping", "Visual Design"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["In-office"]
    },
    {
      id: 11,
      name: "Pranav Arora",
      skills: ["Ethical Hacking", "Cybersecurity", "Network Security", "Penetration Testing"],
      experience: "Experienced",
      projects: ["Security Projects"],
      workMode: ["Remote"]
    },
    {
      id: 12,
      name: "Priyansh Thakur",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Experienced",
      projects: ["Web Development Projects"],
      workMode: ["In-office"]
    },
    {
      id: 13,
      name: "Raghav Sharma",
      skills: ["React", "Redux", "JavaScript", "Web Development"],
      experience: "Experienced",
      projects: ["Web Development Projects"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 14,
      name: "Rishab Bansal",
      skills: ["Choreography", "Performance", "Dance Instruction", "Event Management"],
      experience: "Experienced",
      projects: ["Dance Events"],
      workMode: ["In-office"]
    },
    {
      id: 15,
      name: "Piyanshi",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Fresher",
      projects: ["Web Development Projects"],
      workMode: ["Remote"]
    },
    {
      id: 16,
      name: "Sarthak Khurana",
      skills: ["UI Design", "UX Research", "Prototyping", "Wireframing"],
      experience: "Fresher",
      projects: ["UI/UX Projects"],
      workMode: ["In-office", "Hybrid"]
    },
    {
      id: 17,
      name: "Sanchita Bhandari",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Fresher",
      projects: ["Web Development Projects"],
      workMode: ["Remote"]
    },
    {
      id: 18,
      name: "Pranay Obero",
      skills: ["Graphic Design", "UI Design", "Visual Design", "Adobe Creative Suite"],
      experience: "Experienced",
      projects: ["Design Projects"],
      workMode: ["In-office"]
    },
    {
      id: 19,
      name: "Prachi Behal",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Fresher",
      projects: ["Web Development Projects"],
      workMode: ["Remote", "Hybrid"]
    },
    {
      id: 20,
      name: "Pavitar Kumar",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Fresher",
      projects: ["Web Development Projects"],
      workMode: ["In-office"]
    },
    {
      id: 21,
      name: "Radhil Narula",
      skills: ["React", "JavaScript", "HTML", "CSS"],
      experience: "Fresher",
      projects: ["Web Development Projects"],
      workMode: ["Remote"]
    },
    {
      id: 22,
      name: "Pukhraj Soni",
      skills: ["C++", "Data Structures", "Algorithms", "Object-Oriented Programming"],
      experience: "Experienced",
      projects: ["C++ Projects"],
      workMode: ["In-office"]
    },
    {
      id: 23,
      name: "Riya Yadav",
      skills: ["C++", "Data Structures", "Algorithms", "Object-Oriented Programming"],
      experience: "Experienced",
      projects: ["C++ Projects"],
      workMode: ["Remote", "Hybrid"]
    }
  ];

  return (
    <div className={`chatbot-container ${isDarkTheme ? 'dark-mode' : ''}`}>
      {/* Chat toggle button - always visible now */}
      <div 
        className={`chatbot-icon ${isOpen ? 'icon-when-open' : ''}`} 
        onClick={toggleChat}
        style={{ 
          background: isDarkTheme 
            ? '#000000' 
            : 'linear-gradient(135deg, #9d50bb 0%, #6e48aa 100%)' 
        }}
      >
        <FaRobot size={28} color="white" />
      </div>
      
      {/* Chat window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="chatbot-logo">
              <div className="logo-container">
                <FaRobot size={25} color="white" className="chatbot-header-icon" />
              </div>
              <h3>Squad 79 Assistant</h3>
            </div>
            <div className="header-buttons">
              <button className="toggle-button" onClick={toggleTheme}>
                {isDarkTheme ? <FaSun color="white" /> : <FaMoon />}
              </button>
              <button className="toggle-button" onClick={toggleChat}>
                <FaTimes />
              </button>
            </div>
          </div>
          
          <div className="chatbot-messages" ref={messageContainerRef} style={{ overflowY: 'auto', height: '100%' }}>
            {messages.map((message, index) => (
              <div key={index} className={`message ${message.sender === 'bot' ? 'bot' : 'user'}`}>
                <div className="avatar" style={{ backgroundColor: isDarkTheme ? '#000000' : '#6e48aa' }}>
                  {message.sender === 'bot' ? <FaRobot /> : <FaUser />}
                </div>
                <div className="message-content">
                  {message.text && <p>{message.text}</p>}
                  
                  {/* Render options based on message type */}
                  {message.options && (
                    <div className="message-options">
                      <div className="option-buttons">
                        {message.options.map((option, optIndex) => (
                          <button key={optIndex} onClick={() => handleOptionClick(option)}>
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render skills for skill selection */}
                  {message.skills && (
                    <div className="message-options">
                      <div className="skill-buttons">
                        {message.skills.map((skill, skillIndex) => (
                          <button key={skillIndex} onClick={() => handleOptionClick(skill)}>
                            {skill}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render experience levels */}
                  {message.experienceLevels && (
                    <div className="message-options">
                      <div className="exp-buttons">
                        {message.experienceLevels.map((level, levelIndex) => (
                          <button key={levelIndex} onClick={() => handleOptionClick(level)}>
                            {level}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render work modes */}
                  {message.workModes && (
                    <div className="message-options">
                      <div className="workmode-buttons">
                        {message.workModes.map((mode, modeIndex) => (
                          <button key={modeIndex} onClick={() => handleOptionClick(mode)}>
                            {mode}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render number of persons */}
                  {message.numberOptions && (
                    <div className="message-options">
                      <div className="number-buttons">
                        {message.numberOptions.map((number, numberIndex) => (
                          <button key={numberIndex} onClick={() => handleOptionClick(number)}>
                            {number}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render questions for help mode */}
                  {message.questions && (
                    <div className="message-options">
                      <div className="question-buttons">
                        {message.questions.map((question, qIndex) => (
                          <button key={qIndex} onClick={() => handleOptionClick(question)}>
                            {question}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Render matching team members */}
                  {message.members && (
                    <div className="matching-members">
                      {message.members.map((member, memberIndex) => (
                        <div key={memberIndex} className="member-card">
                          <div className="member-name">{member.name}</div>
                          <div className="member-skills">
                            {member.skills.map((skill, skillIndex) => (
                              <span key={skillIndex} className="skill-tag">{skill}</span>
                            ))}
                          </div>
                          <div className="member-details">
                            <span className="experience-level">Experience: {member.experience}</span>
                            <span className="project-type">Projects: {member.projects.join(', ')}</span>
                            <span className="work-mode">Work Mode: {member.workMode.join(', ')}</span>
                          </div>
                          <a href={`/more/${member.id}`} className="view-profile">View Profile</a>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Delete chat button */}
          <button className="delete-chat" onClick={handleDeleteChat}>
            <FaTrash /> Clear chat
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
