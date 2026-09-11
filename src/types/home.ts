export type HomeWebsite = {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  url: string;
  stack: string[];
};

export type Capability = {
  title: string;
  description: string;
  items: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export type BuildStep = {
  number: string;
  title: string;
  description: string;
};
