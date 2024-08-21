export interface BannerProps {
  model: {
    title: string;
    description: string;
    cta: {
      text: string;
      link: string;
    };
  };
}

export type FocusAreasModel = {
  focusAreas: Array<{
    title: string;
    description: string;
  }>;
};

export type DataGridProps = {
  focusAreas: Array<{
    title: string;
    description: string;
  }>;
};
