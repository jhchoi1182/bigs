import { NewsData, NewsItem } from "@/type/newsData";

export function sortAndPaginateNews(data: NewsData, page: number, sort: "asc" | "desc" = "desc"): NewsData {
  const sortedItems = sortNewsItems(data.items, sort);
  const paginatedItems = paginateNewsItems(sortedItems, page);
  const convertedItems = convertPubDate(paginatedItems);

  return {
    items: convertedItems,
    page: page,
    total: data.items.length,
  };
}
export function filterNews(data: NewsData, filter: "title" | "desc", query: string | null, page: number, sort: "asc" | "desc" = "desc"): NewsData {
  if (!query) return data;

  const filteredItems = filterByTitleOrDescription(data.items, filter, query);
  const sortedFilteredItems = sortNewsItems(filteredItems, sort);
  const paginatedSortedFilteredItems = paginateNewsItems(sortedFilteredItems, page, 10);
  const convertedItems = convertPubDate(paginatedSortedFilteredItems);

  return {
    ...data,
    items: convertedItems,
    page: page,
    total: filteredItems.length,
  };
}

function sortNewsItems(items: NewsItem[], sort: "asc" | "desc" = "desc"): NewsItem[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.pubDate).getTime();
    const dateB = new Date(b.pubDate).getTime();
    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });
}
function paginateNewsItems(items: NewsItem[], page: number, pageSize: number = 10): NewsItem[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}
function filterByTitleOrDescription(items: NewsItem[], filter: "title" | "desc", query: string): NewsItem[] {
  return items.filter((item) => (filter === "title" ? item.title.includes(query) : item.description.includes(query)));
}
function convertPubDate(items: NewsItem[]) {
  return items.map((item) => ({ ...item, pubDate: formatDate(item.pubDate) }));
}
function formatDate(dateString: string) {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const monthFormatted = month.toString().padStart(2, "0");
  const dayFormatted = day.toString().padStart(2, "0");
  const hoursFormatted = hours.toString().padStart(2, "0");
  const minutesFormatted = minutes.toString().padStart(2, "0");

  return `${year}.${monthFormatted}.${dayFormatted} ${hoursFormatted}:${minutesFormatted}`;
}
