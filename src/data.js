const data = {
  name: "Arturo Sesma",
  title: "Full-Stack Software Engineer",
  contact: {
    email: "arturosesma18@gmail.com",
    emailText: "Escríbeme",
    linkedin: "www.linkedin.com/in/arturo-sesma-81388519a",
    linkedinText: "LinkedIn",
    github: "https://github.com/arturosesma",
    githubText: "Github",
    location: "Mexico, MX · Open to Remote",
  },

  about:
    "Full-stack developer with 5+ years of experience and a Telecommunications Engineering degree from UNAM." +
    "I genuinely love what I do — code, math, physics, and the intersection of all three." + 
    "My engineering background gave me a strong foundation in analytical thinking and problem-solving, " + 
    "which I bring to every line of code. I build scalable web applications, thrive in collaborative environments, " + 
    "and am always looking to learn something new.",

  techStack: [
    "TypeScript",
    "JavaScript",
    "React",
    "Angular",
    "Node.js",
    "Next.js",
    "Laravel",
    ".NET",
    "MySQL",
    "SQLServer",
    "PostgreSQL",
    "MongoDB",
    "Redis",
    "Docker",
    "AWS",
    "GraphQL",
    "REST APIs",
    "Python",
    "Git",
    "CI/CD",
    "Vite",
  ],

  experience: [
    {
      company: "ZF Group - ZF Lifetec · Chihuahua, MX",
      location: "Hybrid",
      role: "Senior Software Developer & IT Support ",
      period: "Feb 2023 – Present",
      bullets: [
        "Maintained and improved 22+ HR applications across 6 international plant locations, delivering performance optimizations of up to 60% through code refactoring and query tuning",
        "Migrated a proprietary licensed solution to open-source, saving €21,000/year, while leading digitalization initiatives that eliminated paper-based processes across HR departments"
        // "Maintained and improved 22+ HR applications across 6 plant locations (Chihuahua, Reynosa, El Salvador, La Laguna, Canada, and Corporate), covering time tracking, payroll processing, vacation management, and workforce analytics",
        // "Delivered performance optimizations of up to 60% on legacy systems through code refactoring and query tuning",
        // "Led migration of a PowerApps solution to open-source stack, saving €21,000/year in licensing costs",
        // "Developed digitalization initiatives replacing paper-based forms, reducing printing costs and manual processes across HR departments",
        // "Built internal tooling with React, Angular, and Python to automate repetitive support tasks, reducing ticket volume",
        // "Wrote and maintained complex SQL Server stored procedures for reporting, inventory, and payroll workflows",
        // "Supported production line applications for shipment tracking and inventory management, including sensitive materials reporting for compliance",
        // "Provided network troubleshooting and infrastructure support across multi-site environments",
        // "Maintained and improved 22+ HR applications across 6 international plant locations, delivering performance optimizations of up to 60% through code refactoring and SQL Server tuning",
        // "Migrated a PowerApps solution to open-source stack, saving €21,000/year in licensing costs, while leading digitalization initiatives that eliminated paper-based processes across HR departments"
      ],
    },
    {
      company: "Deadline · Chihuahua, MX",
      location: "Remote ",
      role: "Junior Full-Stack Developer",
      period: "Mar 2021 – Feb 2023",
      bullets: [
        "Developed and maintained 25+ client projects simultaneously, handling the full lifecycle from client discovery and requirements gathering to delivery and iteration",
        "Containerized development environments improving team consistency; deployed and managed all production applications on cloud infrastructure"
        // Worked across 25+ client projects simultaneously, primarily CRM systems, serving clients from diverse industries with varying business logic and requirements
        // Built full-stack applications using React, Angular, Laravel, MySQL, and MongoDB depending on project needs and client constraints
        // Owned the complete project lifecycle end-to-end: client discovery meetings, requirements gathering, process analysis, solution scoping, cost estimation, development, client presentations, iteration, and final delivery
        // Containerized development environments with Docker, standardizing local setup across the team and eliminating environment inconsistencies
        // Deployed and managed production applications on DigitalOcean
        // Participated in architecture planning sessions before development kickoff, defining stack decisions, database design, and system structure
        // Collaborated directly with clients to translate business processes into technical requirements, often acting as the bridge between business needs and engineering decisions"
        // "Developed and maintained 25+ client projects — primarily CRMs — using React, Angular, Laravel, MySQL, and MongoDB, handling the full lifecycle from client discovery and scoping to delivery",
        // "Containerized development environments with Docker, improving team consistency across projects; deployed production applications on DigitalOcean"
      ],
    },
    {
      company: "Telmex · CDMX",
      location: "Remote",
      role: "Network & Telecommunications Engineer",
      period: "Feb 2020 – Mar 2021",
      bullets: [
        "Implemented and managed enterprise network infrastructure including subnetting, switch configurations, routing tables, redundancy protocols, and firewall ACLs",
        "Developed automation scripts to eliminate repetitive manual tasks — first exposure to programming that led to a full transition into software engineering"
        // Designed and implemented IPv4 subnet schemes and summarization for enterprise networks
        // Configured Layer 2/3 switches including port addressing, VLANs, and inter-VLAN routing
        // Set up and maintained routing tables and dynamic routing protocols across network infrastructure
        // Configured redundancy protocols (VRRP/HSRP) for high availability and failover
        // Implemented ACL rules on firewalls for network security and traffic control
        // Built Python automation scripts to eliminate repetitive manual network tasks — first exposure to programming that led to a career pivot into software development
        // "Implemented and managed IPv4 subnetting, switch configurations (port addressing), routing tables, redundancy protocols (VRRP/HSRP), and ACL rules on firewalls across enterprise network infrastructure",
        // "Developed Python scripts to automate repetitive network tasks, sparking a passion for software development that led to a full transition into software engineering"
      ],
    },
  ],
  projects: [
    {
      name: "OpenSearch CLI",
      url: "https://github.com/arturo-sesma/opensearch-cli",
      description:
        "Terminal tool to query and visualise Elasticsearch / OpenSearch indices with fuzzy search and JSON pretty-print.",
      stack: ["Node.js", "TypeScript", "Commander.js"],
    },
    {
      name: "Budgetly",
      url: "https://github.com/arturo-sesma/budgetly",
      description:
        "Personal finance tracker with multi-currency support, recurring transactions, and monthly PDF export.",
      stack: ["Next.js", "PostgreSQL", "Prisma", "Tailwind"],
    },
    {
      name: "LivePoll",
      url: null,
      description:
        "Real-time polling app built for conference Q&A sessions; handles 1 000+ concurrent voters over WebSockets.",
      stack: ["React", "Node.js", "Socket.io", "Redis"],
    },
  ],

  education: [
    {
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      degree: "B.Eng. in Telecommunications Engineering",
      period: "2014 – 2020",
    },
  ],

  certifications: [
    { name: "AWS Certified Developer – Associate", year: "2023" },
    { name: "Professional Scrum Master I (PSM I)", year: "2021" },
  ],

  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Professional (B2)" },
    { language: "Japanese", level: "Elementary (A1–A2)" },
  ],

  softSkills: [
    "Cross-cultural collaboration",
    "Async-first communication",
    "Pragmatic problem-solving",
    "Empathy & active listening",
    "Adaptability",
    "Team mentoring",
  ],
};

export default data;
