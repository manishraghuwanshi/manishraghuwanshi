import heroImage from "../assets/home/home-hero.png";
import heroMobileImage from "../assets/home/hero_mobile.png";

import website01 from "../assets/home/website-01.png";
import website02 from "../assets/home/website-02.png";
import website03 from "../assets/home/website-03.png";
import website04 from "../assets/home/website-04.png";

import type {
  BuildStep,
  Capability,
  HomeWebsite,
  SkillGroup,
} from "../types/home";

export const RESUME_PATH = "/resume/Manish-Raghuwanshi-Resume.pdf";

export { heroImage, heroMobileImage };

export const technologyFlow = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Java",
  "PHP",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "ORM/Prisma",
  "MySQL",
  "PostgreSQL",
  "MongoDB",
  "OAuth 2.0",
  "JWT",
  "GIT",
  "GitHub",
  "CI/CD",
];

export const capabilities: Capability[] = [
  {
    title: "Frontend",
    description:
      "Building responsive, component-driven interfaces with modern frontend technologies.",
    items: [
      "React.js",
      "Tailwind",
      "TypeScript",
      "TanStack Query",
      "React Router - all mode",
      "Redux ToolKit",
    ],
  },
  {
    title: "Full Stack",
    description:
      "Connecting frontend experiences with APIs, backend services and databases.",
    items: [
      "Next.js",
      "Typescript",
      "App Router",
      "Route Handlers",
      "Rest APIs",
      "ORM/Prisma",
      "PostgreSQL",
      "OAuth 2.0",
      "JWT",
      "RBAC",
    ],
  },
  {
    title: "Mobile",
    description:
      "Creating practical cross-platform mobile experiences with React Native.",
    items: [
      "React Native",
      "React Navigation",
      "Styled Components",
      "Zod",
      "Android Studio/Xcode/Expo",
    ],
  },
];

export const homeWebsites: HomeWebsite[] = [
  {
    id: "website-01",
    name: "Website One",
    category: "Business Website",
    description:
      "A responsive business website focused on clear content, visual hierarchy and usability.",
    image: website01,
    url: "https://example.com/",
    stack: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "website-02",
    name: "Website Two",
    category: "Product Website",
    description:
      "A modern product experience built around reusable components and responsive layouts.",
    image: website02,
    url: "https://example.com/",
    stack: ["React", "JavaScript", "Tailwind CSS"],
  },
  {
    id: "website-03",
    name: "Website Three",
    category: "Company Website",
    description:
      "A clean company website designed around structured content and straightforward navigation.",
    image: website03,
    url: "https://example.com/",
    stack: ["Next.js", "TypeScript"],
  },
  {
    id: "website-04",
    name: "Website Four",
    category: "Web Experience",
    description:
      "An interactive web experience combining responsive UI and practical user interactions.",
    image: website04,
    url: "https://example.com/",
    stack: ["React", "TypeScript", "API"],
  },
];

export const strongSkills: SkillGroup = {
  title: "Strong Suite",
  skills: [
    "HTML",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "React Native",
  ],
};

export const workingKnowledge: SkillGroup = {
  title: "Working Knowledge",
  skills: [
    "PHP",
    "WordPress",
    "MySQL",
    "PostgreSQL",
    "MongoDB",
    "SEO(off page)",
    "Monitoring",
    "Node.js",
    "Express.js",
    "Java",
  ],
};

export const buildSteps: BuildStep[] = [
  {
    number: "01",
    title: "Think",
    description: "Understand requirements, problem & solution.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "Plan Technologies, components(idea), architecture,  and UI structure.",
  },
  {
    number: "03",
    title: "Build",
    description: "Implement the interface, logic and interactions with API.",
  },
  {
    number: "04",
    title: "Refine",
    description: "Test, improve responsiveness and polish the experience.",
  },
];
