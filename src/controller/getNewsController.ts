import { newsApi } from "@/api/newsApi";
import { loadingStore } from "@/stores/loadingStore";
import { newsListStore } from "@/stores/newsListsStore";
import { newsOrderStore } from "@/stores/newsOrderStore";
import { paginationStore } from "@/stores/paginationStore";

function getNewsController() {
  const fetchNews = async () => {
    try {
      const data = await newsApi.get(paginationStore.currentPage, newsOrderStore.getSelectedValue());
      newsListStore.setNewsData(data);
    } catch (error) {
      loadingStore.setIsError(true);
    } finally {
      loadingStore.setIsFetching(false);
    }
  };
  return { fetchNews };
}

export default getNewsController;
