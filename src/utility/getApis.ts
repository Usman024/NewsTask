import { NewsResource } from "../types/News";

export function getSourceRelatedURl(
  category: string,
  selectedSource: NewsResource
) {
  const NewsApiUrl = `&q=${category}`;
  const NewYorkTimesApiUrl = `fq=news_desk:("${category}")`;
  const BBCApiUrl = `&q=${category}`;

  return requiredURL(selectedSource, NewsApiUrl, NewYorkTimesApiUrl, BBCApiUrl);
}

export function getSearchRelatedURl(
  title: string,
  selectedSource: NewsResource
) {
  const NewsApiUrl = `&q=${title}`;
  const NewYorkTimesApiUrl = `fq=headline:("${title}")`;
  const BBCApiUrl = `&q=${title}`;

  return requiredURL(selectedSource, NewsApiUrl, NewYorkTimesApiUrl, BBCApiUrl);
}

export function getFilterRelatedURl(
  date: string,
  category: string,
  selectedSource: NewsResource
) {
  const NewsApiUrl = `&q=${category}&from=${date}&to=${date}`;
  const NewYorkTimesApiUrl = `fq=news_desk:("${category}")${
    date ? ` AND pub_date:("${date}")` : ""
  }`;
  const BBCApiUrl = `&q=${category}&from=${date}&to=${date}`;

  return requiredURL(selectedSource, NewsApiUrl, NewYorkTimesApiUrl, BBCApiUrl);
}

function requiredURL(
  selectedSource: NewsResource,
  NewsApiUrl: string,
  NewYorkTimesApiUrl: string,
  BBCApiUrl: string
) {
  if (selectedSource == "NewYork Times") return NewYorkTimesApiUrl;
  else if (selectedSource == "BBC News") return BBCApiUrl;
  else return NewsApiUrl;
}
