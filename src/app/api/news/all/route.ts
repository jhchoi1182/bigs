import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";
import { convertTitleAndPubDate } from "@/service/serverSideService";

export async function GET() {
  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);
    const result = convertTitleAndPubDate(data?.items);
    return new Response(JSON.stringify(result), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
