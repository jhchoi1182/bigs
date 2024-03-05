import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { sortAndPaginateNews } from "@/service/serverSideService";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const params = request.nextUrl?.searchParams;
  const sort = params.get("sort");
  const page = params.get("page");
  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);

    if ((sort !== "desc" && sort !== "asc") || !page)
      return new Response(JSON.stringify("Invalid queryString"), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400,
      });

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
