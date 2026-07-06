export const personalInfo = {
  name: "Parth Chaudhari",
  roles: ["SDE Intern", "Full-Stack Dev"],
  bio: "B.Tech IT @ FCRIT • Research Intern @ Avignon University, France • Building scalable distributed systems & intelligent 5G networks",
  email: "ch.parth2020@gmail.com",
  linkedin: "https://www.linkedin.com/in/parth-chaudhari-a0420131a",
  github: "https://github.com/parth-chaudhari", // Update with your actual GitHub
  location: "Kalyan (W), Maharashtra, India",
};

export const aboutMe = {
  bio: "Second-year IT undergraduate with experience in full-stack development and applied ML. Currently at Avignon University, France, working on Behavioral Trust Classification in 5G networks — building an ML pipeline on top of an open-source 5G Core (Free5GC) and NWDAF to classify User Equipment as Trusted, Uncertain, or Malicious from AMF telemetry. Previously shipped a production civic-tech platform with Spring Boot microservices and React, and contributed to SDE workflows covering API contract testing and CI/CD pipelines.",
  funFacts: [
    { emoji: "📡", text: "5G Networks" },
    { emoji: "🌍", text: "Avignon, France" },
    { emoji: "🗣️", text: "German A2" },
    { emoji: "🔧", text: "Systems Design" },
  ],
};

export const experiences = [
  {
    role: "Research Intern",
    company: "Avignon University, France",
    period: "June 2026 – July 2026",
    type: "Onsite",
    description: [
      "Building a Behavioral Trust Classification system for 5G networks using UE telemetry from the NWDAF analytics framework",
      "Designing ML pipelines (Random Forest, Gradient Boosting, Isolation Forest) to classify UE behavior as Trusted, Uncertain, or Malicious from AMF event streams",
      "Working with Free5GC, UERANSIM, and Docker-based 5G Core simulation environments for feature engineering and model evaluation",
    ],
  },
  {
    role: "SDE Intern",
    company: "Walkover Web Solutions Pvt. Ltd, Indore",
    period: "Dec 2025 – Mar 2026",
    type: "Remote",
    description: [
      "API testing with Postman, end-to-end workflow validation",
      "Output verification against source documents",
      "Product quality improvement and bug resolution",
    ],
  },
];

export const projects = [
  {
    title: "Smart Nagrik Seva (SNS)",
    tags: ["Full-Stack", "Civic Tech", "Production"],
    stack: ["Java", "Spring Boot", "React", "MySQL", "REST APIs"],
    description:
      "Web-based civic grievance platform with geo-tagging, auto-assignment, real-time dashboards, auto-escalation, and analytics for municipal officers.",
    highlight:
      "Architected for end-to-end complaint lifecycle management at scale",
    github: "#", // Update with actual link
    live: "#", // Update with actual link
  },
  {
    title: "Full Circuit Atlas of GPT-2",
    tags: ["AI Research", "Mechanistic Interpretability", "Ongoing"],
    stack: [
      "Python",
      "TransformerLens",
      "PyTorch",
      "PuLP/Gurobi",
      "NumPy",
      "Matplotlib",
    ],
    description:
      "Reverse-engineered GPT-2's 144 attention heads across 12 layers using ILP optimization, SVD decomposition, and causal tracing to map minimal circuits for factual recall, induction, and syntactic agreement.",
    highlight:
      "Automated end-to-end circuit discovery pipeline — from attention patterns to atlas visualization",
    github: "#", // Update with actual link
    live: "#", // Update with actual link
  },
];

export const skills = {
  Languages: ["Java", "Python", "SQL", "JavaScript"],
  Frameworks: ["Spring Boot", "React", "LangChain", "LangGraph"],
  "AI/ML": [
    "PyTorch",
    "scikit-learn",
    "TransformerLens",
    "NumPy",
    "pandas",
    "SciPy",
    "Matplotlib",
    "Hugging Face",
  ],
  Databases: ["MySQL", "PostgreSQL", "PGvector"],
  Tools: ["GitHub", "Postman", "IntelliJ IDEA", "VS Code"],
  Concepts: [
    "DSA",
    "OOP",
    "DBMS",
    "Probability & Statistics",
    "REST APIs",
    "Mechanistic Interpretability",
  ],
};

export const achievements = [
  {
    icon: "🏆",
    title: "GHCI Hackathon",
    subtitle: "Qualified Round 2 (AnitaB.org)",
  },
  {
    icon: "🏦",
    title: "Goldman Sachs",
    subtitle: "Risk Simulation ✓",
  },
  {
    icon: "🔐",
    title: "Deloitte & Mastercard",
    subtitle: "Cyber Security Simulations ✓",
  },
  {
    icon: "🇫🇷",
    title: "Research Intern",
    subtitle: "Selected — Avignon University, France",
  },
  {
    icon: "🎓",
    title: "CGPA",
    subtitle: "8.73 / 10 (Till Sem IV)",
    value: 8.73,
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact" },
];
