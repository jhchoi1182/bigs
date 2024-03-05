export interface NewsData {
  items: NewsItem[];
  page: number;
  total: number;
}

export interface NewsItem {
  title: string;
  description: string;
  link: string;
  originallink: string;
  pubDate: string;
}
