import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { filterNews } from "@/service/serverSideService";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl?.searchParams;
  const filter = params.get("filter");
  const query = params.get("query");
  const sort = params.get("sort");
  const page = params.get("page");

  const isInvalidSortType = sort !== "desc" && sort !== "asc";
  const isInvalidFilterType = filter !== "title" && filter !== "desc";

  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);

    if (isInvalidSortType || !page || isInvalidFilterType)
      return new Response(JSON.stringify("Invalid queryString"), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      });

    const sortedAndPaginatedNews = filterNews(data, filter, query, +page, sort);

    return new Response(JSON.stringify(sortedAndPaginatedNews), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
