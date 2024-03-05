import { clientInstance as clientInstance } from "@/config/axiosConfig";

export const newsApi = {
  get: async () => {
    const data = await clientInstance.get(`/api`);
    return data;
  },
};
