export type ProjectCategory =
  | 'all'
  | 'algorithmic-trading'
  | 'analytics'
  | 'infrastructure'
  | 'automation';

export type ProjectStatus = 'completed' | 'in-progress';

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  outcome: string;
  category: Exclude<ProjectCategory, 'all'>;
  status: ProjectStatus;
  techStack: string[];
  icon: string;
  featured?: boolean;
  metrics?: ProjectMetric[];

  // Detail page content
  details?: ProjectDetails;
}

export interface ProjectDetails {
  clientContext?: string;
  challenge: {
    description: string;
    painPoints: string[];
  };
  solution: {
    description: string;
    highlights?: string[];
  };
  architecture: {
    description: string;
    techStack: TechStackItem[];
  };
  execution: {
    description: string;
    phases: ExecutionPhase[];
  };
  results: {
    description: string;
    before?: string[];
    after?: string[];
    testimonial?: {
      quote: string;
      author: string;
      role: string;
    };
  };
  media?: {
    screenshots?: string[];
    videoUrl?: string;
  };
}

export interface TechStackItem {
  name: string;
  category: 'language' | 'framework' | 'database' | 'infrastructure' | 'tool';
}

export interface ExecutionPhase {
  name: string;
  description: string;
}

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'algorithmic-trading', label: 'Algorithmic Trading' },
  { value: 'analytics', label: 'Analytics' },
  { value: 'infrastructure', label: 'Infrastructure' },
  { value: 'automation', label: 'Automation' },
];
