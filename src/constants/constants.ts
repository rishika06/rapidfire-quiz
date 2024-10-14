import designerImage from "../assets/Design Icon.png";
import backendImage from "../assets/Backedn Icon.png";
import frontendImage from "../assets/Frontend Icon.png";

export const topicOptions = [
  // Frontend topics
  { id: 1, title: "React", value: "react", category: "frontend" },
  { id: 2, title: "JavaScript", value: "javascript", category: "frontend" },
  { id: 3, title: "HTML", value: "html", category: "frontend" },
  { id: 4, title: "CSS", value: "css", category: "frontend" },

  // Backend topics
  { id: 5, title: "Node.js", value: "nodejs", category: "backend" },
  { id: 6, title: "Databases", value: "databases", category: "backend" }, // Covers both SQL/NoSQL
  {
    id: 7,
    title: "Software Architecture",
    value: "software-architecture",
    category: "backend",
  },
  { id: 8, title: "API Design", value: "api-design", category: "backend" },

  // Designer topics
  { id: 9, title: "UI/UX Design", value: "ui-ux", category: "designer" },
  {
    id: 10,
    title: "Color Theory",
    value: "color-theory",
    category: "designer",
  },
  { id: 11, title: "Typography", value: "typography", category: "designer" },
  {
    id: 12,
    title: "Adobe Creative Suite",
    value: "adobe-suite",
    category: "designer",
  },
];

export const difficultyOptions = [
  { id: 1, title: "Easy", value: "easy" },
  { id: 2, title: "Medium", value: "medium" },
  { id: 3, title: "Difficult", value: "difficult" },
];

export const roles = [
  {
    id: 1,
    title: "Backend",
    value: "backend",
    image: backendImage,
    subText:
      "Different areas related to frontend such as Node, Python, API Design, etc.",
  },
  {
    id: 2,
    title: "Frontend",
    value: "frontend",
    image: frontendImage,
    subText: "Different areas related to backend such as React, JS, CSS, etc.",
  },
  {
    id: 3,
    title: "UI UX",
    value: "designer",
    image: designerImage,
    subText:
      "Different areas related to UI/UX such as user reaserch, visual design etc",
  },
];
