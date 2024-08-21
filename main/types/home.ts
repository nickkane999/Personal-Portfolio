export interface ProjectCardProps {
  title?: string;
  description?: string;
}

export interface ProjectInterface {
  _id: string;
  id: number;
  title: string;
  description: string;
  github_link: string;
  startDate: string;
  endDate: string;
  estimatedTime: string;
  hidden: boolean;
}

export type ProjectType = {
  title: string;
  description: string;
  github_link: string;
  startDate: string;
  endDate: string;
  estimatedTime: string;
};

export interface DefaultProps {
  model: {
    title: string;
    html: string;
  };
}
