const data = {
  name: "Arturo Sesma",
  title: "Senior Software Engineer",
  contact: {
    email: "arturosesma18@gmail.com",
    emailText: "arturosesma18@gmail.com",
    phone: "+52 614 470 3853",
    linkedin: "www.linkedin.com/in/arturo-sesma-81388519a",
    linkedinText: "LinkedIn",
    github: "https://github.com/arturosesma",
    githubText: "GitHub",
    location: "Chihuahua, MX · Open to Remote",
  },

  about:
    "Senior Software Engineer with 5+ years of experience designing and delivering scalable full-stack " +
    "applications across enterprise and commercial environments. Strong background in React, " +
    "JavaScript/TypeScript, Python, and AWS cloud services, with expertise in software architecture, " +
    "OOP/functional programming, and modern development best practices. Proven track record modernizing " +
    "legacy systems, improving performance, and leading end-to-end technical initiatives in distributed teams.",

  techStack: [
    "Python",
    "TypeScript",
    "JavaScript (ES6+)",
    "C#",
    "React",
    "Angular",
    "HTML5",
    "CSS3",
    "Node.js",
    ".NET",
    "Laravel",
    "REST APIs",
    "AWS (EC2, Lambda, IAM, API Gateway, S3, Route53, RDS, SNS, SQS)",
    "SQL Server",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Linux",
    "Git / GitHub / GitLab",
    "CI/CD",
    "SOLID · Clean Architecture · Design Patterns",
  ],

  experience: [
    {
      company: "ZF Group / ZF-Lifetec",
      location: "Chihuahua, MX — Hybrid (2x3)",
      role: "Software Engineer (Full Stack)",
      period: "Feb 2023 – Present",
      bullets: [
        "Contributed improvements and new features to 50+ enterprise applications used in Mexico, Canada, and El Salvador.",
        "Implemented secure access controls and data protection practices to ensure confidentiality of sensitive payroll and HR information.",
        "Led the migration of a PowerApps platform and other legacy apps to existing enterprise infrastructure, generating approximately €25,000 in annual savings by eliminating support incidents and enabling automated user workflows.",
        "Modernized multiple legacy systems using clean architecture, SOLID principles, and modular design, improving performance by up to 60% and increasing reliability across production environments.",
        "Built data analysis modules that provided insights into payroll operations, workforce hours, and manufacturing outputs, supporting decision-making across multiple plants.",
      ],
    },
    {
      company: "Deadline",
      location: "Remote",
      role: "Full-Stack Software Developer",
      period: "Mar 2021 – Feb 2023",
      bullets: [
        "Developed scalable backend services using Laravel and RESTful APIs, supporting production systems for commercial clients.",
        "Developed and maintained responsive frontend applications using React, modern JavaScript/TypeScript, and component-based architecture.",
        "Designed relational and non-relational database architectures optimized for performance, scalability, and maintainability.",
        "Containerized applications using Docker, enabling consistent deployment environments and improving CI/CD workflows.",
        "Participated in the development of commercial software projects valued at $20,000+ USD, contributing directly to product delivery.",
        "Implemented unit and integration testing practices to improve software reliability and reduce production defects.",
      ],
    },
    {
      company: "Telmex (RED UNO)",
      location: "Remote",
      role: "Network Engineer",
      period: "Apr 2020 – Mar 2021",
      bullets: [
        "Configured and secured enterprise networking infrastructure using ACL policies, routing protocols, and network segmentation.",
        "Implemented high-availability routing and switching architectures using EIGRP, OSPF, VLANs, STP, VRRP, and HSRP.",
        "Automated networking tasks using Python scripts, improving operational efficiency and reducing manual work — first exposure to programming, which led to a full transition into software engineering.",
      ],
    },
    {
      company: "Lex Institute Japan LTD / LEX México · Club Familiar Hippo",
      location: "Mexico City · Chihuahua City · Remote",
      role: "Fellow — Family Entrepreneurial Venture",
      period: "Jun 2019 – Present",
      bullets: [
        "Led multilingual, multicultural, and multigenerational family groups.",
        "Collaborated with international, multidisciplinary teams across multiple countries.",
        "Planned and coordinated international cultural and educational events.",
        "Registered intellectual property for educational learning materials (INDAutor Mexico).",
        "Designed and implemented digital media and content marketing strategies.",
      ],
    },
    {
      company: "PEU CANSAT Project",
      location: "Mexico City",
      role: "Engineering Team Lead",
      period: "Apr 2018 – Oct 2018",
      bullets: [
        "Led the development of a pico-satellite prototype integrating a 2.45 GHz antenna and IMUGY-80 sensor module, implementing real-time telemetry acquisition and transmission while the payload was elevated by a drone.",
        "Oversaw subsystem integration, testing, and team coordination.",
      ],
    },
  ],

  projects: [
    {
      name: "LaVie Multilingual E-commerce",
      url: "https://laviemultilingual.com",
      description:
        "Multilingual e-commerce platform for physical product sales, with Mercado Pago checkout, inventory management, and support for Spanish, English, and Japanese.",
      stack: ["React", "NestJS", "MySQL", "Docker", "Linux"],
    },
    {
      name: "Employee's Factory Attendance Controller",
      url: null,
      description:
        "Time and attendance management system for factory employees, with biometric authentication, shift scheduling, and reporting features.",
      stack: ["React", ".NET", "SQL Server"],
    },
    {
      name: "WSM",
      url: null,
      description:
        "Warehouse management system with real-time inventory tracking, order processing, and reporting features.",
      stack: ["React", "Node.js", "PostgreSQL"],
    },
  ],

  education: [
    {
      institution: "Universidad Nacional Autónoma de México (UNAM)",
      degree: "B.Eng. in Telecommunications Engineering",
      period: "",
    },
  ],

  certifications: [
    { name: "Cisco CCNA — Routing, Switching & Security", year: "" },
    { name: "AWS Certified Cloud Practitioner", year: "" },
  ],

  courses: [
    { platform: "Platzi", topics: "Angular, TypeScript, Docker, Databases, JavaScript" },
    { platform: "Udemy", topics: "Node.js, AWS (CLF-C02), Git, Laravel, Python, ML basics" },
    { platform: "Dev.f", topics: "HTML5, CSS3, JavaScript, React" },
  ],

  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Professional" },
    { language: "Japanese", level: "Elementary" },
  ],

  softSkills: [
    "Technical leadership and mentorship for junior developers",
    "Strong communication in cross-functional and distributed teams",
    "Ownership mindset and proactive problem solving",
    "Collaboration in multicultural and international teams",
  ],
};

export default data;
