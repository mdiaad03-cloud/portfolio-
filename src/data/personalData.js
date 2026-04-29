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

/* ── Profile image URL ─────────────────────────────────────────────
 * Replace this string with your own image URL and the avatar
 * across the site will update automatically.
 * ----------------------------------------------------------------*/
const PROFILE_IMAGE = "/images/profile.png";

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

  /* ── About Section ─────────────────────────────────────────────── */
  about: {
    bio: `I'm a passionate Full Stack Developer driven by the desire to craft elegant, high-performance web applications. My toolkit includes React, Node.js, Express, and MongoDB — the complete MERN stack — which I leverage to build seamless end-to-end solutions.

Beyond web development, I hone my problem-solving abilities through competitive programming in C++. I am proud to have qualified for the Egyptian Collegiate Programming Contest (ECPC), a testament to my analytical thinking and dedication.

Currently a second-year student at Badr University in Assiut, I am constantly learning, experimenting, and pushing the boundaries of what I can build.`,
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
      company: "National Bank of Egypt",
      role: "Trainee",
      description:
        "Gained hands-on exposure to enterprise banking systems, financial data management, and professional workflows in one of Egypt's largest banks.",
    },
    {
      company: "Orascom",
      role: "Trainee",
      description:
        "Participated in a structured training program focused on telecommunications infrastructure and modern software practices.",
    },
    {
      company: "El Orman",
      role: "Trainee",
      description:
        "Developed practical skills through a comprehensive training experience, collaborating with professionals on real-world projects.",
    },
  ],

  /* ── Education & Certifications ────────────────────────────────── */
  certifications: [
    {
      title: "Python Course",
      issuer: "Microsoft",
      description:
        "Completed an official Microsoft Python course covering fundamentals, data structures, and automation.",
    },
    {
      title: "ITI Certificate",
      issuer: "Information Technology Institute",
      description:
        "Earned a professional certificate from ITI, demonstrating proficiency in modern IT skills.",
    },
    {
      title: "Problem Solving with C++",
      issuer: "Competitive Programming",
      description:
        "Intensive problem-solving training in C++, preparing for ECPC-level algorithmic challenges.",
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
    email: "mohameddiaa@example.com",
    message:
      "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's connect!",
  },
};

export default data;
