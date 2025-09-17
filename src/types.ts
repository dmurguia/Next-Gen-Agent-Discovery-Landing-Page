export interface Agent {
  id: string;
  name: string;
  summary: string;
  description: string;
  source: {
    name: string;
    url: string;
  };
  popularity: {
    pulls: number;
    rating: number;
    reviews: number;
    isHot?: boolean;
  };
  integrations: string[];
  setupInstructions: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
export type FilterOptions = {
  source: string[];
  integrations: string[];
  sortBy: 'popularity' | 'recent' | 'rating';
};