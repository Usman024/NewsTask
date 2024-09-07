import { StateCreator } from "zustand";
import { NewsResource, NewsSlice } from "../types/News.ts";

export const createNewsSlice: StateCreator<NewsSlice, [], [], NewsSlice> = (
  set
) => ({
  newsArray: [],
  setNewsSortedArray: (newsSortedArray) =>
    set(() => ({ newsArray: [...newsSortedArray] })),
  categories: [
    "politics",
    "climate",
    "sports",
    "education",
    "business",
    "elections",
    "cars",
    "crime",
    "development",
  ],
  selectedCategory: "politics",
  setCategory: (value) => set(() => ({ selectedCategory: value })),
  selectedId: 0,
  setSelectedId: (value) => set(() => ({ selectedId: value })),
  sources: ["NewsAPI", "NewYork Times", "BBC News"],
  selectedSource: "BBC News",
  setSource: (value: NewsResource) => set(() => ({ selectedSource: value })),
  isLoading: true,
  setIsLoading: (value) => set(() => ({ isLoading: value })),
});
