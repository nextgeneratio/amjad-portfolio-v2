export type Project = {
  slug: string;
  name: string;
  summary: string;
  problem: string;
  features: string[];
  stack: string[];
  repositoryUrl: string;
  demoUrl?: string;
  status: string;
  detail: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "expense-dss",
    name: "Expense DSS",
    summary: "A Python + Streamlit expense tracking and decision-support app for understanding spending habits and monitoring budgets.",
    problem: "Many people record expenses without seeing patterns, risks, or opportunities to improve budgeting decisions.",
    features: [
      "Daily expense entry and management",
      "Category-based tracking and monthly budgets",
      "Spending summaries and interactive charts",
      "Forecasting and rule-based recommendations",
      "Budget alerts and unusual spending detection",
    ],
    stack: ["Python", "Streamlit", "SQLite", "Pandas", "Plotly"],
    repositoryUrl: "https://github.com/nextgeneratio/Expence-DSS",
    demoUrl: "https://expence-dss.streamlit.app/",
    status: "Live demo reachable",
    detail:
      "This project connects routine expense recording with analytics and decision support, making it easier to review trends and manage financial choices with a clearer picture of where money is going.",
    accent: "from-sky-500 via-cyan-500 to-blue-600",
  },
  {
    slug: "rathna-stores",
    name: "Rathna Stores",
    summary: "A Django-based e-commerce project for browsing products, managing a cart, and planning online ordering workflows.",
    problem: "A small store needs a clean online storefront that supports product discovery, simple ordering, and a practical shopping flow.",
    features: [
      "Product catalogue and search",
      "Cake-focused storefront experience",
      "Shopping cart and order workflow",
      "Django-based structure for store features",
      "Admin and management-oriented modules",
    ],
    stack: ["Django", "Python", "HTML", "CSS", "SQLite"],
    repositoryUrl: "https://github.com/nextgeneratio/Rathna_Stores",
    status: "Source available",
    detail:
      "The project illustrates hands-on work with a web application pipeline, customer-facing shop pages, and store logic built around online product and order management.",
    accent: "from-violet-500 via-fuchsia-500 to-pink-600",
  },
  {
    slug: "student-management-database",
    name: "Student Management Database",
    summary: "A relational database project for managing academic records, course enrolment, attendance, and assessment data.",
    problem: "University-style data systems need clear relationships, integrity constraints, and reporting-friendly schema design to support meaningful academic records.",
    features: [
      "Student and department records",
      "Course and enrolment data model",
      "Assessment scores and final marks",
      "Attendance and medical/exemption tracking",
      "Relational diagram and SQL schema documentation",
    ],
    stack: ["SQL", "MySQL", "Database design", "ER modelling"],
    repositoryUrl: "https://github.com/nextgeneratio/DBMS-mini-project",
    status: "Schema and documentation available",
    detail:
      "The project highlights normalized design choices, junction tables, and relationship management that make large academic datasets easier to query, report on, and maintain with integrity.",
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
  },
  {
    slug: "nextjs-ai-agent-demo",
    name: "Next.js AI Agent Demo",
    summary: "A Next.js chatbot demonstration that uses Google Gemini to show a modern web app integrating with an AI service.",
    problem: "Learning projects benefit from practical API integrations that connect a web interface to an LLM while keeping implementation understandable.",
    features: [
      "Next.js frontend for a chatbot flow",
      "Google Gemini API integration",
      "Modern app structure and local development setup",
      "Demonstration-focused AI interaction",
    ],
    stack: ["Next.js", "React", "TypeScript", "Google Gemini"],
    repositoryUrl: "https://github.com/nextgeneratio/nextjs-ai-agent",
    status: "Learning-focused demo",
    detail:
      "This project demonstrates practical exposure to modern web app development and external AI integration without presenting itself as a production AI platform.",
    accent: "from-amber-500 via-orange-500 to-rose-500",
  },
  {
    slug: "cleanbrowsing-guard",
    name: "CleanBrowsing Guard",
    summary: "An Android app designed to enforce internet filtering through a local VPN and DNS-based protection model.",
    problem: "Users need a privacy-focused layer that blocks unsafe or unwanted DNS traffic while allowing local protection mechanisms to operate reliably.",
    features: [
      "Local VPN-based DNS interception",
      "DNS-over-HTTPS prioritization",
      "Fail-closed protection model",
      "Admin PIN protection and diagnostics",
      "Automatic failover between upstream endpoints",
    ],
    stack: ["Android", "Java", "VPN APIs", "DNS filtering"],
    repositoryUrl: "https://github.com/nextgeneratio/VPN_DNS",
    status: "Android project documentation available",
    detail:
      "This work shows interest in system-level privacy and filtering architecture, with a focus on local network protection and secure handling of DNS traffic.",
    accent: "from-indigo-500 via-blue-500 to-sky-600",
  },
  {
    slug: "csharp-login-form",
    name: "C# Login and User Form",
    summary: "An early C# project featuring a user information form and a login-style interface for learning application development fundamentals.",
    problem: "Beginning application development requires understanding form-driven interfaces, data entry, and simple user flow design.",
    features: [
      "User form input workflow",
      "Login interface pattern",
      "Early Windows-style application design",
      "Foundation in C# development",
    ],
    stack: ["C#", ".NET", "Windows Forms"],
    repositoryUrl: "https://github.com/nextgeneratio/C--project",
    status: "Early learning project",
    detail:
      "This repository reflects the early stages of developing software interfaces and understanding basic application logic, user input, and screen-based interaction design.",
    accent: "from-slate-500 via-gray-500 to-zinc-600",
  },
];

export const featuredProjects = projects.slice(0, 4);
