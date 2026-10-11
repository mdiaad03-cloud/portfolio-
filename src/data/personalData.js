/*
 * =====================================================================
 * Portfolio of Mohamed Diaa El-Din Samy
 * Computer Science / Information Systems @ Badr University in Assiut
 * Full-Stack Developer (.NET | React | Node.js | MongoDB)
 * =====================================================================
 */

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaDatabase,
  FaShieldAlt,
  FaLaptopCode,
  FaServer,
  FaShoppingCart,
  FaWindows,
  FaWhatsapp,
  FaGraduationCap,
  FaAward,
  FaTrophy,
  FaBriefcase,
  FaUniversity,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiDotnet,
  SiDocker,
  SiRailway,
} from "react-icons/si";

import profilePic from "../assets/profile.jpg";

const PROFILE_IMAGE = profilePic;

const data = {
  name: "Mohamed Diaa El-Din Samy",
  title: "Full-Stack Developer | .NET • React • Node.js • MongoDB",
  id: "2024030095",
  location: "Cairo, Egypt",
  phone: "+201068646465",
  whatsappUrl: "https://wa.me/201068646465?text=Hello%20Mohamed,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect!",
  email: "mdiaad03@gmail.com",
  university: "Badr University in Assiut",
  faculty: "Computer Science / Information Systems",
  year: "Third-Year Student",
  gpa: "3.3 / 4.0",
  profileImage: PROFILE_IMAGE,

  hero: {
    title: "Full-Stack Developer (.NET • React • Node.js • MongoDB)",
    subtitle:
      "Engineering robust end-to-end applications, enterprise REST APIs, third-party payment/ERP integrations, and high-performance architectures.",
    ctaProjects: "Explore Projects",
    ctaContact: "Get in Touch",
    ctaCv: "Download CV",
  },

  about: {
    title: "About Me",
    role: "Full-Stack Software Engineer & Competitive Programmer",
    bio: `Full-Stack Developer and third-year Computer Science & Information Systems student at Badr University in Assiut (enrolled since 2024, expected graduation: 2028 • GPA: 3.3).

I bridge the gap between rigorous Computer Science theory and commercial, production-ready software engineering. I specialize in building end-to-end applications using React, Node.js/Express, ASP.NET Core, SQL Server, and MongoDB Atlas.

In production environments, I engineered commercial e-commerce storefronts and executive analytics dashboards, integrating Paymob, InstaPay, Bosta shipping, and automated WhatsApp/email notifications. I also designed enterprise integration flows connecting donation call-center systems with Odoo ERP using Transactional Outbox and Integration Inbox patterns.

Beyond development, I am an ICPC / ECPC-qualified competitive programmer in C++, which instilled in me deep algorithmic thinking, optimal time/memory complexity awareness, and resilience when tackling complex architectural challenges.`,
    highlights: [
      { label: "Academic Standing", value: "3rd Year (GPA 3.3)" },
      { label: "Competitive Programming", value: "ECPC / ICPC Qualifier" },
      { label: "Full-Stack Architecture", value: ".NET & MERN Specialist" },
      { label: "Fellowship Award", value: "DEPI - MCIT Egypt" },
    ],
  },

  /* ── Services Section ────────────────────────────────────────── */
  services: [
    {
      title: "Full-Stack Web Development",
      description:
        "Building fast, reactive, responsive web applications from scratch using React, Vite, Tailwind CSS, Node.js/Express, and ASP.NET Core Web APIs.",
      icon: FaLaptopCode,
      color: "#61DAFB",
      features: ["Custom React & Vite Frontends", "Modular REST API Backends", "State Management & Responsive Design", "Clean Component Architecture"],
    },
    {
      title: "Enterprise API & ERP Integrations",
      description:
        "Designing resilient system-to-system integrations connecting internal workflows with Odoo ERP, payment processors, and automated notifications.",
      icon: FaServer,
      color: "#F59E0B",
      features: ["Transactional Outbox & Inbox Patterns", "Idempotent Event Processing", "Odoo ERP Webhooks & Polling", "Reliable Fault-Tolerant Architectures"],
    },
    {
      title: "Database Architecture & Optimization",
      description:
        "Designing normalized schemas, relational models in Microsoft SQL Server, and document structures in MongoDB Atlas with indexing and ACID compliance.",
      icon: FaDatabase,
      color: "#10B981",
      features: ["SQL Server & MongoDB Atlas", "Schema Normalization & Indexing", "Transaction Management", "High-Throughput Query Optimization"],
    },
    {
      title: "E-Commerce & Payment Gateways",
      description:
        "End-to-end online store solutions featuring administrative analytics, order tracking, Paymob, InstaPay, cash on delivery, and Bosta shipping API.",
      icon: FaShoppingCart,
      color: "#A855F7",
      features: ["Paymob & InstaPay Checkout", "Bosta Shipping API Integration", "Admin Analytics & Profit Tracking", "WhatsApp & Nodemailer Alerts"],
    },
    {
      title: "Application Security & Hardening",
      description:
        "Implementing defense-in-depth security standards to protect users and backend services against OWASP top vulnerabilities.",
      icon: FaShieldAlt,
      color: "#EF4444",
      features: ["Stateless JWT Authentication", "CSRF Protection & bcrypt Hashing", "Role-Based Access Control (RBAC)", "Rate Limiting & SSRF Protections"],
    },
    {
      title: "Desktop Enterprise Software",
      description:
        "Developing stable, offline-capable desktop management systems using C# and .NET Windows Forms integrated directly with Microsoft SQL Server.",
      icon: FaWindows,
      color: "#0078D4",
      features: ["C# Windows Forms Applications", "ADO.NET & EF Core Persistence", "Custom Financial Reporting", "Relational Local/LAN Databases"],
    },
  ],

  /* ── Skills & Tech Stack ─────────────────────────────────────── */
  skills: [
    { name: "React & Vite", icon: FaReact, color: "#61DAFB", category: "Frontend" },
    { name: "Node.js", icon: FaNodeJs, color: "#68A063", category: "Backend" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF", category: "Backend" },
    { name: ".NET / ASP.NET Core", icon: SiDotnet, color: "#512BD4", category: "Backend" },
    { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248", category: "Database" },
    { name: "SQL Server", icon: FaDatabase, color: "#CC292B", category: "Database" },
    { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E", category: "Languages" },
    { name: "C++ (Algorithmic)", icon: SiCplusplus, color: "#00599C", category: "Languages" },
    { name: "Python", icon: FaPython, color: "#3776AB", category: "Languages" },
    { name: "App Security & JWT", icon: FaShieldAlt, color: "#10B981", category: "Security" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
    { name: "Docker & Railway", icon: SiRailway, color: "#A855F7", category: "DevOps" },
    { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032", category: "Tools" },
    { name: "HTML5 / CSS3", icon: SiHtml5, color: "#E34F26", category: "Frontend" },
  ],

  /* ── Education Section ───────────────────────────────────────── */
  education: {
    institution: "Badr University in Assiut (BUA)",
    degree: "Bachelor of Science in Computer Science / Information Systems",
    duration: "2024 – Present (Expected Graduation: 2028)",
    status: "Third-Year Student",
    gpa: "3.3 / 4.0",
    description:
      "Undertaking intensive academic study in Computer Science and Information Systems, mastering the foundational theoretical and practical pillars of software engineering.",
    coreCourses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming (OOP in C++ & Java)",
      "Database Systems & Relational Schema Modeling",
      "Computer Architecture & Digital Logic Design",
      "Operating Systems & Process Management",
      "Discrete Mathematics & Computational Logic",
      "Software Engineering & Agile Methodologies",
      "Computer Networks & Protocols",
    ],
  },

  /* ── Certifications & Achievements ───────────────────────────── */
  certifications: [
    {
      title: "ICPC / ECPC Qualifier",
      issuer: "Egyptian Collegiate Programming Contest (Aug 2026)",
      icon: FaTrophy,
      description:
        "Official qualifier in the prestigious national algorithmic programming contest using C++, solving complex data structures and graph algorithms under strict constraints.",
    },
    {
      title: "CS50 - ITI Certificate",
      issuer: "Information Technology Institute (ITI)",
      icon: FaGraduationCap,
      description:
        "Rigorous training covering computer science principles, memory layout, C, algorithms, and computational problem solving.",
    },
    {
      title: "Digital Egypt Pioneers Initiative (DEPI) Certificate",
      issuer: "Ministry of Communications and Information Technology (MCIT)",
      icon: FaAward,
      description:
        "Accredited certification from the Digital Egypt Pioneers Initiative (DEPI) under MCIT in full-stack architecture, clean code standards, and modern React development.",
    },
    {
      title: "Python Training - Microsoft",
      issuer: "Microsoft Online Spring Training Program",
      icon: FaAward,
      description:
        "Certified training in Python programming, script automation, data structures, and modular system development.",
    },
    {
      title: "Problem Solving in C++",
      issuer: "ITI Official Certificate",
      icon: FaAward,
      description:
        "Advanced algorithmic problem solving, pointer manipulation, time/space complexity optimization, and competitive paradigms.",
    },
  ],

  /* ── Work Experience ─────────────────────────────────────────── */
  workExperience: [
    {
      role: "Full-Stack Developer",
      company: "C2A LAP",
      period: "Nov 2025 – Present",
      type: "Commercial Production Platform",
      points: [
        "Developed and actively maintain a laptop e-commerce platform with a React/Vite storefront and an administrative analytics dashboard.",
        "Built executive dashboard analytics to clarify where money is spent, monitor sales and profit flows, and support faster business decision-making.",
        "Engineered backend REST API modules for authentication, users, products, sales, online orders, shipping, and storefront settings using Node.js & Express.js.",
        "Implemented real-time product filtration, cart, checkout, order tracking, and dark/light themes.",
        "Integrated Paymob, InstaPay, cash on delivery, Bosta shipping API, automated WhatsApp notifications (UltraMsg), and Nodemailer alerts.",
        "Supported Excel inventory import/export and batch order operations for seamless store management.",
        "Hardened system security with JWT authentication, CSRF protection, password hashing (bcrypt), RBAC, rate limiting, input sanitization, and SSRF protections deployed on Railway.",
      ],
    },
    {
      role: "System & Integration Architect",
      company: "Donation Call-Center & Odoo ERP Integration",
      period: "Jul 2026 – Oct 2026",
      type: "Enterprise Integration Project",
      points: [
        "Designed and implemented an integration flow connecting a donation call-center system with Odoo ERP using Transactional Outbox and Integration Inbox patterns.",
        "Defined REST API contracts for batched event polling and acknowledgement, with event IDs, semantic versioning, and idempotent processing.",
        "Engineered robust handling for failed and out-of-order events with retry queues.",
        "Designed atomic bank-deposit allocation across multiple receipts to ensure financial consistency.",
      ],
    },
  ],

  /* ── Professional Training & Internships ─────────────────────── */
  training: [
    {
      role: "Full-Stack Software Fellow",
      organization: "Digital Egypt Pioneers Initiative (DEPI) - Round 5",
      period: "Jun 2026",
      badge: "DEPI Fellowship",
      description:
        "Selected for the Ministry of Communications & IT (MCIT) fellowship (AST track) covering enterprise web architectures, clean code design patterns, full-stack technologies, and Agile/Scrum.",
    },
    {
      role: "Enterprise Banking Systems Trainee",
      organization: "National Bank of Egypt (NBE)",
      period: "Jan 2025",
      badge: "Banking Infrastructure",
      description:
        "Gained direct, hands-on exposure to enterprise banking IT systems, mission-critical financial database security, transactional integrity, regulatory compliance, and banking workflows.",
    },
    {
      role: "Software & Telecommunications Trainee",
      organization: "Orascom",
      period: "Aug 2024",
      badge: "Telecom Infrastructure",
      description:
        "Extensive industry training covering large-scale telecommunications infrastructure, network operations, cloud communication protocols, and modern enterprise software practices.",
    },
    {
      role: "Technical Integration Trainee",
      organization: "El Orman Charity Association",
      period: "Summer 2024 & Summer 2026",
      badge: "ERP & Systems",
      description:
        "Specialized training in integration design between call-center donation software and Odoo ERP, REST API event processing, and automated bank-deposit allocation workflows.",
    },
  ],

  /* ── Featured Projects ────────────────────────────────────────── */
  projects: [
    {
      id: "c2a-lap",
      name: "Laptop E-Commerce & Admin Analytics Platform",
      category: "Full-Stack Web App",
      badge: "Production Platform",
      period: "Nov 2025 – Present",
      description:
        "Commercial laptop e-commerce platform and executive administrative dashboard. Provides real-time analytics on sales, expense tracking, and profit margins. Features multi-method checkout (Paymob, InstaPay, COD), Bosta shipping, WhatsApp notifications, and Railway deployment.",
      keyFeatures: [
        "React & Vite storefront with real-time product search and responsive UI",
        "Administrative dashboard tracking revenue, expenses, stock, and live profit flows",
        "Automated Paymob & InstaPay payment verification and Bosta shipping dispatch",
        "Automated WhatsApp (UltraMsg) and email notifications for order lifecycle",
        "Applied JWT, CSRF, RBAC, bcrypt, rate limiting, and SSRF protections on Railway",
      ],
      github: "https://github.com/mdiaad03-cloud/C2A-LAP-V1.1",
      tags: ["React", "Vite", "Node.js", "Express", "MongoDB", "Paymob", "Bosta API", "Railway"],
    },
    {
      id: "odoo-integration",
      name: "Donation Call-Center & Odoo ERP Integration API",
      category: "Enterprise Integration",
      badge: "Architectural API",
      period: "Jul 2026 – Oct 2026",
      description:
        "High-reliability enterprise integration bridge connecting donation call centers with Odoo ERP. Uses Transactional Outbox and Integration Inbox patterns to ensure zero data loss during network disruptions and idempotent event processing.",
      keyFeatures: [
        "Transactional Outbox pattern for guaranteed message delivery between distributed databases",
        "Integration Inbox pattern with idempotency keys preventing duplicate financial records",
        "Batched event polling and acknowledgement with semantic versioning",
        "Atomic bank-deposit allocation across multiple donation receipts",
        "Detailed logging, retry mechanisms, and dead-letter queue for out-of-order events",
      ],
      github: "https://github.com/mdiaad03-cloud",
      tags: ["Node.js", "Express", "Odoo ERP", "REST APIs", "Outbox Pattern", "Idempotency"],
    },
    {
      id: "windows-forms",
      name: "C# Windows Forms Enterprise Application",
      category: "Desktop & .NET",
      badge: "Desktop Software",
      period: "Jul 2025 – Oct 2025",
      description:
        "Windows desktop software built with C# and Microsoft SQL Server. Features robust CRUD operations, multi-table transactions, database normalization, and custom financial reporting modules for local enterprise operations.",
      keyFeatures: [
        "Clean C# Windows Forms user interface with interactive data grids",
        "Microsoft SQL Server relational database integration with stored procedures",
        "Multi-table transactional operations ensuring ACID guarantees",
        "User role authentication, audit trail logging, and report exports",
      ],
      github: "https://github.com/mdiaad03-cloud",
      tags: ["C#", ".NET", "Windows Forms", "SQL Server", "ADO.NET", "Database Design"],
    },
    {
      id: "ecpc-engine",
      name: "ECPC Algorithmic Problem Solving Engine",
      category: "Competitive Programming",
      badge: "ECPC 2026 Qualifier",
      period: "2024 – Present",
      description:
        "Extensive problem-solving track in modern C++ qualifying for the Egyptian Collegiate Programming Contest (ECPC). Covers advanced graph algorithms, dynamic programming, segment trees, and mathematical optimization evaluated under sub-second execution limits.",
      keyFeatures: [
        "Graph theory implementations: Dijkstra, Bellman-Ford, Floyd-Warshall, BFS/DFS, MST",
        "Dynamic programming algorithms with state compression and memoization",
        "Advanced data structures: Segment Trees, Fenwick Trees, Disjoint Set Union (DSU)",
        "Memory efficiency and pointer management under strict competition memory limits",
      ],
      github: null,
      isCompetition: true,
      tags: ["C++ 17/20", "Algorithms", "Data Structures", "ECPC Qualifier", "Problem Solving"],
    },
  ],

  /* ── Socials ─────────────────────────────────────────────────── */
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mdiaad03-cloud",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mohamed-diaa-dev/",
      icon: FaLinkedin,
    },
  ],

  /* ── Contact ─────────────────────────────────────────────────── */
  contact: {
    headline: "Have an Ambitious Project or Engineering Role?",
    subheadline:
      "I'm available for Full-Stack development positions, enterprise system integrations, and freelance contracts. Let's discuss your roadmap.",
    email: "mdiaad03@gmail.com",
    phone: "+201068646465",
    whatsapp: "+201068646465",
    location: "Cairo, Egypt",
    availability: "Available for Full-Stack Roles, Enterprise Integrations & Contracts",
    responseTime: "Guaranteed reply within 24 hours",
  },
};

export default data;
