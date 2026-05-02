import { Code, Layout, Smartphone, Database, Server, PenTool, GitBranch, Globe, Award, Briefcase, GraduationCap, BarChart3, Cloud, Brain } from 'lucide-react';

export const HERO_DATA = {
  availability: "Open for opportunities",
  name: "Satyam Kumar",
  roles: ["Building Scalable Data & Web Solutions"],

  bio: "Hands-on experience in Snowflake, Power BI, ETL pipelines, MERN Stack, and AI-powered applications. Focused on building scalable systems, modern web products, and data pipelines.",
  resumes: [
    { label: "Software Engineer CV", link: "/software_engineer_cv.pdf" }
  ],
  githubLink: "https://www.github.com/satyam1355/",
  linkedinLink: "https://www.linkedin.com/in/satyam-kumar05/",
  email: "satyam963787@gmail.com",
  phone: "+91 7004880242",
  leetcodeLink: "https://leetcode.com/u/kmXlEpx9Fb/",
  image: "https://avatars.githubusercontent.com/u/177966814?s=400&u=1fa6cf05e34441d6104c99d20bdfb0b8b8f60d6a&v=4",
  badge: "11 Months Industry Experience",
  topTech: ["Java", "Mulesoft", "React", "Node.js", "AWS", "Postman", "SQL"]
};



export const ABOUT_DATA = {
  title: "About Me",
  description1:
    "I’m a Computer Science graduate with a strong foundation in Data Structures, Algorithms, and Object-Oriented Programming. I specialize in backend and full-stack development, building scalable APIs and systems using Node.js, Express, and modern web technologies, with a focus on clean architecture and performance.",

  description2:
    "With hands-on industry experience at Innova Solutions, I’ve developed enterprise-level integrations using MuleSoft, designed and deployed APIs on CloudHub, and contributed to secure, high-performance systems. I have also built full-stack applications using the MERN stack, implementing authentication, optimized database queries, and robust backend logic. I’m focused on delivering reliable software solutions while continuously improving my technical and problem-solving skills."
};


export const SKILLS_DATA = [
  {
    category: "Programming Languages",
    icon: Server,
    color: "sky",
    skills: [
      "Java",
      "C++",
      "JavaScript",
      "Problem Solving",
      "OOP Concepts"
    ]
  },
  {
    category: "Backend Development",
    icon: Database,
    color: "violet",
    skills: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Authentication & Authorization (JWT)",
      "MVC Architecture",
      "Middleware Handling",
      "Error Handling",
      "Input Validation"
    ]
  },
  {
    category: "Frontend Development",
    icon: Layout,
    color: "emerald",
    skills: [
      "React.js (Basic)",
      "JavaScript (ES6+)",
      "HTML",
      "CSS",
      "Component-Based Architecture",
      "State Management (Basics)",
      "Responsive Design"
    ]
  },
  {
    category: "Databases",
    icon: BarChart3,
    color: "cyan",
    skills: [
      "MongoDB",
      "MySQL",
      "SQL",
      "Joins",
      "Indexing",
      "Query Optimization",
      "Schema Design",
      "CRUD Operations"
    ]
  },
  {
    category: "Integration & Platforms",
    icon: Cloud,
    color: "amber",
    skills: [
      "MuleSoft",
      "RAML",
      "DataWeave",
      "Anypoint Platform",
      "CloudHub",
      "API Design",
      "API Deployment",
      "System Integration",
      "Enterprise Integrations"
    ]
  },
  {
    category: "Tools & Technologies",
    icon: Brain,
    color: "rose",
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "API Testing",
      "Debugging",
      "Version Control",
      "SDLC Practices"
    ]
  },
  {
    category: "Core Computer Science",
    icon: Server,
    color: "indigo",
    skills: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP)",
      "DBMS",
      "Operating Systems",
      "Backend Architecture",
      "Time & Space Complexity",
      "Problem Solving (LeetCode/GFG)"
    ]
  }
];

export const EXPERIENCE_DATA = [
 {
    id: 1,
    title: "Software Developer",
    company: "Innova Solutions",
    period: "May 2025 - March 2026",
    description:
      "Worked as a Software Developer Intern at Innova Solutions, Hyderabad, building enterprise-grade API integrations and backend systems using MuleSoft. Contributed to scalable, secure, and high-performance data exchange solutions for real-world business workflows.",
    projects: [
      {
        name: "Enterprise Integration System (PISCES Project)",
        detail:
          "Engineered MuleSoft integration flows to enable seamless and secure communication between multiple internal and third-party systems, improving data consistency and reducing manual intervention across business processes."
      },
      {
        name: "Scalable API Development",
        detail:
          "Designed and delivered RESTful APIs for efficient data exchange, enhancing system interoperability and supporting high-volume transactions with reliable request-response handling."
      },
      {
        name: "Cloud Deployment & Performance Optimization",
        detail:
          "Deployed integration services on CloudHub, improving application availability and ensuring smooth runtime performance in a cloud-based environment."
      },
      {
        name: "API Testing & Quality Assurance",
        detail:
          "Performed end-to-end API testing using Postman, ensuring accurate data flow, proper error handling, and consistent endpoint behavior across systems."
      },
      {
        name: "Cross-Functional Collaboration",
        detail:
          "Collaborated with backend engineers and QA teams to deliver production-ready solutions, contributing to faster release cycles and maintaining high code quality standards."
      },
      {
        name: "Documentation & Maintainability",
        detail:
          "Contributed to API documentation and structured integration design, improving maintainability and making it easier for teams to understand and extend system functionality."
      }
    ]
  },
 {
  id: 2,
  title: "Full Stack Developer",
  company: "College Projects & Personal Development",
  period: "2023 - Present",
  description:
    "Developed full-stack web applications with a strong focus on backend development, RESTful APIs, authentication systems, and database optimization. Applied core concepts like Data Structures, Object-Oriented Programming, and DBMS to build scalable and maintainable solutions.",
  projects: [
    {
      name: "Online Blood Donation System",
      detail:
        "Built a real-time donor-recipient matching platform using Node.js, Express.js, and MongoDB. Designed REST APIs for user registration, authentication, and request management. Improved performance using query optimization and indexing."
    },
    {
      name: "Blogging Platform",
      detail:
        "Developed a full-stack blogging application using Node.js, Express.js, MongoDB, and React.js. Implemented CRUD operations, secure authentication, role-based authorization, input validation, and modular backend architecture."
    }
  ]
}
];

export const EDUCATION_CERTS_DATA = {
  education: [
    {
      id: 1,
      title: "Bachelor of Engineering in Computer Science",
      institution: "Chitkara University",
      period: "Aug 2022 - June 2026",
      description: "Graduated with honors. Coursework focused on Data Structures, Algorithms, Web Development, and Database Management."
    },
    {
      id: 2,
      title: "BLP College",
      institution: "BSEB",
      period: "April 2020 - April 2022",
      description: "Completed secondary education with a focus on PCMB (Physics, Chemistry, Mathematics, Biology)."
    },
    {
      id: 3,
      title: "Shivam International School",
      institution: "CBSE",
      period: "July 2011 - March 2020",
      description: "Completed secondary education with a focus on subjects like science, social science, english, hindi and mathematics."
    }
  ],
  certifications: [
    {
      id: 1,
      title: "IBM AI Engineering",
      issuer: "IBM",
      date: "Oct 2025",
      link: "https://coursera.org/share/6694ef8ba5f4ffd5e7e8e982eab43931"
    },
    {
      id: 2,
      title: "AI for Scientific Research",
      issuer: "LearnQuest",
      date: "Feb 2026",
      link: "https://coursera.org/share/95a6e85d9f83152e674d6e5e3c4682ce"
    },
    {
      id: 3,
      title: "Software Product Management",
      issuer: "University of Alberta",
      date: "Feb 2026",
      link: "https://coursera.org/share/f6ba7d917f28fc765b5398bd1b84e8f2"
    }
  ]
};

export const PROJECTS_DATA = [
  
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    name: "Portfolio Website ",
    description:
      "A modern portfolio website built with React and Tailwind CSS featuring about skills, projects, and experience.",
    github: "https://github.com/satyam1355",
    live: "",
    tech: ["React", "Tailwind", "Vite"]
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=800&q=80",
    name: "Online Blood Donation System",
    description:
      "Developed a real-time donor-recipient matching platform using Node.js, Express.js, and MongoDB to manage blood availability efficiently. Designed and implemented RESTful APIs for user registration, authentication, and donor-recipient requests, ensuring secure and reliable backend communication. Improved system performance by applying MongoDB query optimization and indexing techniques to enhance response time and data retrieval efficiency.",
    github: "",
    live: "",
    tech: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication"]
  },

  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80",
    name: "Blogging Platform",
    description:
      "Built a full-stack blogging application using Node.js, Express.js, MongoDB, and React.js supporting CRUD operations for content management. Architected REST APIs for authentication and implemented modular backend design for scalability. Integrated role-based authorization, input validation, and error handling to ensure data integrity and secure application behavior.",
    github: "",
    live: "",
    tech: ["Node.js", "Express.js", "MongoDB", "React.js", "CRUD", "Authorization"]
  }
];


