"use client";

import NewsBoard from "@/components/NewsBoard/index/NewsBoard";
import PaginationNumGroup from "@/components/pagination/index/PaginationNumGroup";
import TopToolbar from "@/components/topToolbar/index/TopToolbar";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <TopToolbar />
      <NewsBoard />
      <PaginationNumGroup />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  min-width: 88rem;
  padding: 80px 10%;
`;
