export interface Experience {
  id: string;
  company: string;
  role: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  current: boolean;
  description: string;
  technologies: string[];
  achievements: string[];
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  proficiency: number;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}
