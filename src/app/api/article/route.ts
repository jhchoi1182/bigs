import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { convertTitleAndPubDate, filterNews } from "@/service/serverSideService";
import { NewsItem } from "@/type/newsData";
import { NextRequest } from "next/server";
import he from "he";

export async function GET(request: NextRequest) {
  const params = request.nextUrl?.searchParams;
  const query = params.get("query");
  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);
    const filteredItem = data.items.filter((item: NewsItem) => query === he.decode(item.title));
    const result = convertTitleAndPubDate(filteredItem, true);
    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
