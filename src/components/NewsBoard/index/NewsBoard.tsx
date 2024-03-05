"use client";

import { newsListStore } from "@/stores/newsListsStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Error from "../../ui/Error";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import NewsItem, { NewsList } from "../elements/NewsItem";
import PaginationNumGroup from "@/components/pagination/index/PaginationNumGroup";
import getNewsController from "@/controller/getNewsController";
import NoResult from "@/components/ui/NoResult";
import { useSessionStorage } from "@/service/clientService";
import { loadingStore } from "@/stores/loadingStore";

export default observer(function NewsBoard() {
  const [isCompleteSetSort, setIsCompleteSetSort] = useState(false);
  const { fetchNews } = getNewsController();
  const { preventRefresh } = useSessionStorage();

  useEffect(() => {
    if (!isCompleteSetSort) return;
    fetchNews();
  }, [isCompleteSetSort]);

  useEffect(() => {
    preventRefresh(setIsCompleteSetSort);
  }, []);

  if (loadingStore.isError) return <Error height="80%" />;

  return (
    <NewsBoardSection>
      {loadingStore.isFetching ? (
        <LoadingSpinner />
      ) : (
        <>
          <TotalNum>
            <span className="total">Total </span>
            <span>{newsListStore.newsData.total}</span>
          </TotalNum>
          <Board>
            <NewsUl>
              <NewsListHeader>
                <div className="title">제목</div>
                <span className="time">작성일자</span>
              </NewsListHeader>
              {newsListStore.newsData.items.length === 0 ? (
                <NoResult />
              ) : (
                newsListStore.newsData.items?.map((data, i) => <NewsItem key={i} index={i} item={data} />)
              )}
            </NewsUl>
          </Board>
          <PaginationNumGroup />
        </>
      )}
    </NewsBoardSection>
  );
});

const NewsBoardSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  min-height: 45rem;
`;

const TotalNum = styled.div`
  align-self: flex-start;
  margin-bottom: 3rem;
  .total {
    font-weight: 500;
  }
`;

const Board = styled.div`
  width: 100%;
  height: 95%;
  border: 1px solid;
  border-radius: 20px;
`;

const NewsUl = styled.ul`
  height: 100%;
`;

const NewsListHeader = styled(NewsList)`
  border-bottom: 2px solid;
`;
