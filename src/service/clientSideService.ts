import { newsOrderStore } from "@/stores/newsOrderStore";
import { paginationStore } from "@/stores/paginationStore";
import { searchValueStore } from "@/stores/searchStore";

export function useSessionStorage() {
  function preventRefresh(setIsCompleteSetStore: React.Dispatch<React.SetStateAction<boolean>>) {
    const savedCurrentPage = sessionStorage.getItem("currentPage");
    const savedSortValue = sessionStorage.getItem("sort");
    const savedSearchKeyword = sessionStorage.getItem("searchKeyword");
    const savedFilterValue = sessionStorage.getItem("filterValue");

    if (savedSortValue) {
      newsOrderStore.setSelectedValue(savedSortValue);
    }
    if (savedCurrentPage) {
      paginationStore.setCurrentPage(+savedCurrentPage);
    }
    if (savedSearchKeyword) {
      searchValueStore.setSearchKeyword(savedSearchKeyword);
    }
    if (savedFilterValue) {
      searchValueStore.setFilterValue(savedFilterValue);
    }

    setIsCompleteSetStore(true);
  }
  return { preventRefresh };
}

export function parseHtml(htmlString: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, "text/html");
  return doc.body.textContent || "";
}
export function formatDate(dateString: string) {
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
