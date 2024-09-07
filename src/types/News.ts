export interface News {
  id: number;
  imgSrc?: string | null;
  author: string;
  source: string;
  category: string;
  title: string;
  description: string;
  publishedAt: string;
}

export type NewsResource = "NewsAPI" | "NewYork Times" | "BBC News";
export type NewsSlice = {
  newsArray: News[];
  setNewsSortedArray: (newsSortedArray: News[]) => void;
  categories: string[];
  selectedCategory: string;
  setCategory: (value: string) => void;
  selectedId: number;
  setSelectedId: (value: number) => void;
  sources: string[];
  selectedSource: NewsResource;
  setSource: (value: NewsResource) => void;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};
