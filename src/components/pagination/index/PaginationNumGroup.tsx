import Icon from "@/components/base/Icon";
import ArrowIcon from "@/components/ui/icons/ArrowIcon";
import { newsLists } from "@/stores/newsListsStore";
import { pagination } from "@/stores/paginationStore";
import { observer } from "mobx-react-lite";
import React from "react";
import styled from "styled-components";

export default observer(function PaginationNumGroup() {
  const pages = Math.ceil(newsLists.newsData.total / 10);
  const pagesArray = Array.from({ length: pages }, (_, index) => 1 + index);

  return (
    <PaginattionSection>
      <ArrowIcon onClick={() => pagination.goToPreviousPage()} />
      <PaginationNumUl>
        {pagesArray.map((page) => (
          <PageNum key={page} $isBold={pagination.currentPage === page} onClick={() => pagination.setCurrentPage(page)}>
            {page}
          </PageNum>
        ))}
      </PaginationNumUl>
      <ArrowIcon isNext onClick={() => pagination.goToNextPage()} />
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
