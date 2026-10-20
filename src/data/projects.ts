import type { Project } from "./../types/project";


import devzen from "../assets/projectImgs/devzen.png";
import expressbackend from "../assets/projectImgs/expressbackend.png";

import img1 from "../assets/projectImgs/chronospeed.png";
import img2 from "../assets/projectImgs/chronospeedscrst1.png";
import img3 from "../assets/projectImgs/chronospeedscrst2.png";
import Professional_Technologies_Portfolio_Banner from "../assets/projectImgs/Professional_Technologies_Portfolio_Banner.png";

/* =========================================================
   Featured Project
   ========================================================= */

export const featuredProject: Project = {
  id: "chronospeed",
  title: "ChronoSpeed",
  category: "featured",
  status: "In Development",

  description:
    "A modern e-commerce platform dedicated to watches, combining product discovery, detailed product experiences, and a polished shopping interface.",

  longDescription:
    "ChronoSpeed is a full-featured watch e-commerce project currently under development. The project focuses on creating a premium shopping experience with a modern interface, responsive layouts, authentication, product browsing, and a scalable application structure.",

  role: "Full-Stack Developer",

  year: "2026",

  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "MongoDB",
    "Authentication",
  ],

  features: [
    "Responsive e-commerce interface",
    "Product browsing and discovery",
    "Product detail pages",
    "User authentication",
    "Shopping cart",
    "Modern responsive UI",
    "Reusable component architecture",
  ],

  image: img1,

  gallery: [
    {
      src: img1,
      alt: "SpaceTime project preview",
    },
    {
      src: img2,
      alt: "SpaceTime product interface",
    },
    {
      src: img3,
      alt: "SpaceTime responsive interface",
    },
  ],

  links: [
    {
      label: "Live Preview",
      href: "https://chronospeed.vercel.app/",
    },
    {
      label: "GitHub",
      href: "https://github.com/manishraghuwanshi/chronospeed",
    },
  ],
};

/* =========================================================
   Current Projects
   ========================================================= */

export const currentProjects: Project[] = [
  {
    id: "devzen",
    title: "Devzen Admin Dashboard",
    category: "current",
    status: "Completed",

    description:
      "A modern React and TypeScript admin dashboard for managing products, brands, categories, inventory, and other ecommerce operations through a responsive and scalable interface.",
    role: "Developer",

    year: "2026",

    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router",
      "TanStack Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "Lucide React",
      "ESLint",
      "Prettier",
    ],

    features: [
      "Responsive design",
      "Reusable components",
      "Interactive UI",
      "Modern frontend architecture",
    ],

    image: devzen,

    links: [
      {
        label: "Live Preview",
        href: "https://devzen-ten.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/manishraghuwanshi/devzen",
      },
    ],
  },

  {
    id: "current-project-two",
    title: "Ecommerce Admin Backend",
    category: "current",
    status: "Completed",
    description:
      "A secure REST API backend built with Express.js and TypeScript for powering an ecommerce administration platform with authentication, role-based access control, product management, database operations, and audit logging.",
    role: "Backend Developer",
    year: "2026",
    technologies: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "PostgreSQL",
      "Neon",
      "Drizzle ORM",
      "Zod",
      "Argon2",
      "JOSE",
      "REST API",
    ],
    features: [
      "Admin authentication",
      "Role-based access control",
      "Product management API",
      "PostgreSQL database integration",
      "Secure HTTP-only sessions",
      "Login rate limiting",
      "CSRF & CORS protection",
      "Audit logging",
    ],
    image: expressbackend,
    links: [
      {
        label: "Live API",
        href: "https://watch-admin-backend.onrender.com/",
      },
      {
        label: "GitHub",
        href: "https://github.com/manishraghuwanshi/admin-backend",
      },
    ],
  },
];

/* =========================================================
   Professional Projects
   ========================================================= */

export const professionalProjects: Project[] = [
  {
    id: "myorganica",
    title: "My Organica",
    category: "professional",
    status: "Professional Work",

    description:
      "A React-based internal organization management application developed to streamline day-to-day business operations across employees, managers, HR, and administrators.",
    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "React.js",
      "JavaScript",
      "REST APIs",
      "React Router",
      "Context API",
    ],

    image: Professional_Technologies_Portfolio_Banner,

    links: [
      {
        label: "Internal Project",
        href: "#",
      },
    ],
  },

  {
    id: "taskmax",
    title: "TaskMax",
    category: "professional",
    status: "Professional Work",

    description:
      "A React Native application developed as the mobile counterpart to the internal organization management system, supporting organizational workflows for employees, managers, HR, and administrators.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "React Native",
      "JavaScript",
      "Android Studio",
      "Xcode",
      "REST APIs",
      "styled-components",
    ],

    image: Professional_Technologies_Portfolio_Banner,

    links: [
      {
        label: "Internal Project",
        href: "#",
      },
    ],
  },

  {
    id: "miamiorthodontistgroup",
    title: "Miami Orthodontist Group",
    category: "professional",
    status: "Professional Work",

    description:
      "Managed PHP-based blog content and supported off-page SEO, review submissions, social media posting, and image, PDF, video, and other content submissions, also used SEO PowerSuite and Google SEO tools.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "Blog Management",
      "PHP",
      "JavaScript",
      "Off-Page SEO",
      "SEO PowerSuite",
      "Google SEO Tools",
      "Content Submission",
    ],

    image: Professional_Technologies_Portfolio_Banner,

    links: [
      {
        label: "Visit Website",
        href: "https://www.miamiorthodontistgroup.com/",
      },
    ],
  },

  {
    id: "buttonsny",
    title: "Buttonsny",
    category: "professional",
    status: "Professional Work",

    description:
      "A client project worked on during professional development work, including frontend implementation and website maintenance.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],

    image: Professional_Technologies_Portfolio_Banner,

    links: [
      {
        label: "Visit Website",
        href: "#",
      },
    ],
  },
];

/* =========================================================
   Additional Contributions
   ========================================================= */

export const contributionProjects: Project[] = [
  {
    id: "maintenance",
    title: "Legacy Project Maintenance",
    category: "contribution",
    status: "Maintenance",

    description:
      "Maintained and updated existing production projects when changes, fixes, or urgent updates were required.",

    contribution:
      "Worked on existing projects when the primary developer was unavailable or additional development support was required.",

    technologies: ["HTML", "CSS", "JavaScript", "PHP", "WordPress"],

    image: Professional_Technologies_Portfolio_Banner,
  },

  {
    id: "urgent-fixes",
    title: "Urgent Production Fixes",
    category: "contribution",
    status: "Maintenance",

    description:
      "Handled smaller production issues and urgent website changes that needed to be resolved quickly.",

    contribution:
      "Investigated frontend issues, implemented fixes, and helped keep production websites operational.",

    technologies: ["JavaScript", "HTML", "CSS", "PHP"],

    image: Professional_Technologies_Portfolio_Banner,
  },

  {
    id: "seo-support",
    title: "SEO Support",
    category: "contribution",
    status: "Professional Work",

    description:
      "Supported SEO-related website changes when additional development assistance was required.",

    contribution:
      "Helped with technical website changes and content-related updates when SEO development work required additional support.",

    technologies: ["HTML", "CSS", "JavaScript", "WordPress", "SEO"],

    image: Professional_Technologies_Portfolio_Banner,
  },

  {
    id: "developer-support",
    title: "Developer Support",
    category: "contribution",
    status: "Professional Work",

    description:
      "Provided development support across existing projects whenever additional help was required.",

    contribution:
      "Worked across different projects and handled smaller tasks outside of a primary project when required by the team.",

    technologies: ["JavaScript", "PHP", "WordPress", "HTML", "CSS"],

    image: Professional_Technologies_Portfolio_Banner,
  },
];
