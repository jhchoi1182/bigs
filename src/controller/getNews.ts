import { newsApi } from "@/api/newsApi";
import { errorStore } from "@/stores/errorStore";
import { loadingStore } from "@/stores/loadingStore";
import { newsListStore } from "@/stores/newsListsStore";
import { newsOrderStore } from "@/stores/newsOrderStore";
import { paginationStore } from "@/stores/paginationStore";

function useGetNews() {
  const fetchNews = async () => {
    try {
      const data = await newsApi.get(paginationStore.currentPage, newsOrderStore.getSelectedValue());
      newsListStore.setNewsData(data);
    } catch (error) {
      errorStore.setIsError(true);
    } finally {
      loadingStore.setIsFetching(false);
    }
  };
  return { fetchNews };
}

export default useGetNews;
