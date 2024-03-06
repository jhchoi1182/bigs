import { clientInstance as clientInstance } from "@/config/axiosConfig";

export const newsApi = {
  getNews: async (filter: "title" | "desc", query: string, page: number, sort: string) => {
    const { data } = await clientInstance.get(`/api/news?filter=${filter}&query=${query}&page=${page}&sort=${sort}`);
    return data;
  },
  getDetail: async (query: string) => {
    console.log(query);

    const { data } = await clientInstance.get(`/api/article?query=${query}`);
    return data;
  },
  getAllNews: async () => {
    const { data } = await clientInstance.get(`/api/news/all`);
    return data;
  },
};
