// Centralized project data source for the entire application
// This ensures all components use the same project data

const projectsData = [
  {
    id: 1,
    title: "Spotify Clone",
    description: "A clone of the popular music streaming platform, Spotify. This project allows users to listen to their favorite music and discover new artists.",
    image: "./images/soptify.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ["Priyanshu"],
    demoLink: "https://spotifyfree.netlify.app/",
    features: [
      "Music player interface",
      "Playlist management",
      "Artist discovery",
      "Responsive design",
      "Song search functionality"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_long: "This Spotify clone application provides users with a familiar music streaming interface. The web app mimics the core functionality of Spotify, allowing users to browse songs, create playlists, and play music.\n\nBuilt using vanilla JavaScript, HTML, and CSS, this project demonstrates strong front-end development skills without relying on heavy frameworks. The responsive design ensures the application works seamlessly across desktop and mobile devices.\n\nThe project incorporates best practices for audio handling in the browser and implements a clean, intuitive user interface that closely resembles the official Spotify application."
  },
  {
    id: 2,
    title: "2 days workshop",
    description: "A workshop on the python libary like numpy, pandas, matplotlib, etc.",
    image: "./images/workshop.JPG",
    category: "Workshops",
    tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
    team: ["Raksham", "Priyanshu", "Rehat", "Rajat"],
    features: [
      "Hands-on coding sessions",
      "Data visualization techniques",
      "Data manipulation with Pandas",
      "Statistical analysis with NumPy",
      "Real-world case studies"
    ],
    technologies: ["Python", "NumPy", "Pandas", "Matplotlib", "Jupyter Notebook"],
    description_long: "This intensive two-day workshop focused on essential Python libraries for data science and analysis. Participants gained hands-on experience with NumPy for numerical computations, Pandas for data manipulation, and Matplotlib for data visualization.\n\nThe workshop was designed to help students develop practical skills that can be applied to real-world data analysis projects. Through guided exercises and mini-projects, participants learned how to clean and transform data, perform statistical analysis, and create meaningful visualizations.\n\nBy the end of the workshop, students had created several small projects that demonstrated their ability to extract insights from complex datasets using the Python data science ecosystem."
  },
  {
    id: 3,
    title: "Tic Tac Toe Game",
    description: "A classic two-player game built with modern web technologies. Features include responsive design, player turn indicators, and win detection logic.",
    image: "./images/TickTacToe.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ["Priyanshu"],
    demoLink: "https://relastic-tac-toe.netlify.app/",
    features: [
      "Two-player gameplay",
      "Win condition detection",
      "Score tracking",
      "Responsive design",
      "Game reset functionality"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_long: "This interactive Tic Tac Toe game provides a modern take on the classic paper-and-pencil game. Players can take turns placing X's and O's on a 3x3 grid, with the application automatically detecting winning combinations and draws.\n\nThe game features a clean, intuitive interface built with HTML and CSS, with JavaScript handling the game logic. Player scores are tracked across multiple rounds, and animations add visual feedback to player actions.\n\nThe responsive design ensures the game is playable on devices of all sizes, from desktop computers to mobile phones. This project demonstrates strong fundamentals in front-end web development and interactive application design."
  },
  {
    id: 4,
    title: "Leetcode Event by Kalvium",
    description: "A coding event on real life coding questions to improve coding skills.",
    image: "./images/leetcode.jpg",
    category: "Events",
    tags: ["Python"],
    team: ["Raksham", "Rehat", "Rajat"],
    features: [
      "Competitive programming challenges",
      "Real-world algorithm problems",
      "Code optimization exercises",
      "Peer code reviews",
      "Collaborative problem solving"
    ],
    technologies: ["Python", "Data Structures", "Algorithms", "LeetCode Platform"],
    description_long: "This Leetcode event hosted by Kalvium focused on improving coding skills through competitive programming challenges. Participants tackled a variety of algorithm and data structure problems designed to enhance their problem-solving abilities and coding efficiency.\n\nThe event included both individual challenges and collaborative problem-solving sessions. Participants learned optimization techniques and best practices for solving complex programming problems under time constraints.\n\nBy participating in this event, students gained valuable experience in technical interview preparation and developed a deeper understanding of algorithm complexity and efficient code implementation."
  },
  {
    id: 5,
    title: "Money Tracking Website",
    description: "A comprehensive financial management application that helps users track their expenses, income, and savings. Features include expense categorization.",
    image: "./images/MoneyTracker.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    team: ["Priyanshu"],
    demoLink: "https://moneytrackering.netlify.app/",
    features: [
      "Expense and income tracking",
      "Budget planning tools",
      "Category-based spending analysis",
      "Financial reports and charts",
      "Responsive design for desktop and mobile"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    description_long: "This money tracking application provides users with comprehensive tools to manage their personal finances. The app allows users to log expenses and income, categorize transactions, and track their overall financial health.\n\nBuilt with React, the application offers a dynamic and responsive user interface that makes financial management intuitive and accessible. Users can visualize their spending patterns through interactive charts and generate reports to better understand their financial habits.\n\nThe project implements best practices for state management and data persistence, ensuring user data is securely stored and easily accessible. The responsive design makes the application usable on both desktop and mobile devices, allowing users to manage their finances on the go."
  },
  {
    id: 6,
    title: "Classic Dino Game",
    description: "A fun and engaging endless runner game inspired by the classic Chrome Dino game. Features include smooth animations, score tracking, and obstacle avoidance mechanics.",
    image: "./images/DinoGame.png",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ["Priyanshu"],
    demoLink: "https://classic-dinogame.netlify.app/",
    features: [
      "Endless runner gameplay",
      "Progressive difficulty",
      "Score tracking and high scores",
      "Responsive controls",
      "Collision detection"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Canvas API"],
    description_long: "This recreation of the classic Chrome Dino game offers an engaging endless runner experience. Players control a dinosaur character that must jump over cacti and avoid other obstacles to achieve the highest possible score.\n\nThe game is built using HTML Canvas and JavaScript, with smooth animations and responsive controls. The difficulty progressively increases as the player's score gets higher, providing a challenging experience for players of all skill levels.\n\nThe project demonstrates strong game development fundamentals, including collision detection, sprite animation, and game state management, all implemented using vanilla JavaScript without relying on external game engines or libraries."
  },
  {
    id: 7,
    title: "Netflix Clone",
    description: "A modern streaming platform login page UI clone",
    image: "./images/netflix-clone.png",
    category: "Web Development",
    tags: ["HTML", "CSS"],
    team: ["Priyanshu"],
    demoLink: "https://netlify-79.netlify.app/",
    features: [
      "Responsive UI design",
      "Interactive form elements",
      "CSS animations and transitions",
      "Mobile-first approach",
      "Cross-browser compatibility"
    ],
    technologies: ["HTML", "CSS"],
    description_long: "This Netflix login page clone recreates the sleek, modern user interface of the popular streaming platform's entry point. The project focuses on pixel-perfect UI implementation and responsive design principles.\n\nBuilt using only HTML and CSS, the clone demonstrates strong front-end development skills, particularly in creating visually appealing layouts and implementing modern design patterns without JavaScript dependencies.\n\nThe responsive design ensures the login page looks and functions properly across devices of all sizes, from mobile phones to large desktop displays. This project showcases attention to detail in replicating complex UI components and implementing them with clean, maintainable code."
  }
];

// Mapping function to convert team member names to student IDs
const getMemberId = (member) => {
  // Comprehensive mapping of all team member names to correct student IDs
  const memberMap = {
    // Priyanshu variations
    "priyanshu": 1,
    "priyanshu jindal": 1,
    "p jindal": 1,
    "p. jindal": 1,
    
    // Raksham variations
    "raksham": 2,
    "raksham sharma": 2,
    "r sharma": 2,
    "r. sharma": 2,
    
    // Rajatvir variations  
    "rajat": 3,
    "rajatvir": 3,
    "rajatvir pandhi": 3,
    "r pandhi": 3,
    "r. pandhi": 3,
    
    // Riya variations
    "riya": 4,
    "riya garg": 4,
    "r garg": 4,
    "r. garg": 4,
    
    // Rehat variations
    "rehat": 5,
    "rehat singh": 5,
    "r singh": 5,
    "r. singh": 5,
    
    // New members (Pranav etc.)
    "parth dommera": 6,
    "parth": 6,
    "ramanpreet singh": 7,
    "ramanpreet": 7,
    "rakshit": 8,
    "shivani jindal": 9,
    "shivani": 9,
    "riddhi garg": 10,
    "riddhi": 10,
    "pranav arora": 11,
    "pranav": 11,
    "priyansh thakur": 12,
    "priyansh": 12,
    "raghav sharma": 13,
    "raghav": 13,
    "rishab bansal": 14,
    "rishab": 14,
    "piyanshi": 15,
    "sarthak khurana": 16,
    "sarthak": 16,
    "sanchita bhandari": 17,
    "sanchita": 17,
    "pranay obero": 18,
    "pranay": 18,
    "prachi behal": 19,
    "prachi": 19,
    "pavitar kumar": 20,
    "pavitar": 20,
    "radhil narula": 21,
    "radhil": 21
  };
  
  // Convert input to lowercase for case-insensitive comparison
  const lowerInputName = member.toLowerCase();
  
  // Direct match
  if (memberMap[lowerInputName]) {
    return memberMap[lowerInputName];
  }
  
  // Check for substring matches 
  for (const [name, id] of Object.entries(memberMap)) {
    // Complete inclusion (inputName includes mapName or vice versa)
    if (lowerInputName.includes(name) || name.includes(lowerInputName)) {
      return id;
    }
  }
  
  // Default fallback - if no match is found, default to Priyanshu (ID 1)
  return 1;
};

export { projectsData, getMemberId };
