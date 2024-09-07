import React, { useState } from "react";
import Search from "../Input/Search.tsx";
import FormFilter from "../Forms/Filter.tsx";
import { useStore } from "../../store/index.ts";
import { getNews } from "../../APIs/News.ts";
import Dialog from "../Dialog.tsx";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
  const navigate = useNavigate();
  const [isOpenSearch, setIsOpenSearch] = useState<boolean>(false);
  const [isOpenFilter, setIsOpenFilter] = useState<boolean>(false);
  const {
    categories,
    selectedCategory,
    setCategory,
    selectedSource,
    setIsLoading,
  } = useStore((state) => ({
    categories: state.categories,
    selectedCategory: state.selectedCategory,
    setCategory: state.setCategory,
    selectedSource: state.selectedSource,
    setIsLoading: state.setIsLoading,
  }));

  const handleClick = async (category: string) => {
    setCategory(category);
    setIsLoading(true);
    await getNews(category, selectedSource);
    setIsLoading(false);
  };

  return (
    <>
      <div className="w-full p-4 sm:px-8 md:px-10 lg:px-14 xl:px-18 2xl:px-24 3xl:px-[10vw] 4xl:px-[25vw] h-[5rem] bg-primaryBgColor z-[1000] fixed top-0 left-0 px-[2rem] flex flex-row justify-between items-center  lg:[5rem]">
        <div className="flex flex-row items-center justify-center">
          <p
            onClick={() => navigate("/")}
            className="pr-4 text-lg font-semibold cursor-pointer text-primaryColor font-headLine md:text-2xl"
          >
            {selectedSource}
          </p>
          <div className="items-center justify-center hidden pl-4 capitalize border-l-2 border-l-secondaryColor md:flex md:flex-row md:gap-3">
            {categories.slice(0, 5).map((category, i) => {
              return (
                <p
                  key={i}
                  id="categories"
                  onClick={() => handleClick(category)}
                  className={`cursor-pointer inline border-b-4 text-md font-semibold pb-1 ${
                    selectedCategory === category
                      ? "border-primaryColor"
                      : "border-none"
                  }`}
                >
                  {category}
                </p>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row gap-[1.5rem]">
          <img
            style={{ display: !!isOpenSearch ? "none" : "" }}
            className="w-[20px] h-[20px] cursor-pointer"
            loading="lazy"
            src="/assets/images/search.png"
            alt="insert_pic"
            onClick={() => setIsOpenSearch(true)}
          />
          {!!isOpenSearch && <Search setIsOpenSearch={setIsOpenSearch} />}
          {!isOpenSearch && (
            <img
              className="w-[20px] h-[20px] cursor-pointer"
              loading="lazy"
              src="/assets/images/filter-black.png"
              alt="insert_pic"
              onClick={() => setIsOpenFilter(true)}
            />
          )}
        </div>
      </div>
      {isOpenFilter === true && (
        <Dialog width={"modal-width-lg"} setIsOpenNews={setIsOpenFilter}>
          <FormFilter setIsOpenNews={setIsOpenFilter} />
        </Dialog>
      )}
    </>
  );
};

export default DashboardNavbar;
