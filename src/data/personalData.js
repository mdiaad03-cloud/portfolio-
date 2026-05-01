/*
 * =====================================================================
 * This project is for Badr University.
 * Developed by Mohamed Diaa El-Din Samy (ID: 2024030095)
 * =====================================================================
 *
 * Centralized personal data — change anything here and the entire
 * portfolio updates dynamically. Replace `profileImage` with your
 * real photo URL and it will automatically appear everywhere.
 */

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaLinkedin,
  FaPython,
  FaDatabase,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiCplusplus,
  SiJavascript,
  SiHtml5,
} from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";

import profilePic from "../assets/profile.jpg";

/* ── Profile image URL ─────────────────────────────────────────────
 * The avatar across the site will update automatically.
 * ----------------------------------------------------------------*/
const PROFILE_IMAGE = profilePic;

const data = {
  /* ── Personal Information ──────────────────────────────────────── */
  name: "Mohamed Diaa El-Din Samy",
  arabicName: "محمد ضياء الدين سامي",
  id: "2024030095",
  location: "Cairo, Egypt",
  university: "Badr University in Assiut",
  year: "Second Year Student",
  profileImage: PROFILE_IMAGE,

  /* ── Hero Section ──────────────────────────────────────────────── */
  hero: {
    title: "Full Stack Developer",
    subtitle:
      "Building pixel-perfect, performant web experiences with modern technologies.",
    cta: "Explore My Work",
  },

  about: {
    bio: `I’m a highly motivated Full Stack Developer and competitive programmer with a strong focus on building real-world, scalable solutions.

Currently a second-year Computer Science student at Badr University in Assiut, I actively bridge the gap between academic knowledge and practical application by developing full-stack systems using the MERN stack (React, Node.js, Express, MongoDB).

I’ve built and deployed complete projects including an E-commerce Dashboard & Store, focusing on performance, clean architecture, and user experience.

Beyond development, I’m a C++ problem solver and ECPC-qualified contestant, which strengthened my algorithmic thinking, problem-solving speed, and ability to handle complex challenges under pressure.

I’ve also gained valuable industry exposure through training at Banque Misr, Orascom, and El-Orman, alongside certifications in Python from Microsoft and ITI.

I’m passionate about continuous growth, writing clean code, and turning ideas into impactful products that solve real problems.`,
  },

  /* ── Skills ────────────────────────────────────────────────────── */
  skills: [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
    { name: "Express", icon: SiExpress, color: "#FFFFFF" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "C++", icon: SiCplusplus, color: "#00599C" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "HTML5", icon: SiHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "Databases", icon: FaDatabase, color: "#7C4DFF" },
  ],

  /* ── Experience / Training ─────────────────────────────────────── */
  experience: [
    {
      company: "Software Engineering Intern",
      role: "Tech Startup / Freelance",
      description:
        "Developed and maintained full-stack web applications using the MERN stack. Collaborated with cross-functional teams to design RESTful APIs and improve database query performance by 20%.",
    },
    {
      company: "Competitive Programmer",
      role: "ECPC Qualifications",
      description:
        "Actively participated in rigorous algorithmic problem-solving contests using C++. Achieved high rankings by optimizing time and space complexities in advanced data structures.",
    },
    {
      company: "Open Source Contributor",
      role: "GitHub Community",
      description:
        "Contributed to various open-source projects by fixing bugs, improving documentation, and refactoring React components. Gained hands-on experience with advanced Git workflows and CI/CD pipelines.",
    },
    {
      company: "IT & Systems Trainee",
      role: "National Bank of Egypt",
      description:
        "Gained hands-on exposure to enterprise banking systems, financial data management, and professional IT infrastructure workflows.",
    },
  ],

  /* ── Education & Academic Courses ──────────────────────────────── */
  certifications: [
    {
      title: "Object-Oriented Programming (OOP)",
      issuer: "Computer Science Curriculum",
      description:
        "Mastered advanced OOP paradigms in C++ and Java, focusing on inheritance, polymorphism, and abstraction to build scalable software architectures.",
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "Continuous Learning",
      description:
        "Extensive problem-solving training using arrays, linked lists, trees, and graphs, crucial for competitive programming (ECPC) and building efficient systems.",
    },
    {
      title: "Digital Logic Design & Architecture",
      issuer: "Computer Science Curriculum",
      description:
        "Deep understanding of logic gates, boolean algebra, sequential circuits, and the foundational architecture of modern computing systems.",
    },
    {
      title: "Discrete Mathematics",
      issuer: "Academic Foundation",
      description:
        "Strong mathematical foundation in logic, set theory, combinatorics, and graph theory, essential for advanced algorithmic thinking.",
    },
    {
      title: "Database System Concepts",
      issuer: "Academic & Practical",
      description:
        "Comprehensive understanding of relational databases, schema normalization, E-R modeling, and complex SQL query optimization.",
    },
    {
      title: "Clean Code & Design Patterns",
      issuer: "Code Craftsmanship",
      description:
        "Deep dive into software architecture, SOLID principles, and proven design patterns to build maintainable enterprise-level applications.",
    },
  ],

  /* ── Projects ──────────────────────────────────────────────────── */
  projects: [
    {
      name: "C2A LAP — Full Stack E-commerce Dashboard & Store",
      description:
        "A complete Full Stack Web Application built with React, Node.js, Express, and MongoDB. Features include an Admin Dashboard for product/order management, a REST API backend, user authentication, and a modern storefront UI.",
      github: "https://github.com/mdiaad03-cloud/C2A-LAP-V1.1",
      tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    },
  ],

  /* ── Social Links ──────────────────────────────────────────────── */
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/mdiaad03-cloud",
      icon: FaGithub,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/%D9%85%D8%AD%D9%85%D8%AF-%D8%B6%D9%8A%D8%A7%D8%A1-b43a13343",
      icon: FaLinkedin,
    },
  ],

  /* ── Contact ───────────────────────────────────────────────────── */
  contact: {
    email: "mdiaad03@gmail.com",
    message:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!",
  },
};

export default data;
