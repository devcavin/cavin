/**
 * © 2025 Cavin
 * MIT License – https://opensource.org/licenses/MIT
 * Repo: https://github.com/devcavin/cavin
 */

export const personalInfo = {
  name: "Cavin Larry",
  role: "Software Developer, Network Technician & IT Professional",
  tagline: "I build scalable backend systems and APIs, develop responsive frontends, and maintain robust IT infrastructure.",
  email: "cavinlarry001@gmail.com",
  location: "Nairobi, Kenya",
  phone: "+254 798 941735",
  
  social: {
    github: "https://github.com/devcavin",
    gitlab: "https://gitlab.com/devcavin",
    linkedin: "https://www.linkedin.com/in/devcavin",
    twitter: "https://x.com/devcavin",
    reddit: "https://reddit.com/devcavin",
    instagram: "https://instagram.com/devcavin",
    twitch: "https://twitch.tv/devcavin",
    youtube: "https://youtube.com/@devcavin",
    portfolio: "https://devcavin.vercel.app",
  }
};

export const about = {
  paragraphs: [
    "I'm a SOftware Developer passionate about building robust software solutions and reliable infrastructure. I develop backend systems with Expres, NestJS, Ktor, Spring Boot, craft responsive frontends with React and Next.js, and thrive at the intersection of software development and IT operations.",
    "Previously, I interned as a Network Technician at WECONNECT WIFI, installing overhead fiber optic network cabling and troubleshooting connectivity issues. I also provided system administration and technical support at Nairobi City Water & Sewerage Company backin the day as an ICT intern, which helped me gain hands-on experience in network configuration and infrastructure management.",
    "I'm expanding my DevOps skillset with Docker, CI/CD pipelines, and cloud platforms (Azure). As a Postman Student Leader, I promote API literacy through workshops and mentor developers on API design and testing. When I'm not coding, you'll find me exploring new technologies and contributing to developer communities."
  ]
};

export const experiences = [
  {
    period: "Sep 2025 — Dec 2025",
    company: "WECONNECT WIFI",
    companyUrl: "",
    role: "Network Technician",
    description: "Installing and splicing fiber optic cables for high-speed connectivity across Meru, Kenya. Configuring routers, switches, and network equipment while ensuring signal integrity and network uptime. Applying advanced troubleshooting techniques and network design standards to maintain reliable infrastructure.",
    technologies: ["Fiber Optics", "Network Configuration", "Routers", "Switches", "Troubleshooting", "Network Design"]
  },
  {
    period: "May 2024 — Aug 2024",
    company: "Nairobi City Water & Sewerage Company",
    companyUrl: "https://nairobiwater.co.ke",
    role: "IT Support Technician",
    description: "Provided comprehensive technical support for end-user systems and network devices. Configured and maintained core network infrastructure (routers, switches, LAN/WAN) ensuring consistent uptime. Assisted with server administration, performed security updates, and created documentation for IT processes and incident resolutions.",
    technologies: ["Network Administration", "System Administration", "Windows Server", "Linux", "IT Asset Management", "Technical Support"]
  },
  {
    period: "Mar 2024 — Present",
    company: "Postman Inc",
    companyUrl: "https://postman.com/student-program/",
    role: "Postman Student Leader",
    description: "Promote API literacy among student developers through hands-on workshops and technical talks. Mentor peers on API design, testing, and documentation. Organize community events in partnership with Google Developer Groups and Microsoft Learn Student Ambassadors, fostering a collaborative environment focused on API best practices.",
    technologies: ["API Development", "Postman", "Community Leadership", "Technical Workshops", "Mentorship"]
  }
];

export const education = [
  {
    period: "Sep 2021 — Oct 2025",
    institution: "Meru University of Science & Technology",
    institutionUrl: "https://must.ac.ke",
    degree: "Bachelor's in Information Technology",
    description: "Comprehensive IT program covering web & mobile application development, database systems, computer networks, software engineering, cloud computing, and cybersecurity. Gained strong foundation in both software development and infrastructure management.",
    coursework: ["Web & Mobile Development", "Database Systems", "Computer Networks", "Software Engineering", "Cloud Computing", "Cybersecurity"]
  },
  {
    period: "May 2025 — Aug 2025",
    institution: "Teach2Give",
    institutionUrl: "https://teach2give.com",
    degree: "IT Customer Service Bootcamp",
    description: "Completed professional training in customer communication, problem-solving, and team collaboration. Applied soft skills training to improve client interactions and service delivery in technical support environments.",
    coursework: ["Customer Communication", "Problem Solving", "Team Collaboration", "Service Delivery"]
  },
  {
    period: "May 2024 — Dec 2024",
    institution: "Power Learn Project Academy",
    institutionUrl: "https://powerlearnprojectafrica.org",
    degree: "Software Development Bootcamp",
    description: "Intensive bootcamp focused on full-stack development fundamentals. Built practical skills in API integration, database design, and responsive UI/UX development through hands-on projects and real-world scenarios.",
    coursework: ["Full-Stack Development", "API Integration", "Database Design", "Responsive UI/UX"]
  }
];


export const projects = [
  {
    title: "Fortspring Authentication System",
    description: "Built a modular backend authentication system using Kotlin and Spring Boot. Implemented JWT-based stateless authentication, Redis session management, and OAuth2 integration for scalable identity management and secure user access control.",
    technologies: ["Kotlin", "Spring Boot", "JWT", "OAuth2", "Spring Security", "Redis"],
    links: {
      github: "https://github.com/devcavin/fortspring-security",
      live: null,
      demo: null
    },
    image: "/images/projects/fortspring.jpeg",
    featured: true
  },
  {
    title: "Drug Research Platform",
    description: "Built a real-time research platform for molecular data analysis and visualization. Developed frontend with Next.js featuring molecular visualization and SMILES notation support. Created Ktor backend with RESTful APIs and WebSocket communication for team collaboration. Integrated NVIDIA MolMIn AI for protein modeling.",
    technologies: ["Next.js", "React", "Ktor", "AI/ML", "WebSocket", "Molecular Visualization"],
    links: {
      github: "https://github.com/devcavin/protein-binding",
      live: null,
      demo: null
    },
    image: null,
    featured: true
  },
  {
    title: "E-commerce Backend API",
    description: "Built a comprehensive backend API for e-commerce operations including product catalog, shopping cart, and order management. Developed RESTful endpoints for user authentication, product CRUD operations, and payment processing. Implemented inventory tracking, order workflows, and containerized with Docker.",
    technologies: ["Kotlin", "Ktor", "PostgreSQL", "REST API", "Docker", "JSON"],
    links: {
      github: "https://github.com/devcavin/brightside",
      live: null,
      demo: null
    },
    image: "/images/projects/ecommerce.jpeg",
    featured: true
  },
  {
    title: "Customer Service Dashboard",
    description: "Built an internal ticketing system for managing ICT service requests and support tickets. Developed REST API backend with full CRUD operations for ticket management. Created responsive frontend interface for helpdesk workflows and communication logs using modern web technologies.",
    technologies: ["Ktor", "FastAPI", "JavaScript", "HTML/CSS", "Supabase", "PostgreSQL", "REST API"],
    links: {
      github: "https://github.com/devcavin/customer-service-learning",
      live: null,
      demo: null
    },
    image: "/images/projects/customer-learning.jpg",
    featured: false
  },
  {
    title: "Health Information Management System",
    description: "Built a web application for managing patient health records with CRUD operations and user authentication. Developed RESTful API backend in Kotlin/Ktor for structured health data management. Implemented security measures for patient data protection and healthcare compliance.",
    technologies: ["Kotlin", "Ktor", "SQLite", "REST API", "JavaScript", "HTML/CSS"],
    links: {
      github: "https://github.com/devcavin/HealthInfoSystem",
      live: null,
      demo: "https://github.com/devcavin/HealthInfoSystem/blob/main/docs/HealthInfoSystem_Demo.mp4"
    },
    image: null,
    featured: false
  },
  {
    title: "Personal portfolio",
    description: "Built a web application for my personal portfolio.",
    technologies: ["Next.js", "React", "TypeScript", "TailwindCSS"],
    links: {
      github: "https://github.com/devcavin/cavin",
      live: "https://devcavin.vercel.app",
      demo: null
    },
    image: "/images/projects/personal-portfolio.png",
    featured: false
  },
  {
    title: "Pesacore",
    description: "Modern core banking service developed in Kotlin, Spring Boot, PostgreSQL , Docker Compose",
    technologies: ["Kotlin", "Spring Boot", "", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/devcavin/pesa-core",
      live: null,
      demo: null
    },
    image: null,
    featured: false
  }
];


export const siteMetadata = {
  title: `${personalInfo.name} | ${personalInfo.role}`,
  description: personalInfo.tagline,
  siteUrl: "https://devcavin.vercel.app",
  twitterHandle: "devcavin",
};