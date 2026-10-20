import { SiteConfig, SkillCategory } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Aryan Thakor",
  role: "Full-Stack Web Developer & Data Science",
  heroHeadline: "I Build Digital Experiences That Move Businesses Forward.",
  heroSubheadline:
    "Specialized in architecting high-performance web applications, fluid user interfaces, and scalable full-stack products for startups, ambitious brands, and web development agencies.",
  bioShort:
    "With 1+ years of hands-on experience transforming intricate technical challenges into effortless digital experiences, I pair modern frontend craftsmanship with battle-tested backend architecture.",

  approach: [
    {
      title: "Precision Engineering",
      description:
        "Every line of code is written with clean architecture, typed safety, and scalability in mind. No shortcuts, no technical debt.",
      icon: "Code2",
    },
    {
      title: "Performance & SEO By Default",
      description:
        "Sub-second load times, Core Web Vitals optimization, semantic markup, and dynamic SSR/SSG that rank high on search engines.",
      icon: "Zap",
    },
    {
      title: "Art-Directed Aesthetics",
      description:
        "Visually striking, typography-led micro-interactions and refined motion design that evoke emotion and leave an indelible impression.",
      icon: "Sparkles",
    },
    {
      title: "Client-Centric Collaboration",
      description:
        "Transparent communication, async progress tracking, on-time milestones, and frictionless deployment to production.",
      icon: "Users2",
    },
  ],

  stats: [
    {
      label: "Production Deployments",
      value: "5+",
      sublabel: "Shipped on time",
    },
    {
      label: "Client Satisfaction",
      value: "100%",
      sublabel: "Across in india",
    },
    {
      label: "Performance Benchmark",
      value: "99+",
      sublabel: "Average Lighthouse score",
    },
    {
      label: "Years in Web Engineering",
      value: "1.5+",
      sublabel: "Continuous evolution",
    },
  ],

  availability: {
    status: "available",
    label: "Available for Projects",
    turnaround: "Available for Q4 / Q1 contracts & freelance MVP builds",
    badgeText: "Accepting 2 new client projects",
  },

  contact: {
    email: "aaryancoder.tech@gmail.com",
    location: "Gujrat, India (Open to Global Remote)",
    timezone: "IST (UTC +5:30)",
    availableHours: "Mon – Fri: 09:00 – 19:00 IST / Overlap with EST & CET",
  },

  socials: [
    {
      name: "GitHub",
      url: "https://github.com/arayn-coder",
      handle: "@aryan-dev",
      icon: "Github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/aryan-thakor-0b2243345",
      handle: "in/aryan-webdev",
      icon: "Linkedin",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/coded_by_aryan/",
      handle: "@aryan.codes",
      icon: "Instagram",
    },

  ],
};

export const techStackCategories: SkillCategory[] = [
  {
    title: "Frontend Engineering",
    skills: [
      { name: "Next.js 15/16", level: "Expert" },
      { name: "React 19", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "HTML5 / CSS3 / Canvas", level: "Expert" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "MongoDB", level: "Advanced" },
      { name: "Python", level: "Intermediate" },
      { name: "REST & GraphQL APIs", level: "Expert" },
  
    ],
  },
  {
    title: "Tooling & Architecture",
    skills: [
      { name: "Git & GitHub CI/CD", level: "Expert" },
     
      { name: "Vercel / Cloudflare", level: "Expert" },

      { name: "Web Security & Auth", level: "Advanced" },
      { name: "Jest / Vitest", level: "Intermediate" },
    ],
  },
];
