import { newsOrderStore } from "@/stores/newsOrderStore";
import { paginationStore } from "@/stores/paginationStore";

export function useSessionStorage() {
  function preventRefresh(setIsCompleteSetSort: React.Dispatch<React.SetStateAction<boolean>>) {
    const savedCurrentPage = sessionStorage.getItem("currentPage");
    const savedSortValue = sessionStorage.getItem("sort");
    if (savedSortValue) {
      newsOrderStore.setSelectedValue(savedSortValue);
      setIsCompleteSetSort(true);
    }
    if (savedCurrentPage) {
      paginationStore.setCurrentPage(+savedCurrentPage);
    }
  }
  return { preventRefresh };
}
