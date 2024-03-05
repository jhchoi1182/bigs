import { handleServerSideError } from "@/service/exceptionService";
import axios from "axios";

export async function GET() {
  const API_URL = `https://openapi.naver.com/v1/search/news.json?query=${encodeURI("스포츠")}&display=100`;
  const headers = {
    "X-Naver-Client-Id": process.env.NEXT_PUBLIC_Client_ID,
    "X-Naver-Client-Secret": process.env.NEXT_PUBLIC_Client_Secret,
  };

  try {
    const { data } = await axios.get(API_URL, { headers });
    return new Response(JSON.stringify(data), {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    if (!axios.isAxiosError(error)) return;
    const data = error?.response?.data;
    return new Response(
      JSON.stringify({
        message: data?.errorMessage,
        errorCode: data?.errorCode,
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: error.response?.status,
      },
    );
  }
}
