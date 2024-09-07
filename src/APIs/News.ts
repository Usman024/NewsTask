import {
  getSourceRelatedURl,
  getSearchRelatedURl,
  getFilterRelatedURl,
} from "../utility/getApis.ts";
import { newsMapper } from "../utility/helperFunction.ts";
import { NewsResource } from "../types/News.ts";
import { GET } from "./Fetch.ts";
import { toast } from "react-toastify";

// function to get News based on category (On refresh page)
export async function getNews(category: string, selectedSource: NewsResource) {
  const newsAPI: string = getSourceRelatedURl(category, selectedSource);
  try {
    // Using custom build get method Instead of AXios or RTK Query For API calls
    const apiResponse: any = await GET(newsAPI, selectedSource);

    // Mapping response of api so we can use it in UI without any headache of key's
    newsMapper(apiResponse, category, selectedSource);
  } catch (err) {
    toast(err);
  }
}

// function to get News Based on input search
export async function getSearchNews(
  title: string,
  category: string,
  selectedSource: NewsResource
) {
  const newsAPI: string = getSearchRelatedURl(title, selectedSource);
  try {
    // Using custom build get method Instead of AXios or RTK Query For API calls
    const apiResponse = await GET(newsAPI, selectedSource);

    // Mapping response of api so we can use it in UI without any headache of key's
    newsMapper(apiResponse, category, selectedSource);
  } catch (err) {
    toast(err);
  }
}

// function to get News Based on Selected filters
export async function getFiteredNews(
  date: string,
  category: string,
  selectedSource: NewsResource
) {
  const newsAPI: string = getFilterRelatedURl(date, category, selectedSource);
  try {
    // Using custom build get method Instead of AXios or RTK Query For API calls
    const apiResponse = await GET(newsAPI, selectedSource);

    // Mapping response of api so we can use it in UI without any headache of key's
    newsMapper(apiResponse, category, selectedSource);
  } catch (err) {
    toast(err);
  }
}
