import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { NewsItem } from "@/type/newsData";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.url.split("query=")[1];
  const decodedQuery = decodeURIComponent(query);

  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);
    const filteredItem = data.items.filter((item: NewsItem) => decodedQuery === item.title);
    return new Response(JSON.stringify(filteredItem), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
