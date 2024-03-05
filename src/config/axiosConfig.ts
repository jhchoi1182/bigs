import { handleClientSideError } from "@/service/exceptionService";
import axios from "axios";
import { apiUrl, clientId, clientSecret, isDevEnv } from "./envConfig";

export const clientInstance = axios.create({
  baseURL: isDevEnv ? "http://localhost:3000/" : "https://bigs-jhchoi1182.vercel.app/",
});

export const serverInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    "X-Naver-Client-Id": clientId,
    "X-Naver-Client-Secret": clientSecret,
  },
});

clientInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    handleClientSideError(error);
    return Promise.reject(error);
  },
);
