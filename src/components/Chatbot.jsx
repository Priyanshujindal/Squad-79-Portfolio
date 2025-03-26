import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';
import '../styles/Chatbot.css';

const Chatbot = () => {
  const { darkMode } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: 'Hi there! How can I help you with information about Squad 79?', sender: 'bot' }
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
    const userMessage = inputValue.trim();
    console.log('User message:', userMessage); // Log for debugging
    
    const newMessages = [...messages, { text: userMessage, sender: 'user' }];
    setMessages(newMessages);
    setInputValue('');

    // Simulate typing delay (500ms) for bot response
    setTimeout(() => {
      const botResponse = generateResponse(userMessage);
      setMessages([...newMessages, { text: botResponse, sender: 'bot' }]);
    }, 500);
  };

  // Enhanced rule-based response generation with comprehensive app information
  const generateResponse = (userInput) => {
    // Normalize input by trimming whitespace and converting to lowercase
    const input = userInput.toLowerCase().trim();
    
    // Log for debugging
    console.log('Processing input:', input);
    
    // EXACT TOPIC MATCHING - Use specific patterns and more precise detection
    
    // 1. NAVIGATION QUERIES - Detect requests about specific pages
    if (input.match(/\bnavigate\b|\bfind\b|\bwhere\b|\bpage\b|\bsection\b|\bgo to\b|\bvisit\b|\bview\b|\bsee\b/)) {
      
      // HOME PAGE
      if (input.match(/\bhome\b|\blanding\b|\bmain page\b/)) {
        return "The Home page is our landing page that welcomes you to the Squad 79 portfolio! It showcases featured projects and provides an overview of our team. You can reach it by clicking the \"Squad 79\" logo in the top-left corner of any page, or by selecting \"Home\" in the navigation menu.";
      }
      
      // ABOUT PAGE - Only if explicitly about the About page
      if (input.match(/\babout page\b|\babout section\b/)) {
        return "The About page shares our team's story and mission! To visit it, simply click on \"About\" in the main navigation menu at the top of the page. This section provides background on Squad 79's formation and goals.";
      }
      
      // EXPERIENCE/PROJECTS PAGE
      if (input.match(/\bexperience\b|\bexperience page\b|\bprojects\b|\bproject page\b/) && !input.includes("more")) {
        return "The Experience page showcases all our projects! You can access it by clicking \"Experience\" in the main navigation menu. Each project card includes information about the technologies used and links to view more details. Click on any project card to see its full description, features, and demo links.";
      }
      
      // TEAMS PAGE
      if (input.match(/\bteam page\b|\bteams page\b|\bteams section\b/) && !input.includes("more")) {
        return "The Teams page introduces all Squad 79 members! Navigate there by clicking \"Teams\" in the main navigation menu. Each team member card includes a photo and brief info. Click on any card to view that person's detailed profile, including their projects and skills.";
      }
      
      // STUDENTS PAGE
      if (input.match(/\bstudents\b|\bstudent page\b|\bstudents page\b/) && !input.includes("more")) {
        return "The Students page lists all individual students involved in Squad 79! Access it by clicking \"Students\" in the main navigation menu. This page provides a different view of our team members, organized by individual contributions rather than project teams.";
      }
      
      // MENTORS PAGE
      if (input.match(/\bmentors\b|\bmentor page\b|\bmentors page\b/) && !input.includes("more")) {
        return "The Mentors page showcases the guides who helped Squad 79 succeed! You can find it by clicking \"Mentors\" in the main navigation menu. This section highlights the experienced professionals who provided guidance throughout our journey.";
      }
      
      // MORE PAGE - Most specific check for the MORE page
      if (input.match(/\bmore\b|\bmore page\b|\bmore section\b/)) {
        return "The More page contains additional information and resources about Squad 79! You can access it by clicking \"More\" in the main navigation menu. This section includes extra content that doesn't fit into the other main categories. From here, you can also click on student profiles, which will maintain proper back navigation to return to the More page when you're done viewing a profile, thanks to our special routing system.";
      }
      
      // PROJECT DETAILS PAGE
      if (input.match(/\bproject details?\b|\bproject page\b|\bproject information\b/)) {
        return "To view detailed information about a specific project, simply click on any project card in the Experience section! The project details page includes a comprehensive description, technologies used, team members involved, key features, and links to live demos when available. Our system uses smart name matching to ensure team member names correctly link to their profiles regardless of whether full or partial names are used.";
      }
      
      // PROFILE/STUDENT DETAILS PAGE
      if (input.match(/\bprofile\b|\bmember page\b|\bstudent profile\b|\bstudent detail\b/)) {
        return "To view a team member's detailed profile, click on their card in either the Teams or Students section! Each profile page includes their photo, bio, skills, project contributions, and contact information. When viewing profiles from the More page, the back button will correctly return you to the More page instead of Teams, thanks to our contextual navigation system.";
      }
      
      // General navigation info if no specific page requested
      return "Our portfolio site has several main sections that you can access from the navigation menu at the top of every page: \n\n• Home - Our landing page with featured projects\n• About - Information about Squad 79's mission\n• Experience - All our projects and workshops\n• Teams - Our team members grouped by projects\n• Students - Individual student profiles\n• Mentors - Those who guided our journey\n• More - Additional resources and information\n\nYou can also use me, the chatbot, for help finding specific information! What would you like to explore?";
    }
    
    // 2. PROJECT INFORMATION
    if (input.match(/\bproject(s)?\b|\bwork\b|\bportfolio\b|\bshowcase\b|\bmade\b|\bcreated\b/)) {
      return "Our portfolio includes several exciting web development projects! You can explore our flagship projects like the Spotify Clone (a music streaming interface), Tic Tac Toe Game, Money Tracking Website (for financial management), Classic Dino Game (inspired by Chrome's offline game), and a Netflix Clone (login page UI). Each project showcases our skills in HTML, CSS, JavaScript, and React. We've also organized workshops on Python libraries like NumPy, Pandas, and Matplotlib, and participated in LeetCode coding events!";
    }
    
    // 3. TEAM INFORMATION
    if (input.match(/\bteam\b|\bsquad\b|\bsquad 79\b|\bgroup\b|\bwho\b/) && 
        !input.match(/\bteam page\b|\bwhere\b|\bnavigate\b|\bfind\b|\bgo to\b/)) {
      return "Squad 79 is a team of talented students from Kalvium! Our core members include Priyanshu Jindal, Raksham Sharma, Rajatvir Pandhi, Rehat Singh, and others who have collaborated on various web development projects and workshops. Our portfolio showcases our journey, skills in web technologies, and accomplishments through a collection of interactive web applications and educational events.";
    }
    
    // 4. STUDENT MEMBER INFORMATION
    if (input.match(/\bstudent(s)?\b|\bmember(s)?\b|\bdeveloper(s)?\b|\bpeople\b/) && 
        !input.match(/\bpage\b|\bwhere\b|\bnavigate\b|\bfind\b/)) {
      return "Squad 79 consists of talented individuals with complementary skills! Our core team includes Priyanshu Jindal (who worked on the Spotify Clone, Tic Tac Toe, Money Tracking Website, Dino Game, and Netflix Clone), Raksham Sharma, Rajatvir Pandhi, and Rehat Singh (who collaborated on the Python workshop and LeetCode event). We also have extended team members like Parth, Ramanpreet, Rakshit, Shivani, Riddhi, and others who contribute their unique skills to our collective projects. Each member's profile highlights their technical specialties and project contributions!";
    }
    
    // 5. MENTOR INFORMATION
    if (input.match(/\bmentor(s)?\b|\bguide(s)?\b|\bteacher(s)?\b|\binstructor(s)?\b|\bcoach(es)?\b/) && 
        !input.match(/\bpage\b|\bwhere\b|\bnavigate\b|\bfind\b/)) {
      return "Our mentors at Kalvium have played a crucial role in guiding our development journey! They have supported us through our web development projects and coding events, providing technical guidance and helping us improve our skills in HTML, CSS, JavaScript, React, and Python. Their expertise has been invaluable as we created our various web applications and organized educational workshops.";
    }
    
    // 6. CONTACT INFORMATION
    if (input.match(/\bcontact\b|\breach\b|\bconnect\b|\bemail\b|\bmessage\b|\btalk\b/)) {
      return "Connecting with Squad 79 members is easy! Each team member's profile in the Teams section contains their professional contact information. You can find details for core members like Priyanshu Jindal, Raksham Sharma, Rajatvir Pandhi, and Rehat Singh, as well as our extended team. Simply navigate to any team member's profile by clicking on their card in the Teams or Students section to find their preferred contact methods.";
    }
    
    // 7. GREETINGS
    if (input.match(/\bhello\b|\bhi\b|\bhey\b|\bhowdy\b|\bgreetings\b/)) {
      return "Hello there! I'm excited to help you navigate the Squad 79 portfolio! I can provide information about our team, projects, or help you find your way around the site. What would you like to know about?";
    }
    
    // 8. APPRECIATION
    if (input.match(/\bthank(s)?\b|\bappreciate\b|\bhelpful\b/)) {
      return "You're absolutely welcome! It's my pleasure to share information about Squad 79 with you. We've put a lot of effort into our web development projects and this portfolio site, so your interest means a lot to us! Is there anything else you'd like to learn about our team, specific projects, or how to navigate the site?";
    }
    
    // 9. FAREWELL
    if (input.match(/\bbye\b|\bgoodbye\b|\bsee you\b|\blater\b|\bexit\b/)) {
      return "Thank you for taking the time to learn about Squad 79! We hope you enjoyed exploring our portfolio and discovering our web development projects. Feel free to return anytime to dive deeper into our work or reach out to team members. Be sure to check out the live demos of our projects like the Spotify Clone, Tic Tac Toe Game, Money Tracking Website, Dino Game, and Netflix Clone. Wishing you a wonderful day!";
    }
    
    // 10. SKILLS AND TECHNOLOGIES
    if (input.match(/\bskill(s)?\b|\btechnology\b|\btechnologies\b|\btech\b|\bstack\b|\bframework(s)?\b|\blanguage(s)?\b|\bcoding\b|\bprogramming\b/)) {
      return "Squad 79 members are skilled in various web technologies! Our primary expertise includes HTML, CSS, and JavaScript for frontend development, with projects also incorporating React for more complex applications. We've developed responsive designs, interactive UIs, and game mechanics using these core technologies. Additionally, we've worked with Python and its data science libraries (NumPy, Pandas, Matplotlib) for our workshop and educational events. These skills have enabled us to create diverse projects from music players and games to financial trackers and streaming platform interfaces!";
    }
    
    // 11. APP/WEBSITE INFO
    if (input.match(/\bwebsite\b|\bapp\b|\bportfolio site\b|\bhow\b.*\bmade\b|\bhow\b.*\bbuilt\b|\btech\b.*\bused\b/)) {
      return "Our portfolio website is built using React with Vite for optimized performance! The site features responsive design to ensure it looks great on all devices, and includes sections to showcase our projects, team members, and journey. The site has Home, About, Experience, Teams, Students, Mentors, and More pages, each designed to highlight different aspects of Squad 79. We've implemented features like this interactive chatbot to enhance user experience, and the site includes links to live demos where you can try our projects directly!";
    }
    
    // 12. EXPERIENCE AND WORKSHOPS
    if (input.match(/\bexperience\b|\bintern(ship)?\b|\bwork experience\b|\bjob\b|\bworkshop(s)?\b|\bevent(s)?\b/) && 
        !input.match(/\bpage\b|\bwhere\b|\bnavigate\b|\bfind\b/)) {
      return "Squad 79's experience includes both project development and educational events! We've created several web applications including a Spotify Clone, Tic Tac Toe Game, Money Tracking Website, Classic Dino Game, and Netflix login UI. Additionally, we've organized a 2-day workshop on Python libraries (NumPy, Pandas, Matplotlib) and participated in a LeetCode coding event focused on algorithm challenges. These experiences have helped us develop practical skills in web development and data analysis, while also sharing our knowledge with others through hands-on learning opportunities.";
    }
    
    // 13. ACHIEVEMENTS
    if (input.match(/\bachievement(s)?\b|\baward(s)?\b|\brecognition(s)?\b|\baccomplish(ment)?(s)?\b|\bsuccess(es)?\b/)) {
      return "Squad 79's achievements include developing a portfolio of diverse web projects! We've successfully created and deployed applications like the Spotify Clone (with music player interface), interactive Tic Tac Toe Game (with win detection logic), Money Tracking Website (for financial management), Classic Dino Game (an endless runner), and Netflix UI clone. We've also successfully organized educational events like our Python libraries workshop and participated in coding challenges. Each project represents our growing technical skills and ability to create functional, user-friendly web applications from concept to deployment.";
    }
    
    // 14. EDUCATION
    if (input.match(/\bwhere\b.*\bfrom\b|\blocation\b|\bcollege\b|\buniversity\b|\bschool\b|\beducation\b/)) {
      return "Squad 79 members are students from Kalvium, an innovative coding education program! Our members have been developing their skills in web technologies like HTML, CSS, JavaScript, and React, as well as data science with Python libraries. Through Kalvium's project-based approach, we've created various web applications and organized educational workshops to apply our knowledge in practical ways. This combination of structured learning and hands-on project development has helped us build the portfolio of work you can explore on this site.";
    }
    
    // 15. TIMELINE
    if (input.match(/\bwhen\b|\bhow long\b|\btime\b|\bduration\b|\btimeline\b/)) {
      return "Squad 79's journey at Kalvium has involved developing multiple web projects and educational events! We've worked on various applications including the Spotify Clone, Tic Tac Toe Game, Money Tracking Website, Classic Dino Game, and Netflix UI clone. Each project has helped us build skills in HTML, CSS, JavaScript, and React. Along with project development, we've organized a 2-day workshop on Python libraries and participated in coding events. Our portfolio website represents the culmination of this journey, showcasing the range of skills and applications we've developed.";
    }
    
    // 16. FEATURES AND FUNCTIONALITY
    if (input.match(/\bfeature(s)?\b|\bfunction(ality)?\b|\bdo\b|\buse\b|\bhow to\b|\bcan i\b/)) {
      // Theme mode
      if (input.match(/\btheme\b|\bdark\b|\blight\b|\bmode\b|\bcolor\b/)) {
        return "Our portfolio site supports both light and dark modes! You can toggle between them by clicking the theme switch icon in the top-right corner of the navigation bar. This feature allows you to customize your viewing experience based on your preference or lighting conditions.";
      }
      
      // Chatbot
      if (input.match(/\bchat(bot)?\b|\bassistant\b|\bbot\b/)) {
        return "You're using the chatbot feature right now! I'm designed to help answer questions about Squad 79, our projects, and guide you through the portfolio site. I was created using React and JavaScript to make navigating our portfolio more interactive and informative. How can I help you learn more about Squad 79 today?";
      }
      
      // Project browsing
      if (input.match(/\bproject\b/) && input.match(/\bfilter\b|\bsort\b|\bsearch\b/)) {
        return "In the Experience section, you can explore our projects easily! Projects are presented as cards that you can click to view more details. Each project displays its title, a brief description, key technologies used, and the team members involved. When you click on team member names, you'll be taken to their profiles thanks to our robust name matching system that works with full names, partial names, and first-name-only references.";
      }
      
      // Demos
      if (input.match(/\bdemo(s)?\b|\blive\b|\btry\b/)) {
        return "Many of our projects have live demos available! When viewing a project's details page, look for the \"View Demo\" or \"Live Preview\" button that will take you to a working version of the project. This allows you to experience our work firsthand rather than just reading about it.";
      }
      
      // Contact
      if (input.match(/\bcontact\b|\breach\b/)) {
        return "To contact Squad 79 members, visit their individual profile pages! You can access these profiles by clicking on team member cards in either the Teams or Students sections. Each profile includes preferred contact methods for that person.";
      }
      
      // Default features overview
      return "Our portfolio site offers several features to enhance your experience: \n\n• Theme Toggle - Switch between light and dark modes\n• Interactive Project Cards - Click to view detailed information\n• Live Project Demos - Try out our projects firsthand\n• Team Member Profiles - Learn about each developer's skills and contributions\n• This Chatbot Assistant - Help you navigate and find information\n• Responsive Design - Optimal viewing on any device\n• Smart Name Matching - Properly identify team members even with partial names\n• Contextual Back Navigation - Return to the correct previous page\n\nIs there a specific feature you'd like to know more about?";
    }
    
    // 17. HELP REQUESTS
    if (input.match(/\bhelp\b|\bassistance\b|\bsupport\b|\bguide\b|\binfo(rmation)?\b/)) {
      return "I'm happy to help you navigate the Squad 79 portfolio! I can provide information about:\n\n• Our web development projects (Spotify Clone, Tic Tac Toe, etc.)\n• Team members and their roles\n• Technologies we use\n• How to navigate different sections of the site\n• Where to find specific information\n• How to use site features\n\nJust ask me what you're looking for, and I'll guide you to the right place!";
    }
    
    // 18. ABOUT CHATBOT
    if (input.match(/\bwho are you\b|\bwhat are you\b|\byour name\b|\bchatbot\b|\bbot\b|\bai\b/)) {
      return "I'm the Squad 79 Assistant, a chatbot designed to help you explore our portfolio! I can provide information about our team members, projects, how to navigate the site, and answer questions about Squad 79. I was created using React and JavaScript to make navigating our portfolio more interactive and informative. How can I help you learn more about Squad 79 today?";
    }
    
    // 19. FEEDBACK
    if (input.match(/\bfeedback\b|\bsuggest(ion)?\b|\bimprove\b|\bproblem\b|\bissue\b|\bbug\b/)) {
      return "Thank you for your interest in providing feedback! We are always looking to improve our portfolio site. While there isn't a dedicated feedback form, you can reach out to team members through their contact information on their profile pages. We appreciate any suggestions or reports that can help us enhance the user experience!";
    }
    
    // 20. RESPONSIVE DESIGN
    if (input.match(/\bmobile\b|\bphone\b|\btablet\b|\bdesktop\b|\bresponsive\b|\bdevice\b/)) {
      return "Our portfolio site is fully responsive! It is designed to provide an optimal viewing experience across a wide range of devices, from mobile phones to desktop monitors. The layout will automatically adjust based on your screen size, ensuring that content remains accessible and visually appealing regardless of how you are accessing the site.";
    }
    
    // 21. STUDENT MATCHING SYSTEM
    if (input.match(/\bmatching\b|\bcase sensitive\b|\bname recognition\b|\blink\b|\bstudent profile\b/)) {
      return "Our portfolio uses an advanced name matching system to ensure team member profiles are easily accessible! The system supports case-insensitive matching, handles full names, partial names, and first-name-only references. This makes it much easier to navigate between projects and the relevant team members who worked on them, ensuring you can always find the right person's profile no matter how their name is referenced.";
    }
    
    // 22. BACK NAVIGATION
    if (input.match(/\bback\b|\breturn\b|\bprevious\b|\bnavigation\b/)) {
      return "Our portfolio site features smart contextual navigation! When viewing student profiles from the More page, the back button will correctly return you to the More page instead of the Teams page. This creates a more intuitive browsing experience as you explore different sections of our portfolio.";
    }
    
    // 23. ABOUT PAGE SPECIFIC QUESTION
    if (input.match(/\babout\b/) && !input.match(/\bteam\b|\bsquad\b|\bproject\b|\bnavigate\b|\bsite\b|\bportfolio\b|\bpage\b/)) {
      return "The About page shares Squad 79's story and mission! It provides background on our team's formation, goals, and the journey that brought us together at Kalvium. To visit this page, simply click on \"About\" in the main navigation menu at the top of any page.";
    }
    
    // 24. MORE PAGE SPECIFIC QUESTION
    if (input.match(/\bmore\b/) && !input.match(/\bteam\b|\bsquad\b|\bproject\b|\bnavigate\b|\bsite\b|\bportfolio\b|\bhome\b|\babout\b|\bexperience\b/)) {
      return "The More page contains additional information and resources about Squad 79! You can access it by clicking \"More\" in the main navigation menu. This section includes extra content that doesn't fit into the other main categories. From here, you can also click on student profiles, which will maintain proper back navigation to return to the More page when you're done viewing a profile, thanks to our special routing system.";
    }
    
    // Fallback response with suggestions
    return `I don't have specific information about "${userInput}", but I'd be happy to help with these aspects of the Squad 79 portfolio:

1. Our team members and their skills
2. Our web development projects (Spotify Clone, Tic Tac Toe, etc.)
3. Navigating the different sections of the site
4. Technologies and tools we use
5. Site features and functionality

What would you like to learn more about?`;
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
