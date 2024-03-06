import { newsApi } from "@/api/newsApi";
import { loadingStore } from "@/stores/loadingStore";
import { NewsItem } from "@/type/newsData";

function getArticleController() {
  async function fetchArticle(title: string, setArticle: React.Dispatch<React.SetStateAction<NewsItem>>) {
    try {
      loadingStore.setIsFetching(true);
      const data = await newsApi.getDetail(decodeURIComponent(title));
      setArticle(data[0]);
    } catch (error) {
      loadingStore.setIsError(true);
    } finally {
      loadingStore.setIsFetching(false);
    }
  }

  return { fetchArticle };
}

export default getArticleController;
