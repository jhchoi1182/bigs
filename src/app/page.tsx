"use client";

import NewsBoard from "@/components/NewsBoard/index/NewsBoard";
import TopToolbar from "@/components/toolbar/index/TopToolbar";
import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper>
      <TopToolbar />
      <NewsBoard />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
  padding: 80px 10%;
`;
