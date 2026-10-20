<<<<<<< HEAD
# Aryan — Creative Developer & Full-Stack Engineer Portfolio

A premium, modern, animation-rich portfolio website crafted with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**. Designed with an editorial Awwwards-inspired aesthetic, fluid glassmorphism, responsive micro-interactions, and a clean three-section architecture.

---

## 🌟 Highlights

- **Three Focused Sections**:
  1. **About** (`#about`): Dynamic hero introducing Aryan, value proposition, proven metrics, profile visual card with status pill, 4-pillar engineering philosophy, and categorized technical stack showcase.
  2. **Work** (`#work`): Editorial project gallery, featured project spotlight, category filters (*All, SaaS, Web Apps, Business Websites, Dev Tools, E-commerce*), image hover zoom, and interactive project modal dialog with technical deliverables.
  3. **Contact** (`#contact`): High-converting project inquiry interface with interactive project-type & budget chips, real Next.js API backend (`/api/contact`), direct email copy button with feedback, live IST clock, and social links.
- **Dark Editorial Identity**:
  - Obsidian backdrop (`#08090d`), ambient cursor-following glow, subtle mesh grid, and frosted glass cards.
  - Fluid spring animations with Framer Motion that respect `prefers-reduced-motion`.
- **Easy Maintenance**:
  - Edit personal details, bio, and social links in [`src/data/siteConfig.ts`](file:///c:/Users/prati/OneDrive/Desktop/portfolio_new/src/data/siteConfig.ts).
  - Add, edit, remove, or reorder projects simply by updating [`src/data/projects.ts`](file:///c:/Users/prati/OneDrive/Desktop/portfolio_new/src/data/projects.ts).
- **Production-Ready Backend**:
  - Real inquiry API route with strict input validation, HTTP status codes, and resilient JSON persistence in `data/inquiries.json`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router, Turbopack)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Vectors

---

## 🚀 Getting Started

### 1. Development Mode
Run the development server locally:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 2. Production Build
Test the optimized production build:

```bash
npm run build
npm run start
```

---

## 📂 Project Architecture

```
portfolio_new/
├── public/
│   ├── profile/
│   │   └── avatar.svg          # Stylized vector developer avatar
│   └── projects/
│       ├── omni-metrics.svg    # SaaS analytics dashboard mockup
│       ├── kroma-studio.svg    # E-commerce lookbook mockup
│       ├── nexus-flow.svg      # Dev tools API workbench mockup
│       ├── aura-health.svg     # Telehealth portal mockup
│       ├── veloce-capital.svg  # Fintech investment hub mockup
│       └── synthetix-ai.svg    # AI prompt lab mockup
├── src/
│   ├── app/
│   │   ├── api/contact/
│   │   │   └── route.ts        # Real backend contact handler
│   │   ├── globals.css         # Glassmorphism utilities & theme
│   │   ├── layout.tsx          # SEO, Open Graph & typography
│   │   └── page.tsx            # Assembled 3-section layout
│   ├── components/
│   │   ├── AboutSection.tsx    # Hero, stats, approach & tech stack
│   │   ├── BackgroundGlow.tsx  # Ambient mesh glow & cursor follower
│   │   ├── ContactSection.tsx  # Interactive contact form & socials
│   │   ├── Footer.tsx          # Local time clock & quick links
│   │   ├── Icons.tsx           # GitHub, LinkedIn, Instagram, X vectors
│   │   ├── Navbar.tsx          # Sticky glass nav & availability beacon
│   │   ├── ProjectCard.tsx     # Hover zoom, tech tags & actions
│   │   ├── ProjectModal.tsx    # Accessible modal for case studies
│   │   └── WorkSection.tsx     # Filter tabs & project gallery
│   ├── data/
│   │   ├── projects.ts         # Central project data (Add/edit here!)
│   │   └── siteConfig.ts       # Central personal & social details
│   └── types/
│       └── index.ts            # Project & Config TypeScript types
└── data/
    └── inquiries.json          # Received inquiries log
```

---

## ✏️ Customization Guide

### 1. Update Personal & Social Details
Open [`src/data/siteConfig.ts`](file:///c:/Users/prati/OneDrive/Desktop/portfolio_new/src/data/siteConfig.ts) to update:
- Your name, headline, bio, and role
- Your email address and physical/remote location
- Your GitHub, LinkedIn, Instagram, and X/Twitter URLs
- Availability status and active client project capacity

### 2. Add or Edit Projects
Open [`src/data/projects.ts`](file:///c:/Users/prati/OneDrive/Desktop/portfolio_new/src/data/projects.ts). Each project object supports:

```typescript
{
  id: "your-project-id",
  title: "Your Project Title",
  category: "SaaS" | "Web Apps" | "Business Websites" | "Dev Tools" | "E-commerce",
  year: "2024",
  featured: true, // Highlights the project in the top spotlight
  image: "/projects/your-image.png", // Place image in public/projects/
  description: "Short 1-2 sentence elevator pitch...",
  longDescription: "Detailed case study overview...",
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveUrl: "https://yourproject.com",
  githubUrl: "https://github.com/your-username/your-repo",
  metrics: "Sub-50ms latency • 10k users",
  role: "Lead Full-Stack Developer",
  deliverables: ["UI Design System", "Backend API", "Authentication"],
}
```

### 3. Contact Form Email Delivery
The contact form submits to [`src/app/api/contact/route.ts`](file:///c:/Users/prati/OneDrive/Desktop/portfolio_new/src/app/api/contact/route.ts). Inquiries are automatically saved into `data/inquiries.json`.
To connect an external email delivery provider such as [Resend](https://resend.com), install `resend` and add your API key in `.env.local`:

```bash
npm install resend
```
=======
# My_Portfolio
A professional portfolio website showcasing my skills, projects, and experience as a Full-Stack Web Developer, with a focus on modern, responsive, and user-friendly web applications.
>>>>>>> 0aa4b48f02724343a6ade28113e8c76404d5af3f
