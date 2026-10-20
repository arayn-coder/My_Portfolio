import { Project } from "@/types";

/**
 * PROJECT REPOSITORY
 * 
 * To add a new project, simply add a new object to this array.
 * Note: These initial entries are realistic sample showcase projects.
 * You can easily replace titles, links, descriptions, and images with your own work.
 */
export const projects: Project[] = [
  {
    id: "GetMeChai",
    title: "Buy Me a Chai is a full-stack web application inspired by creator-support platforms like Buy Me a Coffee.",
    category: "Web Apps",
    year: "2026",
    featured: true,
    image: "/projects/getmechai.png",
    description:
      "It allows creators, developers, students, and content creators to create a personalized profile where supporters can send them monetary contributions along with a custom message.",
    longDescription:
      "Buy Me a Chai is a full-stack web application inspired by creator-support platforms like Buy Me a Coffee. It allows creators, developers, students, and content creators to create a personalized profile where supporters can send them monetary contributions along with a custom message.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Mongoose", "Mongodb", " Next.js Server Actions", "Razorpay", "API Route"],
    liveUrl: "https://www.getmechai.site/",
    githubUrl: "https://github.com/arayn-coder/Get_Me_-a_Chai.git",
    metrics: "Sub-50ms dashboard render • 50k+ events/sec capability",
    role: "Lead Full-Stack Architect",
    deliverables: ["User authentication with NextAuth", "Personalized user profiles", "Online payment integration with Razorpay"],
  },

  {
    id: "Bitlinks",
    title: "Bitlinks is an modern URL Shortner",
    category: "Dev Tools",
    year: "2026",
    featured: false,
    image: "/projects/bitlinks.jpeg",
    description:
      "Lightweight developer tool for designing, inspecting, and simulating REST & GraphQL endpoints with instant schema generation.",
    longDescription:
      "It allows users to transform long URLs into short, customizable links and manage all their generated links from a personal dashboard. Bitlinks includes secure authentication, user-specific URL management, editing, deletion, copying, and redirection functionality through a clean and responsive interface.",
    technologies: ["TypeScript", "Next.js", "Tailwind CSS", "JavaScript", "bcryptjs", "Mongoose", "Mongodb", "Nextauth", "Reach Toastify", "Next.js link"],
    liveUrl: "https://www.bitlinks.site/",
    githubUrl: "https://github.com/arayn-coder/bitlinks.git",
    metrics: "Zero latency local mock execution • 100% offline capable",
    role: "Creator & Full-Stack Developer",
    deliverables: [" URL Shortening", "Authentication", " Personal URL Dashboard"],
  },
  {
    id: "netflix",
    title: "Netflix UI Clone",
    category: "Web Apps",
    year: "2025",
    featured: false,
    image: "/projects/Netflix_cover_pic.jpeg",
    description:
      "A Netflix-inspired streaming platform UI built to recreate the look and feel of a modern movie and TV show browsing experience.",
    longDescription: "The Netflix Clone UI is a frontend development project inspired by Netflix's streaming platform. It features a modern, visually appealing interface with a cinematic dark theme, movie and TV show sections, featured content banners, and an intuitive browsing layout. The project focuses on frontend design, responsive layouts, reusable UI components, and styling to deliver a familiar streaming-platform experience. This is a UI-only project created for learning and portfolio demonstration; backend services, user authentication, and video streaming functionality are not implemented.",
    technologies: ["HTML", "CSS", "JavaScript"],
    liveUrl: "https://drive.google.com/file/d/1nifiMiKoZc9SwvbUupiQDaNDDGaqSvlT/view?usp=drive_link",
    githubUrl: "https://github.com/arayn-coder/Netflix-clone.git",
    metrics: "Project Type: Frontend UI Clone, Category: Entertainment / Streaming, Focus: UI/UX Design",
    role: "Frontend Developer — responsible for designing and developing the user interface, implementing layouts and styling, and recreating the visual experience of a streaming platform.",
    deliverables: [" UNetflix-inspired homepage UI", "Dark cinematic theme", " Clean and organized frontend code"],
  },
  {
    id: "Spotify Clone",
    title: "Spotify Clone",
    category: "Web Apps",
    year: "2025",
    featured: false,
    image: "/projects/spotify_cover_pic.jpg",
    description:
      "A Spotify-inspired music streaming interface featuring an interactive music player, a personal library, music cards with glowing animations, and a modern dark-themed design.",
    longDescription: "The Spotify Clone UI is a frontend development project inspired by Spotify's music streaming platform. It combines a sleek dark interface with interactive music components to create an engaging music-listening experience. The project includes a music player bar, a Your Library section, music cards with glowing animations, and an intuitive layout for browsing music. LocalStorage is used to store selected application data in the browser, allowing supported preferences or library state to persist without a database or backend. The project focuses on frontend development, UI/UX design, interactive components, animations, and client-side data management.",
    technologies: ["HTML", "CSS", "JavaScript", "Local Storage"],
    liveUrl: "https://drive.google.com/file/d/1of7JmVpCGbAukcL_XG9Y6di3OzHYGRZW/view?usp=drive_link",
    githubUrl: "https://github.com/arayn-coder/spotify_clone.git",
    metrics: "Project Type: Interactive Frontend UI, Category: Music / Entertainment, Data Storage: Browser LocalStorage, Key Features: Music Player Bar, Your Library, Animated Music Cards",
    role: "Frontend Developer — responsible for designing and developing the Spotify-inspired interface, implementing interactive music player components, creating glowing card animations, building the library section, and managing supported client-side data using LocalStorage.",
    deliverables: [" Spotify-inspired music streaming UI", "Interactive music player bar", " Your Library section", "Client-side data persistence using LocalStorage"],
  },
  {
    id: "Twitter-x",
    title: "Twitter (X) Clone UI",
    category: "Web Apps",
    year: "2025",
    featured: false,
    image: "/projects/twitter-x_pic.jpg",
    description:
      "A Twitter (X)-inspired social media interface built using Tailwind CSS, recreating the platform's modern design with a clean layout, navigation sidebar, post feed, and profile elements.",
    longDescription: "The Twitter (X) Clone UI is a frontend design project inspired by the X social media platform. Built using Tailwind CSS with a CLI-based development workflow, the project recreates the platform's minimalist interface, dark theme, navigation sidebar, post feed, trending section, and profile components. The main focus is on responsive layouts, consistent styling, modern UI design, and reusable interface elements. This project is a static UI design created for frontend practice and portfolio demonstration. It does not include functional features such as posting, liking, following, authentication, or database integration.",
    technologies: ["React", "Tailwind css"],
    liveUrl: "https://drive.google.com/file/d/1kusV_nnd4LE95LJajHJVuZMsqGgzkcsM/view?usp=drive_link",
    githubUrl: "https://github.com/arayn-coder/Twitter-x.git",
    metrics: "Project Type: Static Frontend UI,Category: Social Media, Framework / Styling: Tailwind CSS,Development Workflow: Tailwind CSS CLI, Functionality: UI Design Only",
    role: "Frontend Developer — responsible for recreating the X-inspired interface, building page layouts with Tailwind CSS utility classes, styling navigation and feed components, and maintaining a consistent visual design.",
    deliverables: [" Twitter (X)-inspired homepage UI", "Navigation sidebar", " Social media post feed layout", "Profile and post components"],
  },


];

export const projectCategories = [
  "All",
  "SaaS",
  "Web Apps",
  "Business Websites",
  "Dev Tools",
  "E-commerce",
] as const;
