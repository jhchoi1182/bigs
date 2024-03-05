import axios, { AxiosError } from "axios";

export const handleServerSideError = (error: unknown) => {
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
};

export const handleClientSideError = (error: AxiosError<any, any>) => {
  const errorCode = error?.response?.data?.errorCode;

  switch (errorCode) {
    case "SE01":
      alert("잘못된 쿼리요청입니다.");
      break;
    case "SE02":
      alert("부적절한 display 값입니다.");
      break;
    case "SE03":
      alert("부적절한 start 값입니다.");
      break;
    case "SE04":
      alert("부적절한 sort 값입니다.");
      break;
    case "SE05":
      alert("존재하지 않는 검색 api 입니다.");
      break;
    case "SE06":
      alert("잘못된 형식의 인코딩입니다.");
      break;
    case "SE99":
      alert("서버 에러");
      break;
    default:
      alert("시스템 에러");
      break;
  }
};
