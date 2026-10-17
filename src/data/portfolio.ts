export type NavItem = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
  note?: string;
};

export type ExperienceEntry = {
  title: string;
  company: string;
  period: string;
  description: string;
};

export const portfolio = {
  name: "Amjad Hasan",
  title: "ICT Undergraduate | Software Developer",
  headline: "I build practical software that solves real problems.",
  location: "Sri Lanka",
  email: "7111namjad@gmail.com",
  phone: "+94-76-488-800",
  phoneVerificationNote: "Pending verification",
  githubUrl: "https://github.com/nextgeneratio",
  linkedinUrl: "",
  whatsappNumber: "",
  siteUrl: "",
  cvUrl: "",
  intro:
    "I'm an ICT undergraduate at the University of Ruhuna, developing software applications and improving my programming skills through hands-on projects. I enjoy turning ideas and everyday challenges into useful, structured solutions.",
  about:
    "I'm Amjad Hasan, an ICT undergraduate at the University of Ruhuna with an interest in software development and practical problem-solving. I enjoy learning by building applications that address real needs, from expense management and decision-support tools to e-commerce platforms and database-driven systems. My approach is to understand the problem, break it into manageable parts, implement a solution, and improve it through testing and iteration. Alongside my technical journey, my experience in automotive sales has helped me appreciate the importance of communication, customer requirements, and the business value of a well-designed solution. I'm continuing to develop my skills and looking for opportunities to contribute to meaningful software projects while growing as a developer.",
  themeNote: "Light and dark themes are available and remember your preference.",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming languages",
    items: ["Python", "Java", "C#", "SQL", "JavaScript", "TypeScript"],
    note: "Built through coursework and project work.",
  },
  {
    title: "Web and app development",
    items: ["Next.js", "React", "Django", "HTML", "CSS", "Streamlit", "Flutter"],
    note: "Hands-on project experience and practical learning.",
  },
  {
    title: "Databases and data processing",
    items: ["MySQL", "SQLite", "Pandas", "Plotly", "Relational database design", "SQL queries"],
    note: "Used in reporting, analytics, and schema design projects.",
  },
  {
    title: "Development tools and practices",
    items: ["Git & GitHub", "VS Code", "Linux workflows", "Debugging", "Testing fundamentals", "Version control"],
    note: "Applied across university and personal software projects.",
  },
];

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "Automotive Sales Professional",
    company: "Automotive Sales",
    period: "Current role",
    description:
      "Worked in customer-facing sales roles where I communicated product details, understood customer needs, and explained options clearly. That experience strengthened my ability to connect business requirements with practical solutions and present ideas in a way people can understand.",
  },
];

export const educationDetails = [
  {
    title: "ICT Undergraduate",
    subtitle: "Faculty of Technology, University of Ruhuna",
    period: "Current study",
    description:
      "Building a foundation in computing, software development, data systems, and practical technical problem-solving through coursework and project work.",
  },
];

export const profileStats = [
  { label: "Project focus", value: "Practical apps" },
  { label: "Core stack", value: "Python, SQL, web" },
  { label: "Learning path", value: "Hands-on building" },
];
