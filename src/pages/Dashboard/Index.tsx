import React, { useEffect } from "react";
import Content from "../../components/NewsContent/Content.tsx";
import { useStore } from "../../store/index.ts";
import { getNews } from "../../APIs/News.ts";
import HomeSkeleton from "../../components/Skeleton/HomeSkeleton.tsx";
import Subscribe from "../../components/Cards/Subscribe.tsx";
import EmptyHome from "../../components/EmptyState/Home/EmptyHome.tsx";

const Index = () => {
  const {
    newsArray,
    selectedSource,
    selectedCategory,
    isLoading,
    setIsLoading,
  } = useStore((state) => ({
    newsArray: state.newsArray,
    selectedSource: state.selectedSource,
    selectedCategory: state.selectedCategory,
    isLoading: state.isLoading,
    setIsLoading: state.setIsLoading,
  }));

  const fetchData = async () => {
    setIsLoading(true);
    await getNews(selectedCategory, selectedSource);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-[6rem]">
      {/* Showing SKELETON / LOADING / Content based on API Response */}

      {!!isLoading ? (
        <HomeSkeleton />
      ) : !!newsArray.length ? (
        <Content />
      ) : (
        <EmptyHome />
      )}

      {/* Component Just for UI (No action Required or can be performed using this) */}
      <Subscribe />
    </div>
  );
};

export default Index;
