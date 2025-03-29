// Centralized project data source for the entire application
// This ensures all components use the same project data

const projectsData = [
  {
    id: 1,
    title: "Spotify Clone",
    description: "A clone of the popular music streaming platform, Spotify.",
    image: "./spotify.jpg",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ["Priyanshu" , "Raksham" ],
    demoLink: "https://spotifyfree.netlify.app/",
    features: [
      "Music player interface",
      "Playlist management",
      "Artist discovery",
      "Responsive design",
      "Song search functionality"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_long: "This Spotify clone application provides users with a familiar music streaming interface. "
  },
  {
    id: 2,
    title: "Gen AI Workshop",
    description: "A workshop on the python libary like numpy, pandas, matplotlib, etc.",
    image: "./genai.jpg",
    category: "Workshops",
    tags: ["Python", "Numpy", "Pandas", "Matplotlib"],
    team: ["Raksham", "Priyanshu", "Rehat", "Rajat" , 'Pranav' , 'Priyansh' , 'Pranay'],
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
    description: "A classic two-player game built with modern web technologies.",
    image: "./tiktak2.jpg",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ["Priyanshu" , 'Pranav'],
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
    team: ["Raksham", 'Priyansh' , 'Pavitar'],
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
    description: "An application that helps users track their expenses, income, and savings.",
    image: "./money.jpg",
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
      description: "A fun and engaging endless runner game inspired by the classic Chrome Dino game.",
    image: "./dino2.jpg",
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
    image: "./net2.jpg",
    category: "Web Development",
    tags: ["HTML", "CSS"],
    team: ["Priyanshu" , 'Raksham'],
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
  },
  {
    id: 8,
    title: "Simon Says Game",
    description: "A Simon Says game UI clone",
    image: "./simon2.jpg",
    category: "Web Development",
    tags: ["HTML", "CSS", "JavaScript"],
    team: ['Raksham'],
    demoLink: "https://simon-says-game-clone.netlify.app/",
    features: [
      "Simon Says game UI clone",
      "Interactive form elements",
      "CSS animations and transitions",
      "Mobile-first approach",
      "Cross-browser compatibility"
    ],
    technologies: ["HTML", "CSS", "JavaScript"],
    description_long: "This Simon Says game clone recreates the classic Simon Says game interface, allowing players to follow the sequence of colors and sounds to advance through levels.\n\nThe game is built using HTML, CSS, and JavaScript, with smooth animations and responsive controls. The difficulty progressively increases as the player's score gets higher, providing a challenging experience for players of all skill levels.\n\nThe project demonstrates strong game development fundamentals, including collision detection, sprite animation, and game state management, all implemented using vanilla JavaScript without relying on external game engines or libraries."
  },
  {
    id: 9,
    title: "Web 3 workshop",
    description: "A workshop on the basics of blockchain technology.",
    image: "./web3.jpg",
    category: "Workshops",
    tags: ["Web 3.0", "Blockchain", "Solidity"],
    team: ['Riya' , 'Prachi'],
    demoLink: "https://simon-says-game-clone.netlify.app/",
    features: [
      "Hands-on coding sessions",
      "Blockchain technology fundamentals",
      "Smart contract development",
      "Decentralized applications (DApps)",
      "Interactive form elements",
      "CSS animations and transitions",
      "Mobile-first approach",
      "Cross-browser compatibility"
    ],
    technologies: ["Web 3.0", "Blockchain", "Solidity"],
    description_long: "This workshop focused on the fundamentals of Web 3.0 and blockchain technology, including smart contract development and decentralized applications (DApps). Participants gained hands-on experience with Solidity, the programming language for smart contracts on Ethereum.\n\nThe workshop was designed to help students understand the core concepts of blockchain technology and its applications in the decentralized web. Through interactive coding sessions and real-world examples, participants learned how to create and deploy their own smart contracts and build DApps using popular frameworks like Truffle and OpenZeppelin.\n\nBy the end of the workshop, students had created a basic DApp and gained a solid foundation in blockchain development."
  },
  {
    id: 10,
    title: "Hack with Her Hackathon",
    description: "A hackathon on the theme of 'Women Empowerment'.",
    image: "./hwh.jpg",
    category: "Events",
    tags: ['Coding' , 'Ideas' , 'Women Empowerment'],
    team: ['Riddhi Garg' , 'Piyanshi' , 'Sanchita' ],
    features: [
      "Hands-on coding sessions",
      "Ideas",
      "Women Empowerment",
      "Interactive form elements",
      "CSS animations and transitions",
      "Mobile-first approach",
      "Cross-browser compatibility"
    ],
    technologies: ["Coding" , "Ideas" , "Women Empowerment"],
    description_long: "Hack With Her is a transformative hackathon designed to inspire and empower women in technology, innovation, and entrepreneurship. This event brings together women from diverse backgrounds, skill sets, and experiences to create impactful, tech-driven solutions that address real-world challenges. Aimed at fostering an inclusive environment, Hack With Her encourages collaboration, creativity, and leadership among women in the tech industry."

  },
  {
    id: 11,
    title: "Joget Hackathon",
    description: "A hackathon that needs no code'.",
    image: "./joget.jpg",
    category: "Events",
    tags: ['Codeless' , 'Ideas' , 'Hackathon'],
    team: ['Rajat' , 'Rishab' , 'Riya Garg' , 'Piyanshi'  ],
    demoLink: "https://simon-says-game-clone.netlify.app/",
    features: [
      "Codeless",
      "Ideas",  
    ],
    technologies: ["Codeless" , "Ideas" , "Hackathon"],
    description_long: "This hackathon focused on the theme of 'Women Empowerment'. Participants gained hands-on experience with coding and ideas. The workshop was designed to help students understand the core concepts of blockchain technology and its applications in the decentralized web. Through interactive coding sessions and real-world examples, participants learned how to create and deploy their own smart contracts and build DApps using popular frameworks like Truffle and OpenZeppelin.\n\nBy the end of the workshop, students had created a basic DApp and gained a solid foundation in blockchain development."
  },
  {
    id: 12,
    title: "Azure Certification",
    description: "A certification on the basics of Azure.",
    image: "./azure.jpg",
    category: "Events",
    tags: ['Azure' , 'Certification'],
    team: ['Rajat' , 'Rishab' , 'Riya Garg' , 'Piyanshi' ,'Raksham' , 'Priyanshu' , 'Pranav' , 'Prachi' , 'Pavitar' , 'Radhil' , 'Riddhi'  , 'Sanchita' , 'Pranay' , 'Sarthak' , 'Ramanpreet' , 'Raman' , 'Raghav' , 'Rishab' , 'Riya' , 'Piyanshi' , 'Sanchita' , 'Pranay' , 'Prachi' , 'Pavitar' , 'Radhil' , 'Riddhi' ],
    features: [
      "Azure",
      "Certification",  
    ],
    technologies: ["Azure" , "Certification"],
    description_long: "This certification focused on the basics of Azure. Participants gained hands-on experience with Azure and its applications. The workshop was designed to help students understand the core concepts of Azure and its applications in the decentralized web. Through interactive coding sessions and real-world examples, participants learned how to create and deploy their own smart contracts and build DApps using popular frameworks like Truffle and OpenZeppelin.\n\nBy the end of the workshop, students had created a basic DApp and gained a solid foundation in blockchain development."
  },
  {
    id: 13,
    title: "Python Bootcamp Infosys",
    description: "A bootcamp on the basics of Python.",
    image: "./bootcamp.jpg", 
    category: "Events",
    tags: ['Python' , 'Bootcamp'],
    team: ['Rajat'  , 'Riya Garg' , 'Piyanshi' ,'Raksham' , 'Priyanshu' , 'Pranav' , 'Prachi' , 'Pavitar' , 'Radhil' , 'Riddhi', 'Rehat' , 'Rajatvir' , 'Ramanpreet' , 'Raman' , 'Raghav' , 'Rishab' , 'Riya' , 'Piyanshi' , 'Sanchita' , 'Pranay' , 'Prachi' , 'Pavitar' , 'Radhil' , 'Riddhi' , 'Sarthak' ],
    demoLink: "https://simon-says-game-clone.netlify.app/",
    features: [
      "Python",
      "Bootcamp",  
    ],
    technologies: ["Python" , "Bootcamp"],
    description_long: "This certification focused on the basics of Azure. Participants gained hands-on experience with Azure and its applications. The workshop was designed to help students understand the core concepts of Azure and its applications in the decentralized web. Through interactive coding sessions and real-world examples, participants learned how to create and deploy their own smart contracts and build DApps using popular frameworks like Truffle and OpenZeppelin.\n\nBy the end of the workshop, students had created a basic DApp and gained a solid foundation in blockchain development."
  },
  {
    id: 14,
    title: "Technova",
    description: "A hackathon on the theme of 'Women Empowerment'.",
    image: "./Technova.JPG", 
    category: "Events",
    tags: ['Technova' , 'Hackathon'],
    team: ['Sarthak' ],
    demoLink: "https://simon-says-game-clone.netlify.app/",
    features: [
      "Technova",
      "Hackathon",  
    ],
    technologies: ["Technova" , "Hackathon"],
    description_long: "This certification focused on the basics of Azure. Participants gained hands-on experience with Azure and its applications. The workshop was designed to help students understand the core concepts of Azure and its applications in the decentralized web. Through interactive coding sessions and real-world examples, participants learned how to create and deploy their own smart contracts and build DApps using popular frameworks like Truffle and OpenZeppelin.\n\nBy the end of the workshop, students had created a basic DApp and gained a solid foundation in blockchain development."
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
