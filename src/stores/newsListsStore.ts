import { NewsData } from "@/type/newsData";
import { makeAutoObservable } from "mobx";

class News {
  newsData: NewsData = {
    items: [],
    page: 0,
    total: 0,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setNewsData(value: NewsData) {
    this.newsData = value;
  }
}

export const newsLists = new News();
