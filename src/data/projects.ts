import type { Project } from "./../types/project";

import img1 from "../assets/projectImgs/img1.png";
import img2 from "../assets/projectImgs/img2.png";
import img3 from "../assets/projectImgs/img3.png";
import img4 from "../assets/projectImgs/img4.png";
import img5 from "../assets/projectImgs/img5.png";
import img6 from "../assets/projectImgs/img6.png";
import img7 from "../assets/projectImgs/img7.png";
import img8 from "../assets/projectImgs/img8.png";


/* =========================================================
   Featured Project
   ========================================================= */

export const featuredProject: Project = {
  id: "spacetime",
  title: "SpaceTime",
  category: "featured",
  status: "In Development",

  description:
    "A modern e-commerce platform dedicated to watches, combining product discovery, detailed product experiences, and a polished shopping interface.",

  longDescription:
    "SpaceTime is a full-featured watch e-commerce project currently under development. The project focuses on creating a premium shopping experience with a modern interface, responsive layouts, authentication, product browsing, and a scalable application structure.",

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
      href: "#",
    },
    {
      label: "GitHub",
      href: "#",
    },
  ],
};

/* =========================================================
   Current Projects
   ========================================================= */

export const currentProjects: Project[] = [
  {
    id: "current-project-one",
    title: "Modern Web Application",
    category: "current",
    status: "In Development",

    description:
      "A modern web application focused on responsive UI, reusable components, and a scalable frontend architecture.",

    role: "Developer",

    year: "2026",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
    ],

    features: [
      "Responsive design",
      "Reusable components",
      "Interactive UI",
      "Modern frontend architecture",
    ],

    image: img2,

    links: [
      {
        label: "Live Preview",
        href: "#",
      },
      {
        label: "GitHub",
        href: "#",
      },
    ],
  },

  {
    id: "current-project-two",
    title: "Full-Stack Application",
    category: "current",
    status: "In Development",

    description:
      "A full-stack application exploring modern frontend development together with backend APIs and database integration.",

    role: "Full-Stack Developer",

    year: "2026",

    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
    ],

    features: [
      "Responsive interface",
      "REST API integration",
      "Database integration",
      "Authentication",
    ],

    image: img3,

    links: [
      {
        label: "Live Preview",
        href: "#",
      },
      {
        label: "GitHub",
        href: "#",
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
      "A production website developed and maintained during my professional experience as a Junior Web Developer.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    image: img4,

    links: [
      {
        label: "Visit Website",
        href: "#",
      },
    ],
  },

  {
    id: "kazemskitchen",
    title: "Kazems Kitchen",
    category: "professional",
    status: "Professional Work",

    description:
      "A production website project involving responsive layouts, content presentation, and frontend implementation.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    image: img5,

    links: [
      {
        label: "Visit Website",
        href: "#",
      },
    ],
  },

  {
    id: "green-injury-law-firm",
    title: "Green Injury Law Firm",
    category: "professional",
    status: "Professional Work",

    description:
      "A professional business website focused on responsive presentation, service information, and user-friendly navigation.",

    role: "Junior Web Developer",
    company: "Professional Work",

    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "CSS",
      "SEO",
    ],

    image: img6,

    links: [
      {
        label: "Visit Website",
        href: "#",
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

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "WordPress",
    ],

    image: img7,

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

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "WordPress",
    ],

    image: img8,
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

    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "PHP",
    ],

    image: img2,
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

    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "WordPress",
      "SEO",
    ],

    image: img3,
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

    technologies: [
      "JavaScript",
      "PHP",
      "WordPress",
      "HTML",
      "CSS",
    ],

    image: img1,
  },
];