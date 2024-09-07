import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useStore } from "../../store/index.ts";
import { getSearchNews } from "../../APIs/News.ts";
import { getNews } from "../../APIs/News.ts";

const Search = ({ setIsOpenSearch }) => {
  const prevDataRef = useRef<string>(""); // Store the previous value
  const [data, setData] = useState<string>("");

  const { selectedCategory, selectedSource, setIsLoading, newsArray } =
    useStore((state) => ({
      setIsLoading: state.setIsLoading,
      selectedSource: state.selectedSource,
      selectedCategory: state.selectedCategory,
      newsArray: state.newsArray,
    }));

  useEffect(() => {
    if (!!!prevDataRef.current && !!!data) return;

    if (!!prevDataRef && !!!data) {
      prevDataRef.current = "";
      (async function () {
        setIsLoading(true);
        await getNews(selectedCategory, selectedSource);
        setIsLoading(false);
      })();
      return;
    }

    const getData = setTimeout(async () => {
      setIsLoading(true);
      await getSearchNews(data, selectedCategory, selectedSource);
      setIsLoading(false);
    }, 1000);
    prevDataRef.current = data;
    return () => clearTimeout(getData);
  }, [data]);

  useEffect(() => {
    gsap.fromTo(
      "#search",
      { opacity: 0, x: -100 },
      { opacity: 1, x: 0, delay: 0.2, duration: 0.5, ease: "power2.out" }
    );
    gsap.fromTo(
      "#close",
      { opacity: 0, rotate: "-180deg" },
      {
        opacity: 1,
        rotate: "0deg",
        delay: 0.2,
        duration: 0.5,
        ease: "power2.out",
      }
    );
  }, []);

  async function closeSearch() {
    if (!newsArray.length) {
      setIsLoading(true);
      await getNews(selectedCategory, selectedSource);
      setIsLoading(false);
    }
    setIsOpenSearch(false);
  }
  return (
    <form className="flex flex-row items-center justify-between gap-2 text-md">
      <input
        id="search"
        autoFocus
        className="outline-none bg-transparent w-[25vw] h-[2rem] md:w-[15vw]"
        type="text"
        value={data}
        placeholder="Type here..."
        onChange={(e) => setData(e.target.value)}
      />
      <img
        onClick={() => closeSearch()}
        id="close"
        loading="lazy"
        className="w-[15px] h-[15px] cursor-pointer"
        src="/assets/images/close.png"
        alt="insert"
      />
    </form>
  );
};

export default Search;
