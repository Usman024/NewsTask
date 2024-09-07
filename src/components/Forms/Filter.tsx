import React, { useEffect, useState } from "react";
import { useStore } from "../../store/index.ts";
import { formatDate } from "../../utility/helperFunction.ts";
import { getFiteredNews } from "../../APIs/News.ts";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const FormFilter = ({ setIsOpenNews }) => {
  const {
    categories,
    setCategory,
    selectedCategory,
    sources,
    setSource,
    selectedSource,
    setIsLoading,
  } = useStore((state) => ({
    categories: state.categories,
    setCategory: state.setCategory,
    selectedCategory: state.selectedCategory,
    sources: state.sources,
    setSource: state.setSource,
    selectedSource: state.selectedSource,
    setIsLoading: state.setIsLoading,
  }));

  const [selectedDate, setSelectedDate] = useState<Date>();

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  });

  const handleClick = async () => {
    setIsOpenNews(false);
    setIsLoading(true);
    let formattedDate: any;
    if (!!selectedDate) formattedDate = formatDate(selectedDate);
    await getFiteredNews(formattedDate, selectedCategory, selectedSource);
    setIsLoading(false);
  };

  return (
    <div>
      <section className="grid w-full grid-cols-1 gap-3 h-fit md:grid-cols-2 3xl:px-[10vw] sm:gap-8 rounded-xl">
        <article className="flex justify-center mt-10">
          {/* @ts-ignore */}
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </article>

        <article className="flex flex-col gap-5">
          <section>
            <p className="mt-5 font-bold text-md md:text-lg">Sources</p>
            <div className="flex flex-wrap gap-3">
              {sources.map((source, index) => {
                return (
                  <div
                    key={index}
                    className={`cursor-pointer border-2 rounded-md text-[14px] px-[1rem] py-[0.5rem] text-center md:px-4 md:py-2 ${
                      source === selectedSource
                        ? "border-primaryColor"
                        : "border-black"
                    }`}
                    // @ts-ignore
                    onClick={() => setSource(source)}
                  >
                    {source}
                  </div>
                );
              })}
            </div>
          </section>
          <section>
            <p className="mt-5 font-bold text-md">Categories</p>
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => {
                return (
                  <div
                    key={index}
                    className={`capitalize cursor-pointer border-2 rounded-lg px-2 py-2 text-center ${
                      category === selectedCategory
                        ? "border-primaryColor"
                        : "border-black"
                    }`}
                    onClick={() => setCategory(category)}
                  >
                    {category}
                  </div>
                );
              })}
            </div>
          </section>
        </article>
      </section>
      <section className="flex justify-end">
        <button
          onClick={handleClick}
          className="flex flex-row items-center self-end gap-3 px-6 py-2 mt-3 text-white rounded-lg bottom-5 right-5 bg-primaryColor"
        >
          Filter
          <img
            className="w-[15px] h-[15px]"
            src="/assets/images/filter-white.png"
          />
        </button>
      </section>
    </div>
  );
};

export default FormFilter;
