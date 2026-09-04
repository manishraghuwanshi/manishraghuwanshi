import type {
  ExperienceItemData,
  ExperienceTechnology,
} from "../types/experience";


export const experienceItems: ExperienceItemData[] = [
  {
    id: "training",
    type: "training",
    title: "Initial Development Training",
    period: "First 3 months",
    description:
      "Started my professional journey with structured training across web and mobile development technologies before moving into project-based work.",
    highlights: [
      "PHP and web development fundamentals",
      "React.js for frontend development",
      "React Native for mobile application development",
      "WordPress development and workflows",
    ],
    technologies: ["PHP", "React.js", "React Native", "WordPress"],
  },
  {
    id: "react-development",
    type: "professional",
    title: "React.js Development",
    period: "Primary area of work",
    description:
      "After completing the initial training, most of my professional development work was focused on React.js projects as part of the development team.",
    highlights: [
      "Worked primarily on React.js-based projects",
      "Built and worked on frontend interfaces and application features",
      "Worked within existing project structures and development workflows",
    ],
    technologies: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    id: "react-native",
    type: "professional",
    title: "React Native Development",
    period: "Project experience",
    description:
      "Worked on a React Native project and gained practical experience with the development environments used for Android and iOS application development.",
    highlights: [
      "Worked with React Native for mobile application development",
      "Used Android Studio for Android development and testing",
      "Worked with Xcode for iOS development",
    ],
    technologies: ["React Native", "Android Studio", "Xcode", "Expo"],
  },
  {
    id: "wordpress",
    type: "professional",
    title: "WordPress Development",
    period: "Approximately 3 months",
    description:
      "Worked on WordPress-based projects as part of my broader web development responsibilities, gaining practical experience with a widely used CMS.",
    technologies: ["WordPress", "PHP"],
  },
  {
    id: "seo-support",
    type: "additional",
    title: "SEO Support",
    period: "As required",
    description:
      "Occasionally handled SEO-related responsibilities when the SEO developer was unavailable, alongside my regular development work.",
    highlights: [
      "Worked with SEO tools and off-page activities",
      "Handled social, image, blog, review and video submissions",
      "Created supporting blog, post, review and video content when required",
    ],
    technologies: ["SEO Tools", "Content Creation", "Off-page SEO"],
  },
];

export const experienceTechnologies: ExperienceTechnology[] = [
  {
    name: "React.js",
    category: "Primary",
    description:
      "The primary technology used throughout most of my professional project work.",
  },
  {
    name: "React Native",
    category: "Project Experience",
    description:
      "Used for mobile development, with exposure to both Android Studio and Xcode.",
  },
  {
    name: "WordPress",
    category: "Project Experience",
    description: "Worked on WordPress projects for approximately three months.",
  },
  {
    name: "PHP",
    category: "Project Experience",
    description:
      "Covered PHP during my initial professional training and worked with it in the WordPress context.",
  },
  {
    name: "SEO",
    category: "Additional",
    description:
      "Received external SEO training and occasionally supported SEO work when required.",
  },
  {
    name: "JavaScript",
    category: "Primary",
    description:
      "Used as part of React.js development, HTML sites and frontend project work.",
  },
];
