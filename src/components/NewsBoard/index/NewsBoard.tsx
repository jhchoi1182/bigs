import { newsApi } from "@/api/newsApi";
import { newsLists } from "@/stores/newsListsStore";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Error from "../../ui/Error";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import NewsItem, { NewsList } from "../elements/NewsItem";
import { newsOrder } from "@/stores/newsOrderStore";

export default observer(function NewsBoard() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await newsApi.get(currentPage, newsOrder.getSelectedValue());
        newsLists.setNewsData(data);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchNews();
  }, [newsOrder.selectedValue]);

  if (isError) return <Error height="80%" />;

  return (
    <NewsBoardSection>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <TotalNum>
            <span className="total">Total </span>
            <span>{newsLists.newsData.total}</span>
          </TotalNum>
          <Board>
            <NewsUl>
              <NewsListHeader>
                <div className="title">제목</div>
                <span className="time">작성일자</span>
              </NewsListHeader>
              {newsLists.newsData.items?.map((data, i) => (
                <NewsItem key={i} index={i} item={data} />
              ))}
            </NewsUl>
          </Board>
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
