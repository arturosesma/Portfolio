const data = {
  name: "Arturo Sesma",
  title: "Full-Stack Software Engineer",
  contact: {
    email: "arturosesma18@gmail.com",
    linkedin: "www.linkedin.com/in/arturo-sesma-81388519a",
    github: "https://github.com/arturosesma",
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
    "Node.js",
    "Next.js",
    "PostgreSQL",
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
      company: "Acme Corp",
      location: "Remote",
      role: "Senior Software Engineer",
      period: "Jan 2022 – Present",
      bullets: [
        "Led migration of monolithic Rails app to Node.js microservices, reducing p95 latency by 40%.",
        "Architected a real-time notification system serving 200k+ daily active users using Redis Pub/Sub and WebSockets.",
        "Mentored 3 junior engineers, conducting weekly code reviews and establishing frontend best-practice guidelines.",
        "Reduced CI pipeline runtime from 18 min to 6 min by parallelising Jest suites and caching Docker layers.",
      ],
    },
    {
      company: "Startup XYZ",
      location: "Mexico City, MX",
      role: "Software Engineer",
      period: "Mar 2019 – Dec 2021",
      bullets: [
        "Built and shipped an internal analytics dashboard (React + D3.js) adopted by the entire operations team.",
        "Designed PostgreSQL schema for a multi-tenant SaaS platform; wrote migration strategy for zero-downtime deploys.",
        "Integrated Stripe billing, cutting manual invoicing work by 90%.",
        "Participated in on-call rotation; reduced MTTR by 30% by improving observability with Datadog APM.",
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
      institution: "Instituto Tecnológico y de Estudios Superiores de Monterrey",
      degree: "B.Sc. Computer Science",
      period: "2014 – 2019",
    },
  ],

  certifications: [
    { name: "AWS Certified Developer – Associate", year: "2023" },
    { name: "Professional Scrum Master I (PSM I)", year: "2021" },
  ],

  languages: [
    { language: "Spanish", level: "Native" },
    { language: "English", level: "Fluent (C1)" },
    { language: "French", level: "Conversational (B1)" },
  ],

  softSkills: [
    "Async-first communication",
    "Technical writing",
    "Pragmatic problem-solving",
    "Mentoring",
    "Cross-functional collaboration",
  ],
};

export default data;
