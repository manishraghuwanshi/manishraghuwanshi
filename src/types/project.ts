export type ProjectCategory =
  | "featured"
  | "current"
  | "professional"
  | "contribution";

export type ProjectStatus =
  | "In Development"
  | "Completed"
  | "Professional Work"
  | "Maintenance";

export interface ProjectLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;

  description: string;
  longDescription?: string;

  role?: string;
  company?: string;
  year?: string;

  technologies: string[];
  features?: string[];

  image: string;
  gallery?: ProjectImage[];

  links?: ProjectLink[];

  contribution?: string;
}