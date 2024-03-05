import { clientInstance as clientInstance } from "@/config/axiosConfig";

export const newsApi = {
  get: async (filter: "title" | "desc", query: string, page: number, sort: string) => {
    const { data } = await clientInstance.get(`/api/news?filter=${filter}&query=${query}&page=${page}&sort=${sort}`);
    return data;
  },
};
