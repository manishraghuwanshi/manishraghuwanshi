export type ExperienceType =
  | "training"
  | "professional"
  | "additional";

export interface ExperienceItemData {
  id: string;
  type: ExperienceType;
  title: string;
  period: string;
  description: string;
  highlights?: string[];
  technologies?: string[];
}

export interface ExperienceTechnology {
  name: string;
  category: "Primary" | "Project Experience" | "Training" | "Additional";
  description: string;
}