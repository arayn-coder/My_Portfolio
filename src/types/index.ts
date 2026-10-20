export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: "SaaS" | "Web Apps" | "Business Websites" | "Dev Tools" | "E-commerce";
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
  metrics?: string;
  deliverables?: string[];
  client?: string;
  role?: string;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: string;
    icon?: string;
  }[];
}

export interface SocialLink {
  name: string;
  url: string;
  handle: string;
  icon: string;
}

export interface SiteConfig {
  name: string;
  role: string;
  heroHeadline: string;
  heroSubheadline: string;
  bioShort: string;
  approach: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  availability: {
    status: "available" | "busy" | "limited";
    label: string;
    turnaround: string;
    badgeText: string;
  };
  contact: {
    email: string;
    location: string;
    timezone: string;
    availableHours: string;
  };
  socials: SocialLink[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
