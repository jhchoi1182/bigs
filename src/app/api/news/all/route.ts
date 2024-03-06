import { serverInstance } from "@/config/axiosConfig";
import { handleServerSideError } from "@/service/exceptionService";

export async function GET() {
  try {
    const { data } = await serverInstance.get(`news.json?query=${encodeURI("스포츠")}&display=100`);
    return new Response(JSON.stringify(data?.items), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return handleServerSideError(error);
  }
}
