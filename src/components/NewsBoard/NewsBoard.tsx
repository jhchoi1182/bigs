import { newsApi } from "@/api/newsApi";
import { newsLists } from "@/stores/newsListsStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Error from "../base/Error";

export default observer(function NewsBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const test = async () => {
      try {
        const data = await newsApi.get(currentPage);
        newsLists.setNewsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    test();
  }, []);

  if (isError) return <Error height="80%" />;

  return (
    <NewsBoardSection>
      {isLoading ? (
        <div>로딩중</div>
      ) : (
        <>
          <TotalNum>
            <span className="total">Total </span>
            <span>{newsLists.newsData.total}</span>
          </TotalNum>
          <Board></Board>
        </>
      )}
    </NewsBoardSection>
  );
});

const NewsBoardSection = styled.section`
  height: 80%;
`;

const TotalNum = styled.div`
  .total {
    font-weight: 500;
  }
`;

const Board = styled.div``;
