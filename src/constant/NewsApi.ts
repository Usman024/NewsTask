export const baseUrlNewsAPI =
  "https://newsapi.org/v2/everything?sources=the-wall-street-journal,al-jazeera-english,espn,fox-sports&sortBy=publishedAt&pageSize=10";
export const baseUrlNewYorkTimes =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&";
export const baseUrlBBC =
  "https://newsapi.org/v2/everything?sources=bbc-news,bbc-sport,bleacher-report,cnn&sortBy=publishedAt&pageSize=10";

export const baseURLs = {
  NewsAPI:
    "https://newsapi.org/v2/everything?sources=the-wall-street-journal,al-jazeera-english,espn,fox-sports&sortBy=publishedAt&pageSize=10",
  "NewYork Times":
    "https://api.nytimes.com/svc/search/v2/articlesearch.json?sort=newest&",
  "BBC News":
    "https://newsapi.org/v2/everything?sources=bbc-news,bbc-sport,bleacher-report,cnn&sortBy=publishedAt&pageSize=10",
};

export const apiKeys = {
  NewsAPI: `&apiKey=${process.env.REACT_APP_NewsApiKey}`,
  "NewYork Times": `&api-key=${process.env.REACT_APP_NewYorkTimesKey}`,
  "BBC News": `&apiKey=${process.env.REACT_APP_NewsApiKey}`,
};
