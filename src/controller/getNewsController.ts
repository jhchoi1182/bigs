import { newsApi } from "@/api/newsApi";
import { loadingStore } from "@/stores/loadingStore";
import { newsListStore } from "@/stores/newsListsStore";
import { newsOrderStore } from "@/stores/newsOrderStore";
import { paginationStore } from "@/stores/paginationStore";
import { searchValueStore } from "@/stores/searchStore";
import { NewsData } from "@/type/newsData";

function getNewsController() {
  async function fetchNews() {
    try {
      loadingStore.setIsFetching(true);
      const data = await newsApi.getNews(
        searchValueStore.getFilterValue(),
        searchValueStore.searchKeyword,
        paginationStore.currentPage,
        newsOrderStore.getSelectedValue(),
      );
      resetPaginationIfOutOfRange(data);
      newsListStore.setNewsData(data);
    } catch (error) {
      loadingStore.setIsError(true);
    } finally {
      loadingStore.setIsFetching(false);
    }
  }

  const resetPaginationIfOutOfRange = (data: NewsData) => {
    if (Math.ceil(data?.total / 10) < paginationStore.currentPage) {
      paginationStore.setCurrentPage(1);
    }
  };
  return { fetchNews };
}

export default getNewsController;
