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
  FaLock,
  FaShieldAlt,
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
import { FaCss3Alt } from "react-icons/fa";

import profilePic from "../assets/profile.jpg";

const PROFILE_IMAGE = profilePic;

const data = {
  name: "Mohamed Diaa El-Din Samy",
  arabicName: "محمد ضياء الدين سامي",
  title: "Full-Stack Developer | .NET | React | Node.js | MongoDB",
  id: "2024030095",
  location: "Cairo, Egypt",
  phone: "+201068646465",
  university: "Badr University in Assiut",
  faculty: "Computer Science / Information Systems",
  year: "Third-Year Student (Graduation: 2028)",
  profileImage: PROFILE_IMAGE,

  hero: {
    title: "Full-Stack Developer (.NET • React • Node.js • MongoDB)",
    subtitle:
      "Engineering end-to-end web applications, secure REST APIs, payment & shipping integrations, and high-performance architectures.",
    cta: "Explore My Projects",
  },

  about: {
    bio: `Full-Stack Developer and third-year Computer Science / Information Systems student at Badr University in Assiut (enrolled since 2024, expected graduation 2028).

I specialize in building secure, end-to-end applications using React, Node.js/Express, ASP.NET Core, SQL Server, and MongoDB Atlas. My experience spans full REST API development, database architecture, third-party payment and shipping integrations, application security, automated testing, and cloud deployment.

Currently, I work as a Full-Stack Developer at C2A LAP, engineering an e-commerce platform and administrative dashboard with live analytics that helped accelerate financial decisions and increased sales, optimizing speed and website performance by 16%.

I also designed enterprise integration flows connecting donation call-center systems with Odoo ERP using Transactional Outbox and Integration Inbox patterns with idempotent REST APIs.

Beyond development, I am an ICPC / ECPC-qualified competitive programmer in C++, which refined my problem-solving speed, algorithmic optimization, and computational resilience under pressure.`,
  },

  skills: [
    { name: "React & Vite", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
    { name: ".NET / ASP.NET Core", icon: SiDotnet, color: "#512BD4" },
    { name: "MongoDB Atlas", icon: SiMongodb, color: "#47A248" },
    { name: "SQL Server", icon: FaDatabase, color: "#CC292B" },
    { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C++ (Algorithmic)", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "App Security & JWT", icon: FaShieldAlt, color: "#10B981" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Docker & Railway", icon: SiRailway, color: "#A855F7" },
    { name: "Git & GitHub", icon: FaGitAlt, color: "#F05032" },
    { name: "HTML5 / CSS3", icon: SiHtml5, color: "#E34F26" },
  ],

  experience: [
    {
      company: "C2A LAP",
      role: "Full-Stack Developer | Nov 2025 - Present",
      description:
        "Developed and maintain laptop e-commerce platform with React/Vite storefront & admin dashboard for products, orders, sales, expenses, and profit tracking. Built REST APIs in Node.js/Express, integrated Paymob, InstaPay, Bosta shipping, WhatsApp (UltraMsg) & Nodemailer, Excel import/export. Applied JWT, CSRF, RBAC, rate limiting, and SSRF protections on Railway. Boosted speed by 16%.",
    },
    {
      company: "Donation Call-Center & Odoo ERP Integration",
      role: "System & API Integration | Jul 2026 - Oct 2026",
      description:
        "Designed integration flow connecting donation call-center system with Odoo ERP using Transactional Outbox and Integration Inbox patterns. Defined batched event polling, idempotent processing, out-of-order event handling, and atomic bank-deposit allocation across multiple receipts.",
    },
    {
      company: "El Orman Charity Association",
      role: "Technical Training | Summer 2024 & Summer 2026",
      description:
        "Technical training on integration design between donation call-center systems and Odoo ERP, REST API event processing, and bank-deposit allocation workflows.",
    },
    {
      company: "National Bank of Egypt (NBE)",
      role: "Enterprise Systems Trainee | Jan 2025",
      description:
        "Gained hands-on exposure to enterprise banking systems, database security standards, financial compliance, and mission-critical workflows.",
    },
    {
      company: "Orascom",
      role: "Software & Telecom Trainee | Aug 2024",
      description:
        "Training exposure to telecommunications infrastructure, network operations, and modern software development practices.",
    },
    {
      company: "DEPI - Digital Egypt Pioneers Initiative",
      role: "Full-Stack Fellow (Round 5 - AST) | Jun 2026",
      description:
        "Enrolled in MCIT fellowship covering enterprise web architectures, clean code principles, full-stack technologies, and Agile/Scrum methodologies.",
    },
  ],

  certifications: [
    {
      title: "ICPC / ECPC Qualifier",
      issuer: "Egyptian Collegiate Programming Contest (Aug 2026)",
      description:
        "Qualified in national algorithmic programming contest using C++, solving advanced data structures, graph theory, and dynamic programming problems under strict time and memory constraints.",
    },
    {
      title: "CS50 - ITI",
      issuer: "Information Technology Institute (ITI)",
      description:
        "Comprehensive computer science foundations, algorithmic thinking, data structures, memory management, and software engineering principles.",
    },
    {
      title: "Python Training - Microsoft",
      issuer: "Microsoft Online Spring Training Program",
      description:
        "Certified training in Python programming, data structures, scripting, and modular application development.",
    },
    {
      title: "Problem Solving in C++",
      issuer: "ITI Certificate",
      description:
        "Advanced algorithmic problem solving, computational complexity analysis, pointer manipulation, and OOP patterns in C++.",
    },
    {
      title: "React Training - El Rowad",
      issuer: "El Rowad (Jun 2026)",
      description:
        "Modern component lifecycle, hooks, state management, responsive UI development, and API integration in React.",
    },
  ],

  projects: [
    {
      name: "C2A LAP — E-Commerce & Admin Analytics Platform",
      description:
        "Production e-commerce platform for high-end laptops with a React/Vite storefront and complete administrative analytics dashboard for tracking sales, profit margins, expenses, stock, and orders. Features Paymob & InstaPay checkout, Bosta shipping, WhatsApp notifications, and Railway deployment.",
      github: "https://github.com/mdiaad03-cloud/C2A-LAP-V1.1",
      tags: ["React", "Node.js", "Express", "MongoDB", "Paymob", "Bosta", "Railway"],
    },
    {
      name: "Donation Call-Center & Odoo ERP Integration API",
      description:
        "Enterprise integration pipeline connecting donation call-centers with Odoo ERP utilizing Transactional Outbox and Integration Inbox patterns. Implements batched polling, event ID versioning, idempotent execution, and atomic bank-deposit allocation across receipts.",
      github: "https://github.com/mdiaad03-cloud",
      tags: ["Node.js", "Odoo ERP", "REST APIs", "Outbox Pattern", "Idempotency"],
    },
    {
      name: "C# Windows Forms Enterprise Application",
      description:
        "Desktop enterprise management software built with C# Windows Forms and Microsoft SQL Server. Features robust CRUD operations, transactional consistency, normalized database schema, and custom financial reporting.",
      github: "https://github.com/mdiaad03-cloud",
      tags: ["C#", ".NET", "Windows Forms", "SQL Server", "Database Design"],
    },
    {
      name: "ECPC Algorithmic Problem Solving Engine",
      description:
        "Competitive programming repository featuring hundreds of solved algorithmic problems in C++ covering graph algorithms (Dijkstra, BFS/DFS), dynamic programming, segment trees, and number theory with sub-second performance.",
      github: "https://github.com/mdiaad03-cloud",
      tags: ["C++", "Algorithms", "Data Structures", "ECPC Qualifier"],
    },
  ],

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

  contact: {
    email: "mdiaad03@gmail.com",
    phone: "+201068646465",
    location: "Cairo, Egypt",
    message:
      "I am available for full-stack engineering roles, enterprise REST API development, and high-impact software projects. Let's build something exceptional together!",
  },
};

export default data;
