import { instance } from "@/config/axiosConfig";

export const newsApi = {
  get: async () => {
    const data = await instance.get(`/api`);
    return data;
  },
};
