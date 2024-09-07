import { News } from "../types/News.ts";
import { useStore } from "../store/index.ts";

// We are receiving different responses with different key values
// We are mapping over them and utilizing our required key
// Then we are storing them to News type. So we can use them
// with out breaking on code in UI
export function newsMapper(newsArr, category, selectedSource): void {
  let arr: News[] = [];

  const setNewsSortedArray = useStore.getState().setNewsSortedArray;
  setNewsSortedArray([]);
  if (selectedSource === "NewsAPI" || selectedSource === "BBC News") {
    newsArr.map((news, index) => {
      arr.push({
        id: index,
        imgSrc: news.urlToImage,
        author: news.author,
        source: news.source.name,
        category: category,
        title: news.title,
        description: news.description,
        publishedAt: news.publishedAt,
      });
    });
  } else if (selectedSource === "NewYork Times") {
    newsArr.map((news, index) => {
      arr.push({
        id: index,
        imgSrc: `https://static01.nyt.com/${news.multimedia[0]?.url}`,
        author: news.byline.original,
        source: news.source,
        category: category,
        title: news.headline.main,
        description: news.lead_paragraph,
        publishedAt: news.published_date,
      });
    });
  }
  setNewsSortedArray(arr);
}

// Function to get formatted date required by NEW YORK Times API
export const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear();
  const mm = (date.getMonth() + 1).toString().padStart(2, "0");
  const dd = date.getDate().toString().padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};

// Debounce function to avoid a specific action for a specific
// duration of time (Using it in input search for news filtering)
export function debounce(callback, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback();
    }, delay);
  };
}
