import axios from "axios";

const isDevEnv = process.env.NODE_ENV === "development";

export const instance = axios.create({
  baseURL: isDevEnv ? "http://localhost:3000/" : "https://bigs-jhchoi1182.vercel.app/",
});
