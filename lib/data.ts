export interface Project {
  title: string;
  year: string;
  tech: string[];
  description: string[];
  url?: string;
  github?: string;
  screenshot?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  url?: string;
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  honours: string;
  dissertation: string;
  highlights: string[];
}

export const siteConfig = {
  name: "Mykola Fomin",
  title: "Full-Stack Software Engineer",
  tagline:
    "Building performant web applications with Next.js, TypeScript & AWS",
  email: "fick.nomin@gmail.com",
  phone: "+44 7717 222470",
  location: "London, UK",
  github: "https://github.com/ficknomin",
  linkedin: "https://www.linkedin.com/in/mykola-fomin-cs03/",
} as const;

export const aboutText =
  "Full-stack engineer with a First Class Honours CS degree from Lancaster University. I build production-grade web applications — from AI-powered SaaS platforms to e-commerce stores. Fluent in English, Ukrainian, Russian, and Spanish.";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;

export const techStack = {
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Backend: [
    "Node.js",
    "Express.js",
    "Python",
    "FastAPI",
    "PostgreSQL",
    "Redis",
    "Prisma",
    "REST APIs",
  ],
  "Infra & Tools": [
    "AWS S3",
    "Docker",
    "Git",
    "Stripe",
    "OAuth",
    "SEO",
    "Agile",
    "Scrum",
  ],
  Languages: ["C", "Java", "Rust"],
} as const;

export const allTechFlat = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Redis",
  "Prisma",
  "AWS",
  "Docker",
  "Git",
  "Stripe",
  "Rust",
  "Java",
  "C",
  "HTML5",
  "CSS3",
  "Bootstrap",
  "OAuth",
  "REST APIs",
];

export const experience: Experience[] = [
  {
    role: "Website Developer",
    company: "Santorini White & Blue Weddings",
    period: "2023 – 2024",
    location: "Remote",
    url: "https://santorini-whitebluewedding.com",
    bullets: [
      "Built full-featured wedding agency site with Next.js — venue filtering, service showcase, contact forms",
      "Increased organic traffic by 40% through SEO optimisation (meta tags, structured data, performance)",
      "PostgreSQL database architecture for venue inventory and customer inquiries",
      "Responsive UI across all device sizes with pixel-perfect design",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "AI Image Upscaler SaaS",
    year: "2025",
    tech: ["Next.js", "Python", "AWS", "Redis", "PyTorch"],
    description: [
      "Production SaaS platform for 2x–16x image upscaling using REAL-ESRGAN + GFPGAN face restoration",
      "Redis queue management, AWS S3 storage, Stripe payment integration",
      "RunPod GPU infrastructure for ML inference",
    ],
    url: "https://proupscaler.app",
    screenshot: "/images/projects/proupscaler.png",
  },
  {
    title: "JYTHK — Renewable Energy Products",
    year: "2025",
    tech: ["Wix", "Three.js", "3D Models", "Clean UI"],
    description: [
      "Product showcase for a Chinese manufacturer of renewable energy devices — solar panels, EV chargers, inverters",
      "Interactive 3D product models built with Three.js for immersive browsing",
      "Clean, cross-platform UI with Wix backend and custom integrations",
    ],
    url: "https://jythk.com",
    screenshot: "/images/projects/jythk.png",
  },
  {
    title: "Micro ATX PC Builds E-commerce",
    year: "2024 - 2025",
    tech: ["Wix", "Custom Integrations", "E-commerce"],
    description: [
      "E-commerce platform for custom micro ATX gaming PC builds",
      "Product catalog management and checkout flow",
    ],
    url: "https://mycropc.com",
    screenshot: "/images/projects/mycropc.png",
  },
];

export const education: Education = {
  degree: "BSc Computer Science",
  institution: "Lancaster University",
  period: "2021 – 2024",
  honours: "First Class Honours (4.0 GPA)",
  dissertation:
    "Auto-update system for Solana blockchain smart contract security vulnerabilities",
  highlights: [
    "Java graphics editor with OpenGL (team lead)",
    "Compiler syntax analyser",
    "STM32 embedded systems project",
  ],
};
