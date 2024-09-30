import designerImage from "../assets/undraw_design_process_re_0dhf.svg";
import backendImage from "../assets/undraw_server_cluster_jwwq.svg";
import frontendImage from "../assets/undraw_code_review_re_woeb.svg";

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
  { id: 1, title: "Backend Developer", name: "backend", image: backendImage },
  {
    id: 2,
    title: "Frontend Developer",
    name: "frontend",
    image: frontendImage,
  },
  { id: 3, title: "Designer", name: "designer", image: designerImage },
];
