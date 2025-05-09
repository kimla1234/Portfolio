import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ifinderImg from "@/public/ifinder.jpg"
import efoundImg from "@/public/efound.png";
import bookingImg from "@/public/booking.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Educations",
    hash: "#experience",
  },
  {
    name: "My Resource",
    hash: "#resource",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "General knowledge",
    location: "Samdach Ouv high school , Battambang",
    description:
      "I completed my general knowledge class with a grade of B.",
    icon: React.createElement(LuGraduationCap),
    date: "2018-2021",
    
  },
  {
    title: "Institute of Science and Technology Advanced Development",
    location: "Full-Stack Developer",
    description:
      "Developed real-world web applications through intensive full-stack training. Built scalable solutions using React, Next.js, TypeScript, Tailwind CSS, Spring Boot, and PostgreSQL. Contributed to projects like iFinder and e-found, focusing on UX/UI design, backend APIs, and database integration.",
    icon: React.createElement(FaReact),
    date: "2024 - 2025",
  },
  {
    title: "Royal University of Phnom Penh",
    location: "Bachelor of Computer and Science",
    description:
      "While studying, I gained over 2 years of industry-relevant experience—starting as a front-end developer and advancing into full-stack development. I've worked on real projects that sharpened my skills in responsive design, modern frameworks, and backend integration.",
    icon: React.createElement(LuGraduationCap),
    date: "2021 - Present",
  },
  
] as const;

export const projectsData = [
  {
    title: "iFinder",
    description:
      "is a new search engine designed to provide fast and accurate search results. It uses smart technology to understand what users are looking for and delivers the best answers quickly. A key feature of iFinder is its strong support for the Khmer language, making it our top priority. ",
    tags: ["React", "Next.js", "Tailwind","Spring", "PostgreSQL"],
    imageUrl: ifinderImg,
    link:"https://www.facebook.com/share/v/16UtVtXqeJ/"
  },
  {
    title: "E-found",
    description:
      " is a career and major consultant platform for everyone whether you’re a high school student ploring future possibilities, a university student refining your choices. It has features like job, university and profile info.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux","Python","FastAPI","PostgreSQL"],
    imageUrl: efoundImg,
    link:"https://www.facebook.com/share/v/18JksSPznG/"
  },
  {
    title: "Booking RUPP",
    description:
      "is a booking platform for the Royal University of Phnom Penh (RUPP). The system will allow students and university staff to: Create and manage different types of events,Easily search for upcoming events,Reserve spots to participate through the platform,Receive participation tickets via QR codes.",
    tags: ["React", "Next.js", "MySQL", "Tailwind", "Laravel"],
    imageUrl: bookingImg,
    link:""
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Laravel",
  "UX/UI Design"
] as const;
