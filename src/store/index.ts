import { create } from "zustand";
import { subscribeWithSelector, persist } from "zustand/middleware";
import { createNewsSlice } from "./newsSlice.ts";
import { NewsSlice } from "../types/News.ts";

export type StoreTypes = NewsSlice;

export const useStore = create<StoreTypes>()(
  persist(
    subscribeWithSelector((...a) => ({
      ...createNewsSlice(...a),
    })),
    {
      name: "news-storage",
      getStorage: () => localStorage,
      partialize: (state) => ({
        selectedSource: state.selectedSource,
        selectedCategory: state.selectedCategory,
      }),
    }
  )
);
