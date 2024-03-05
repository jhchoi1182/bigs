"use client";

import NewsBoard from "@/components/NewsBoard/index/NewsBoard";
import { loadingStore } from "@/stores/loadingStore";
import { observer } from "mobx-react-lite";
import dynamic from "next/dynamic";
import styled from "styled-components";
const TopToolbar = dynamic(() => import("@/components/topToolbar/index/TopToolbar"), { ssr: false });

export default observer(function Home() {
  return (
    <Wrapper>
      {loadingStore.isOrderSelectLoading && <Loading>더미</Loading>}
      <TopToolbar />
      <NewsBoard />
    </Wrapper>
  );
});

const Wrapper = styled.main`
  width: 100%;
  min-width: 88rem;
  padding: 80px 10%;
`;

const Loading = styled.div`
  height: 11.5rem;
  color: transparent;
`;
