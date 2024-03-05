import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { sortAndPaginateNews } from "@/service/newsService";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);
    const url = new URL(request.url);
    const params = new URLSearchParams(url.search);
    const sort = params.get("sort") ?? "desc";
    const page = params.get("page");

    if ((sort !== "desc" && sort !== "asc") || !page) throw new Error("queryString 오류");

    const sortedAndPaginatedNews = sortAndPaginateNews(data, +page, sort);
    return new Response(JSON.stringify(sortedAndPaginatedNews), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
