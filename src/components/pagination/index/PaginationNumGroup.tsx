"use client";

import Icon from "@/components/base/Icon";
import ArrowIcon from "@/components/ui/icons/ArrowIcon";
import useGetNews from "@/controller/getNews";
import { newsListStore } from "@/stores/newsListsStore";
import { paginationStore } from "@/stores/paginationStore";
import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

export default observer(function PaginationNumGroup() {
  const { fetchNews } = useGetNews();
  const pages = Math.ceil(newsListStore.newsData.total / 10);
  const pagesArray = Array.from({ length: pages }, (_, index) => 1 + index);
  const isOnePage = pagesArray.length < 2;

  const goToPreviousPage = () => {
    paginationStore.goToPreviousPage();
    fetchNews();
  };

  const goToNextPage = () => {
    paginationStore.goToNextPage();
    fetchNews();
  };

  const goToPage = (page: number) => {
    paginationStore.setCurrentPage(page);
    fetchNews();
  };

  return (
    <PaginattionSection>
      {!isOnePage && <ArrowIcon onClick={goToPreviousPage} />}
      <PaginationNumUl>
        {pagesArray.map((page) => {
          const isCurrentPage = paginationStore.currentPage === page;
          return (
            <PageNum key={page} $isBold={isCurrentPage} onClick={() => !isCurrentPage && goToPage(page)}>
              {page}
            </PageNum>
          );
        })}
      </PaginationNumUl>
      {!isOnePage && <ArrowIcon isNext onClick={goToNextPage} />}
    </PaginattionSection>
  );
});

const PaginattionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2%;
  margin-top: 2rem;
  ${Icon} {
    display: flex;
    align-items: center;
  }
`;

const PaginationNumUl = styled.ul`
  display: flex;
  gap: 6rem;
`;

const PageNum = styled.li<{ $isBold: boolean }>`
  font-weight: ${({ $isBold }) => ($isBold ? "700" : "")};
  cursor: pointer;
`;
