import { clientInstance as clientInstance } from "@/config/axiosConfig";

export const newsApi = {
  get: async (page: number, sort: "desc" | "asc" = "desc") => {
    const { data } = await clientInstance.get(`/api?page=${page}&sort=${sort}`);
    return data;
  },
  search: async (filter: "title" | "desc", query: string, page: number, sort: "desc" | "asc" = "desc") => {
    const { data } = await clientInstance.get(`/api?filter=${filter}&query=${query}&page=${page}&sort=${sort}`);
    return data;
  },
};
