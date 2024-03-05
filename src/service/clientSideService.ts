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
    } else if (savedCurrentPage) {
      paginationStore.setCurrentPage(+savedCurrentPage);
    } else if (savedSearchKeyword) {
      searchValueStore.setSearchKeyword(savedSearchKeyword);
    } else if (savedFilterValue) {
      searchValueStore.setFilterValue(savedFilterValue);
    }
    setIsCompleteSetStore(true);
  }
  return { preventRefresh };
}
