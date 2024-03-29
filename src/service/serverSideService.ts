import { NewsData, NewsItem } from "@/type/newsData";
import he from "he";

const pageSize = 10;

export function filterNews(data: NewsData, filter: "title" | "desc", query: string | null, page: number, sort: "asc" | "desc" = "desc"): NewsData {
  let filteredItems = data.items;

  if (query && query.trim() !== "") {
    filteredItems = filterByTitleOrDescription(filteredItems, filter, query);
  }
  page = adjustPageWithinRange(page, filteredItems?.length);
  const sortedFilteredItems = sortNewsItems(filteredItems, sort);
  const paginatedSortedFilteredItems = paginateNewsItems(sortedFilteredItems, page);

  return {
    ...data,
    items: paginatedSortedFilteredItems,
    page,
    total: filteredItems?.length,
  };
}

function filterByTitleOrDescription(items: NewsItem[], filter: "title" | "desc", query: string): NewsItem[] {
  return items.filter((item) => (filter === "title" ? item.title.includes(query) : item.description.includes(query)));
}
function adjustPageWithinRange(currentPage: number, totalItems: number): number {
  const totalPages = Math.ceil(totalItems / pageSize);
  return currentPage > totalPages ? 1 : currentPage;
}
function sortNewsItems(items: NewsItem[], sort: "asc" | "desc" = "desc"): NewsItem[] {
  return items.sort((a, b) => {
    const dateA = new Date(a.pubDate).getTime();
    const dateB = new Date(b.pubDate).getTime();

    if (dateA === dateB) {
      return b.title?.length - a.title?.length;
    }

    return sort === "asc" ? dateA - dateB : dateB - dateA;
  });
}
function paginateNewsItems(items: NewsItem[], page: number): NewsItem[] {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
}